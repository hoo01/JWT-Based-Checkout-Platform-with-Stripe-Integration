import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="h-[70px] bg-[#E6F4F1] text-slate-800 z-50 flex items-center sticky top-0 dow-mshad">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
                <Link to="/" className="flex items-center text-2xl font-bold text-slate-900">
                    {/* <FaStore className="mr-2 text-3xl text-slate-900" /> */}
                    <span className="font-[Poppins]">Smart Devices</span>
                </Link>

                <ul
                    className={`flex sm:gap-10 gap-4 sm:items-center sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md 
            ${navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"}
            transition-all duration-200 sm:h-fit bg-[#E6F4F1] text-slate-800 sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
                >
                    {["Home", "Products", "About", "Contact"].map((item, i) => {
                        const route = item.toLowerCase();
                        const isActive = path === `/${route === "home" ? "" : route}`;
                        return (
                            <li key={i} className="font-medium transition-all duration-150">
                                <Link
                                    to={`/${route === "home" ? "" : route}`}
                                    className={`transition-all duration-150 px-1 ${isActive ? "font-semibold" : "hover:text-[#00aa92] hover:font-semibold"}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        );
                    })}

                    <li className="font-medium transition-all duration-150">
                        <Link to="/cart" className="relative">
                            <Badge
                                badgeContent={cart?.length || 0}
                                color="primary"
                                showZero
                                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        fontSize: '0.6rem',
                                        height: 16,
                                        minWidth: 16,
                                        top: 7,
                                        right: 3,
                                    },
                                }}
                            >
                                <FaShoppingCart className="text-2xl hover:text-[#00aa92]" />
                            </Badge>
                        </Link>
                    </li>
                    {(user && user.id) ? (
                       <li>
                        <UserMenu />
                       </li>
                    ) : (
                    <li>
                        <Link to="/login">
                            <FaSignInAlt className="text-xl text-black hover:text-[#00aa92]" />
                        </Link>

                    </li>
                    )}
                </ul>

                {/* mobile menu button */}
                <button onClick={() => setNavbarOpen(!navbarOpen)} className="sm:hidden">
                    {navbarOpen ? (
                        <RxCross2 className="text-3xl text-slate-800" />
                    ) : (
                        <IoIosMenu className="text-3xl text-slate-800" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
