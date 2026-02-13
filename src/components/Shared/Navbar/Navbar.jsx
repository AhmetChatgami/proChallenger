import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // z-50 এবং sticky top-0 নিশ্চিত করবে এটি ব্যানারের উপরে থাকবে
    <div className="fixed w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="py-2 ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <Logo></Logo>
            </Link>

            {/* Desktop NavLinks - মোবাইলে লুকানো থাকবে (hidden), বড় স্ক্রিনে দেখাবে (md:flex) */}
            <div className="hidden md:flex items-center gap-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Home
              </NavLink>
              <NavLink 
                to="/all-contests" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                All Contests
              </NavLink>
              {user && (
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Dashboard
                </NavLink>
              )}
            </div>

            {/* Dropdown Menu (Mobile & User Profile) */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {/* মোবাইল মেনু: ড্যাশবোর্ড বা হোম এখানেও থাকবে ছোট স্ক্রিনের জন্য */}
                    <Link to="/" className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                      Home
                    </Link>
                    <Link to="/all-contests" className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                      All Contests
                    </Link>

                    {user ? (
                      <>
                        <Link to="/dashboard" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                          Dashboard
                        </Link>
                        <Link to="/dashboard/my-profile" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                          My Profile
                        </Link>
                        <div onClick={logOut} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer text-red-500">
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                          Login
                        </Link>
                        <Link to="/signup" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;