import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazon-yellow">
        <select
          name=""
          id=""
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
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
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};
export default Search;
