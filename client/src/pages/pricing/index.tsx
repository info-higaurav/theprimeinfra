import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <div className="py-32 bg-gradient-to-b from-slate-900 to-gray-800">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Our <span className="text-amber-400">Pricing Plans</span>
                </h1>

                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Starter Package */}
                    <div className="bg-slate-700 rounded-lg p-8 hover:bg-slate-600 transition-all duration-300 flex flex-col min-h-[600px] transform hover:scale-[1.03] hover:shadow-xl">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Starter Package</h2>
                            <div className="text-3xl font-bold text-amber-400 mb-6">
                                ₹20,000
                                <span className="text-sm text-gray-300 font-normal">/month</span>
                            </div>
                            <ul className="text-gray-300 space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Valid for 1 month
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Assured leads guarantee
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Money back guarantee
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    24/7 Support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Basic Email Support
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-amber-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Professional Package */}
                    <div className="bg-slate-700 rounded-lg p-8 hover:bg-slate-600 transition-all duration-300 flex flex-col min-h-[600px] transform hover:scale-[1.03] hover:shadow-xl">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Professional Package</h2>
                            <div className="text-3xl font-bold text-amber-400 mb-6">
                                ₹30,000
                                <span className="text-sm text-gray-300 font-normal">/3 months</span>
                            </div>
                            <ul className="text-gray-300 space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Valid for 3 months
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Premium leads guarantee
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Money back guarantee
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    24/7 Priority Support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Email & Phone Support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Dedicated Account Manager
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-amber-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Premium Package */}
                    <div className="bg-slate-700 rounded-lg p-8 hover:bg-slate-600 transition-all duration-300 flex flex-col min-h-[600px] transform hover:scale-[1.03] hover:shadow-xl">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Premium Package</h2>
                            <div className="text-3xl font-bold text-amber-400 mb-6">
                                ₹50,000
                                <span className="text-sm text-gray-300 font-normal">/6 months</span>
                            </div>
                            <ul className="text-gray-300 space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Valid for 6 months
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    VIP leads guarantee
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Money back guarantee
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    24/7 VIP Support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Email, Phone & WhatsApp Support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Senior Account Manager
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Monthly Performance Reports
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-amber-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}