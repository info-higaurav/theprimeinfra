import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const heroRef = useRef(null);
    const valuesRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });
    const isValuesInView = useInView(valuesRef, { once: false, amount: 0.3 });

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
        <div className="pt-32 bg-gradient-to-b from-slate-900 to-gray-800 w-full overflow-x-hidden">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16 mb-32" ref={heroRef}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 mb-8 md:mb-0"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="text-amber-400">Transforming</span> Your 
                            <br />Property Experience
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At ThePrimeInfra, we're dedicated to revolutionizing the real estate industry through innovation, transparency, and exceptional service.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <img 
                            src="./assets/images/about.avif" 
                            alt="Modern building" 
                            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-slate-800 bg-opacity-50 py-32">
                <div className="container mx-auto px-4" ref={valuesRef}>
                    <h2 className="text-3xl font-bold text-center text-white mb-12">
                        Our <span className="text-amber-400">Core Values</span>
                    </h2>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isValuesInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={cardVariants} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                            <div className="text-amber-400 text-4xl mb-4">
                                <img 
                                    src="https://img.icons8.com/fluency/48/home.png" 
                                    alt="excellence icon"
                                    className="w-12 h-12 mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                            <p className="text-gray-300">Committed to delivering the highest quality service in every interaction.</p>
                        </motion.div>
                        <motion.div variants={cardVariants} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                            <div className="text-amber-400 text-4xl mb-4">
                                <img 
                                    src="https://img.icons8.com/fluency/48/handshake.png" 
                                    alt="trust icon"
                                    className="w-12 h-12 mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Trust</h3>
                            <p className="text-gray-300">Building lasting relationships through transparency and integrity.</p>
                        </motion.div>
                        <motion.div variants={cardVariants} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                            <div className="text-amber-400 text-4xl mb-4">
                                <img 
                                    src="https://img.icons8.com/fluency/48/innovation.png" 
                                    alt="innovation icon"
                                    className="w-12 h-12 mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                            <p className="text-gray-300">Constantly evolving to provide cutting-edge solutions.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section with Background Image */}
            <div 
                className="py-16 bg-fixed bg-cover bg-center" 
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="animate-fade-in">
                            <h4 className="text-4xl font-bold text-amber-400 mb-2">1000+</h4>
                            <p className="text-gray-300">Properties Listed</p>
                        </div>
                        <div className="animate-fade-in delay-100">
                            <h4 className="text-4xl font-bold text-amber-400 mb-2">500+</h4>
                            <p className="text-gray-300">Happy Clients</p>
                        </div>
                        <div className="animate-fade-in delay-200">
                            <h4 className="text-4xl font-bold text-amber-400 mb-2">50+</h4>
                            <p className="text-gray-300">Expert Agents</p>
                        </div>
                        <div className="animate-fade-in delay-300">
                            <h4 className="text-4xl font-bold text-amber-400 mb-2">10+</h4>
                            <p className="text-gray-300">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}