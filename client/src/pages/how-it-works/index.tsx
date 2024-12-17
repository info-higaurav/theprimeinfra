import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const stepVariants = {
        hidden: { 
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="py-32 bg-gradient-to-b from-slate-900 to-gray-800">
            <div className="container mx-auto px-4 py-16" ref={ref}>
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
                >
                    How It <span className="text-amber-400">Works</span>
                </motion.h1>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* First Row */}
                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-16 md:space-y-0 mb-16">
                        {/* Step 1 */}
                        <motion.div variants={stepVariants} className="flex items-center md:w-1/2">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center"
                            >
                                <span className="text-slate-900 font-bold text-2xl">1</span>
                            </motion.div>
                            <div className="ml-8 flex-1">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Create Your Account
                                </h3>
                                <p className="text-gray-300">
                                    Start by creating your account in just a few simple steps
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div variants={stepVariants} className="flex items-center md:w-1/2">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center"
                            >
                                <span className="text-slate-900 font-bold text-2xl">2</span>
                            </motion.div>
                            <div className="ml-8 flex-1">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    List Your Property
                                </h3>
                                <p className="text-gray-300">
                                    Add your property details and showcase its best features
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-16 md:space-y-0">
                        {/* Step 3 */}
                        <motion.div variants={stepVariants} className="flex items-center md:w-1/2">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center"
                            >
                                <span className="text-slate-900 font-bold text-2xl">3</span>
                            </motion.div>
                            <div className="ml-8 flex-1">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Select Your Plan
                                </h3>
                                <p className="text-gray-300">
                                    Choose a subscription plan that suits your needs
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 4 */}
                        <motion.div variants={stepVariants} className="flex items-center md:w-1/2">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center"
                            >
                                <span className="text-slate-900 font-bold text-2xl">4</span>
                            </motion.div>
                            <div className="ml-8 flex-1">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Start Receiving Leads
                                </h3>
                                <p className="text-gray-300">
                                    Get quality assured leads directly to your dashboard
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}