import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Main() {
    const [workflowStep, setWorkflowStep] = useState(0);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        location: "",
        propertyType: "",
        images: []
    });

    useEffect(() => {
        const runWorkflow = async () => {
            const steps = [0, 1, 2, 3];
            let currentIndex = 0;

            const interval = setInterval(() => {
                setWorkflowStep(steps[currentIndex]);
                
                if (steps[currentIndex] === 1) {
                    setFormData({
                        title: "3 BHK Luxury Apartment",
                        price: "₹85,00,000",
                        description: "Modern apartment with premium amenities",
                        location: "Sahastradhara Road, Dehradun",
                        propertyType: "Residential Apartment",
                        images: []
                    });
                }

                if (steps[currentIndex] === 2) {
                    let progress = 0;
                    const progressInterval = setInterval(() => {
                        progress += 20;
                        setUploadProgress(progress);
                        if (progress >= 100) clearInterval(progressInterval);
                    }, 500);
                }
                
                currentIndex = (currentIndex + 1) % steps.length;
            }, 3000);

            return () => clearInterval(interval);
        };

        runWorkflow();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 relative overflow-hidden py-16 w-full overflow-x-hidden">
            <motion.div 
                className="absolute inset-0 opacity-5"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    backgroundImage: "url('/pattern.svg')",
                    backgroundSize: "cover"
                }}
            />

            <div className="container mx-auto px-4 pt-24 pb-20 relative flex items-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8">
                            100% <span className="text-amber-400">Assured Leads</span>
                        </h1>
                        <div className="bg-slate-800/50 p-4 sm:p-5 md:p-6 rounded-xl mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg sm:text-xl md:text-2xl text-amber-400 font-bold">Money Back Guarantee</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-300">
                                No leads = 100% Refund. We're that confident in our service!
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8">
                            <div className="bg-slate-800/50 p-2 sm:p-3 md:p-4 rounded-xl text-center">
                                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <p className="text-xs sm:text-sm md:text-base text-amber-400">Verified Leads</p>
                            </div>
                            <div className="bg-slate-800/50 p-2 sm:p-3 md:p-4 rounded-xl text-center">
                                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <p className="text-xs sm:text-sm md:text-base text-amber-400">24hr Response</p>
                            </div>
                            <div className="bg-slate-800/50 p-2 sm:p-3 md:p-4 rounded-xl text-center">
                                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <p className="text-xs sm:text-sm md:text-base text-amber-400">24/7 Support</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-amber-500 text-slate-900 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                            >
                                Start Listing
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-transparent px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-amber-400 text-amber-400 rounded-lg font-semibold hover:bg-amber-400/10 transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                            >
                                View Success Stories
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8">
                            <div className="flex mb-6 sm:mb-8 relative z-10">
                                {[1,2,3,4].map((step, index) => (
                                    <div key={step} className="flex-1 relative">
                                        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ${workflowStep >= index ? 'bg-amber-400' : 'bg-slate-600'} flex items-center justify-center text-slate-900 font-bold mx-auto relative z-10 shadow-lg text-xs sm:text-sm md:text-base`}>
                                            {step}
                                        </div>
                                        {index < 3 && (
                                            <div className={`h-1 absolute top-4 sm:top-4 md:top-5 left-1/2 w-full ${workflowStep > index ? 'bg-amber-400' : 'bg-slate-600'}`} />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {workflowStep === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-slate-700/50 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-4 sm:mb-6">Quick Login</h3>
                                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                        <div>
                                            <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 block">Email</label>
                                            <input type="email" className="w-full px-4 py-2 sm:py-2.5 md:py-3 bg-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-400 transition-all text-xs sm:text-sm md:text-base" />
                                        </div>
                                        <div>
                                            <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 block">Password</label>
                                            <input type="password" className="w-full px-4 py-2 sm:py-2.5 md:py-3 bg-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-400 transition-all text-xs sm:text-sm md:text-base" />
                                        </div>
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            className="w-full py-2.5 sm:py-3 md:py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-amber-500 transition-colors"
                                        >
                                            Login to Continue
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {workflowStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-slate-700/50 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-4 sm:mb-6">Property Details</h3>
                                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                        <div>
                                            <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 block">Property Title</label>
                                            <input type="text" value={formData.title} className="w-full px-4 py-2 sm:py-2.5 md:py-3 bg-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-400 transition-all text-xs sm:text-sm md:text-base" readOnly />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 block">Price</label>
                                                <input type="text" value={formData.price} className="w-full px-4 py-2 sm:py-2.5 md:py-3 bg-slate-600 rounded-lg text-white text-xs sm:text-sm md:text-base" readOnly />
                                            </div>
                                            <div>
                                                <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 block">Type</label>
                                                <input type="text" value={formData.propertyType} className="w-full px-4 py-2 sm:py-2.5 md:py-3 bg-slate-600 rounded-lg text-white text-xs sm:text-sm md:text-base" readOnly />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 block">Location</label>
                                            <input type="text" value={formData.location} className="w-full px-4 py-2 sm:py-2.5 md:py-3 bg-slate-600 rounded-lg text-white text-xs sm:text-sm md:text-base" readOnly />
                                        </div>
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            className="w-full py-2.5 sm:py-3 md:py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-amber-500 transition-colors"
                                        >
                                            Continue to Photos
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {workflowStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-slate-700/50 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-4 sm:mb-6">Upload Photos</h3>
                                    <div className="border-2 border-dashed border-amber-400/30 rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto text-amber-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center mb-4">Drag & drop photos here</p>
                                        <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
                                            <motion.div 
                                                className="bg-amber-400 h-2 rounded-full"
                                                initial={{ width: "0%" }}
                                                animate={{ width: `${uploadProgress}%` }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                        <p className="text-xs sm:text-sm md:text-base text-amber-400 text-center">{uploadProgress}% Complete</p>
                                    </div>
                                    <motion.button 
                                        whileHover={{ scale: 1.02 }}
                                        className="w-full py-2.5 sm:py-3 md:py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-amber-500 transition-colors"
                                    >
                                        Complete Listing
                                    </motion.button>
                                </motion.div>
                            )}

                            {workflowStep === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-slate-700/50 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-center"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 mx-auto text-amber-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-4">All Set!</h3>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6">Your property listing is now live</p>
                                    <div className="bg-slate-600/50 p-4 sm:p-5 md:p-6 rounded-lg mb-6">
                                        <p className="text-base sm:text-lg md:text-xl text-amber-400 font-semibold mb-2">Guaranteed 10+ leads in 30 days</p>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-300">or get your money back</p>
                                    </div>
                                    <motion.button 
                                        whileHover={{ scale: 1.02 }}
                                        className="w-full py-2.5 sm:py-3 md:py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-amber-500 transition-colors"
                                    >
                                        View Your Listing
                                    </motion.button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}