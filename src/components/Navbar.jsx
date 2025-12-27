import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Indo-Prime
        </h1>

        <div className="space-x-8 font-medium text-white text-lg">
          <Link className="hover:text-blue-300 transition" to="/">Home</Link>
          <Link className="hover:text-blue-300 transition" to="/about">About</Link>
          <Link className="hover:text-blue-300 transition" to="/products">Products</Link>
          <Link className="hover:text-blue-300 transition" to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
