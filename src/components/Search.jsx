import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { useNavigate, createSearchParams } from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazon-yellow">
        <select
          name=""
          id=""
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="">Deals</option>
          <option value="">Amazon</option>
          <option value="">Fashion</option>
          <option value="">Computers</option>
          <option value="">Home</option>
          <option value="">Mobile</option>
        </select>
        <input
          className="flex grow items-center h-[100%] p-3 text-black outline-none"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="w-[45px]" onClick={onHandleSubmit}>
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && searchTerm !== "" && (
        <div className="bg-white text-black w-full z-40 absolute p-4 mt-1">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.includes(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                className="cursor-pointer hover:text-blue-500"
                key={suggestion.id}
                onClick={() => {
                  setSearchTerm(suggestion.title);
                }}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Search;
