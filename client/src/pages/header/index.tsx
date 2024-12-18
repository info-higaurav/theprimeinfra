import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3
            }
        }
    };

    const navItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <header className="bg-gradient-to-r from-slate-900 to-gray-800 shadow-lg fixed top-0 z-50 w-full">
            <div className="container mx-auto px-4 py-5">
                <div className="flex items-center justify-between">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-4"
                    >
                        <h1 className="text-2xl font-bold text-white flex items-center">
                           <span className="relative -top-5 left-4 text-[10px]">The</span>
                           <div>
                               <span className="text-amber-400">Prime</span>Infra
                           </div>
                        </h1>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-6">
                            {["Home", "Buy", "Rent", "Agents", "Contact"].map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="text-gray-200 hover:text-amber-400 transition-colors"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                       <NavLink to="/sign-in">
                       <motion.button 
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="px-4 py-2 text-gray-200 hover:text-amber-400 transition-colors"
                        >
                            Sign In
                        </motion.button>
                       </NavLink>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="px-4 py-2 bg-amber-500 text-slate-900 rounded-md hover:bg-amber-400 transition-colors shadow-md font-semibold"
                        >
                            List Property
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-amber-400 bg-transparent"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav 
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="md:hidden mt-4 space-y-3 pb-3"
                        >
                            {["Home", "Buy", "Rent", "Agents", "Contact"].map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    variants={navItemVariants}
                                    transition={{ delay: i * 0.1 }}
                                    className="block text-gray-200 hover:text-amber-400 transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.div 
                                variants={navItemVariants}
                                transition={{ delay: 0.5 }}
                                className="pt-2 space-y-2"
                            >
                                <NavLink to="/sign-in">
                                <motion.button 
                                    whileTap={{ scale: 0.95 }}
                                    className="block w-full px-4 py-2 text-gray-200 bg-transparent hover:text-amber-400 transition-colors"
                                >
                                    Sign In
                                </motion.button>
                                </NavLink>
                                <motion.button 
                                    whileTap={{ scale: 0.95 }}
                                    className="block w-full px-4 py-2 bg-amber-500 text-slate-900 rounded-md hover:bg-amber-400 transition-colors shadow-md font-semibold"
                                >
                                    List Property
                                </motion.button>
                            </motion.div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}