import { Search } from './';
import {MapPinIcon, ShoppingCartIcon, Bars3Icon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const cart = useSelector((state) => state.cart.productsNumber)
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazon text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src="../images/amazon.png"
              alt=""
            />
          </Link>

          <div className="px-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold -ml-[19px]">
              <span className="flex items-start">
                <MapPinIcon className="h-[20px]" />
                Zimbabwe
              </span>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* Right */}
        <div className="flex items-center m-4">
          <div className="px-4">
            <div className="text-xs xl:text-sm">Hello, Sign In</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>

          <div className="px-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

          <Link to={'/checkout'}>
            <div className="flex px-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className='relative'>
                <div className="absolute -left-[8px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center bg-amazon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div className="flex items-center">
          <Bars3Icon className="h-[25px] mr-1" />
          <h1 className="font-bold">All</h1>
        </div>
        <div>Today&lsquo;s Deals</div>
        <div>Registry</div>
        <div>Customer Service</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
}
export default Navbar