import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
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
        <div className="py-32 min-h-screen bg-gradient-to-b from-slate-900 to-gray-800">
            <div className="container mx-auto px-4 py-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                >
                    What Our <span className="text-amber-400">Clients Say</span>
                </motion.h1>

                <motion.div 
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
                >
                    <motion.div variants={cardVariants} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-6">
                            <img 
                                src="./assets/images/Manoj-Jayant.jpg" 
                                alt="Rajesh Kumar"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-white font-semibold text-lg">Rajesh Kumar</h3>
                                <p className="text-amber-400">Property Buyer</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            "ThePrimeInfra made my dream of owning a home in Mumbai a reality. Their professional approach and attention to detail were outstanding."
                        </p>
                    </motion.div>

                    <motion.div variants={cardVariants} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-6">
                            <img 
                                src="./assets/images/Priya-Sharma.jpg" 
                                alt="Priya Sharma"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-white font-semibold text-lg">Priya Sharma</h3>
                                <p className="text-amber-400">Property Seller</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            "I was amazed by how quickly they sold my property. Their market knowledge and negotiation skills are exceptional."
                        </p>
                    </motion.div>

                    <motion.div variants={cardVariants} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-6">
                            <img 
                                src="./assets/images/Amit-Patel.jpg" 
                                alt="Amit Patel"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-white font-semibold text-lg">Amit Patel</h3>
                                <p className="text-amber-400">Real Estate Investor</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            "As an investor, I appreciate their deep understanding of market trends. They've helped me build a valuable property portfolio."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}