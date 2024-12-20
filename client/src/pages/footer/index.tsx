import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="bg-slate-900 text-gray-300 py-32">
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="container mx-auto px-4"
            >
                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="relative -top-4 left-4 text-[8px]">The</span>
                            <div>
                                <span className="text-amber-400">Prime</span>Infra
                            </div>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner in real estate, delivering exceptional properties and service since 2010.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                            <li><a href="/properties" className="hover:text-amber-400 transition-colors">Properties</a></li>
                            <li><a href="/agents" className="hover:text-amber-400 transition-colors">Our Agents</a></li>
                            <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="/buy" className="hover:text-amber-400 transition-colors">Buy Property</a></li>
                            <li><a href="/sell" className="hover:text-amber-400 transition-colors">Sell Property</a></li>
                            <li><a href="/rent" className="hover:text-amber-400 transition-colors">Rent Property</a></li>
                            <li><a href="/invest" className="hover:text-amber-400 transition-colors">Property Investment</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <div className="space-y-3">
                            <p>Mandakini Vihar , Sahastradhara Road</p>
                            <p>Dehradun, Uttrakhand 248001</p>
                            <p>Phone: 
                                <a href="tel:+918057235806" className="hover:text-amber-400">+91 8057 235806</a>
                            </p>
                            <p>Email: info@theprimeinfra.com</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        &copy; 2024 ThePrimeInfra. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}