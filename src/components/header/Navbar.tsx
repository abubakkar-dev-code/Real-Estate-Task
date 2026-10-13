import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="py-4 px-15 flex w-full shadow-lg justify-between items-center">
        <div>
          <p className="text-4xl tracking-widest font-light font-serif">LUXE</p>
          <p className="tracking-widest text-gray-500 text-xs">PROPERTIES</p>
        </div>
        <ul className="flex gap-10">
          <li>
            <Link to="/properties" className="hover:hover:text-blue-600">
              Properties
            </Link>
          </li>
          <li>
            <Link to="/smart" className=" hover:hover:text-blue-600">
              Smart OwnerShip
            </Link>
          </li>
          <li>
            <Link to="/why" className=" hover:hover:text-blue-600">
              Why Dubai
            </Link>
          </li>
          <li>
            <Link to="/about" className=" hover:hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="font-semibold hover:text-blue-600">
              Faqs
            </Link>
          </li>
        </ul>
        <div>
          <button className="px-5 py-3 rounded-3xl bg-black text-white font-semibold">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
