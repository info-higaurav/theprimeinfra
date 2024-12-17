import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeatureProperties() {
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

    const cardVariants = {
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
        <div className="py-32 bg-gradient-to-b from-slate-900 to-gray-800">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Featured <span className="text-amber-400">Properties</span>
                </h2>

                {/* Filter Tags */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="px-6 py-2 rounded-full bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">
                        All
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-700 text-gray-200 font-semibold hover:bg-slate-600 transition-colors">
                        Luxury
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-700 text-gray-200 font-semibold hover:bg-slate-600 transition-colors">
                        Apartments
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-700 text-gray-200 font-semibold hover:bg-slate-600 transition-colors">
                        Villas
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-700 text-gray-200 font-semibold hover:bg-slate-600 transition-colors">
                        Waterfront
                    </button>
                </div>

                <motion.div 
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div 
                        variants={cardVariants}
                        className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="overflow-hidden">
                            <img 
                                src="./assets/images/Modern-Luxury-Villa.jpg" 
                                alt="Luxury Home"
                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Luxury</span>
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Villa</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Modern Luxury Villa</h3>
                            <p className="text-gray-300 mb-4">Mumbai, Maharashtra</p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-400 font-bold text-xl hover:scale-110 transition-transform duration-300">₹18.5 Cr</span>
                                <button className="px-4 py-2 bg-amber-500 text-slate-900 rounded-md hover:bg-amber-400 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="overflow-hidden">
                            <img 
                                src="./assets/images/Modern-Luxury-Villa.jpg" 
                                alt="Modern Apartment"
                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Luxury</span>
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Apartment</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Downtown Penthouse</h3>
                            <p className="text-gray-300 mb-4">Bandra, Mumbai</p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-400 font-bold text-xl hover:scale-110 transition-transform duration-300">₹12.8 Cr</span>
                                <button className="px-4 py-2 bg-amber-500 text-slate-900 rounded-md hover:bg-amber-400 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="overflow-hidden">
                            <img 
                                src="./assets/images/Waterfront-Estate.jpg" 
                                alt="Waterfront Property"
                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Luxury</span>
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Waterfront</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Waterfront Estate</h3>
                            <p className="text-gray-300 mb-4">Worli, Mumbai</p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-400 font-bold text-xl hover:scale-110 transition-transform duration-300">₹24.5 Cr</span>
                                <button className="px-4 py-2 bg-amber-500 text-slate-900 rounded-md hover:bg-amber-400 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}