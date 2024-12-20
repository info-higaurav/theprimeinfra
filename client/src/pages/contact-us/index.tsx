import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactUs() {
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
        <div className="py-32 min-h-screen bg-gradient-to-b from-slate-900 to-gray-800">
            <div className="container mx-auto px-4 py-16" ref={ref}>
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                >
                    Get in <span className="text-amber-400">Touch</span>
                </motion.h1>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Quick Contact Options */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <div className="bg-amber-400 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                <a href="tel:+918057235806" className="hover:text-amber-400">
                                    <h3 className="text-white font-semibold">Phone</h3>
                                    <p className="text-gray-300">
                                        +91 8057 235806
                                    </p>
                                </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            onClick={() => window.open('https://wa.me/918057235806', '_blank')}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-amber-400 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">WhatsApp</h3>
                                    <p className="text-gray-300">Message us directly</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <div className="bg-amber-400 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gray-300">info@theprimeinfra.com</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Social Media & Schedule */}
                    <div className="space-y-8 md:flex md:flex-col">
                        <motion.div variants={itemVariants} className="bg-slate-700 p-6 rounded-lg flex-1">
                            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                    </svg>
                                </button>
                                <button className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <button className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-slate-700 p-6 rounded-lg flex-1">
                            <h3 className="text-xl font-semibold text-white mb-4">Schedule a Meeting</h3>
                            <button className="w-full bg-amber-500 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
                                Book Appointment
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}