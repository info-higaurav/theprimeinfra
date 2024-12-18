import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { NavLink } from "react-router-dom";

const emailFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    rememberMe: z.boolean().default(false).optional(),
})

const phoneFormSchema = z.object({
    phoneNumber: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    otp: z.string().min(6, {
        message: "Please enter a valid OTP.",
    }).optional(),
})

export default function SignIn() {
    const [showOtpField, setShowOtpField] = useState(false);
    // @ts-ignore
    const [phoneNumber, setPhoneNumber] = useState("");

    const emailForm = useForm<z.infer<typeof emailFormSchema>>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    })

    const phoneForm = useForm<z.infer<typeof phoneFormSchema>>({
        resolver: zodResolver(phoneFormSchema),
        defaultValues: {
            phoneNumber: "",
            otp: "",
        },
    })

    function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
        console.log(values)
    }

    function onPhoneSubmit(values: z.infer<typeof phoneFormSchema>) {
        if (!showOtpField) {
            // Handle sending OTP
            console.log("Sending OTP to:", values.phoneNumber)
            setShowOtpField(true);
            setPhoneNumber(values.phoneNumber);
        } else {
            // Handle OTP verification
            console.log("Verifying OTP:", values)
        }
    }

    function handleGoogleSignIn() {
        // Handle Google Sign In
        console.log("Google Sign In")
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-800 py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto bg-slate-700 rounded-lg p-8 shadow-xl"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Sign <span className="text-amber-400">In</span>
                    </h2>

                    <Tabs defaultValue="email" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                            <TabsTrigger value="email" className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900">Email</TabsTrigger>
                            <TabsTrigger value="phone" className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900">Phone</TabsTrigger>
                        </TabsList>

                        <TabsContent value="email">
                            <Form {...emailForm}>
                                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
                                    <FormField
                                        control={emailForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300">Email Address</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="Enter your email" 
                                                        {...field}
                                                        className="bg-slate-600 text-white border-slate-500 focus-visible:ring-amber-400"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={emailForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300">Password</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="password"
                                                        placeholder="Enter your password" 
                                                        {...field}
                                                        className="bg-slate-600 text-white border-slate-500 focus-visible:ring-amber-400"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex items-center justify-between">
                                        <FormField
                                            control={emailForm.control}
                                            name="rememberMe"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="text-amber-400 border-slate-500 data-[state=checked]:bg-amber-400"
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-gray-300 font-normal">
                                                        Remember me
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                        <a href="#" className="text-amber-400 hover:text-amber-300 text-sm">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <Button 
                                        type="submit"
                                        className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500"
                                    >
                                        Sign In
                                    </Button>
                                </form>
                            </Form>
                        </TabsContent>

                        <TabsContent value="phone">
                            <Form {...phoneForm}>
                                <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-6">
                                    <FormField
                                        control={phoneForm.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300">Phone Number</FormLabel>
                                                <div className="flex gap-2">
                                                    <FormControl>
                                                        <Input 
                                                            placeholder="Enter your phone number" 
                                                            {...field}
                                                            disabled={showOtpField}
                                                            className="bg-slate-600 text-white border-slate-500 focus-visible:ring-amber-400"
                                                        />
                                                    </FormControl>
                                                    {!showOtpField && field.value.length >= 10 && (
                                                        <Button 
                                                            type="submit"
                                                            className="bg-amber-400 text-slate-900 hover:bg-amber-500 whitespace-nowrap"
                                                        >
                                                            Send OTP
                                                        </Button>
                                                    )}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {showOtpField && (
                                        <FormField
                                            control={phoneForm.control}
                                            name="otp"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-gray-300">OTP</FormLabel>
                                                    <FormControl>
                                                        <Input 
                                                            placeholder="Enter OTP" 
                                                            {...field}
                                                            className="bg-slate-600 text-white border-slate-500 focus-visible:ring-amber-400"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}

                                    {showOtpField && (
                                        <Button 
                                            type="submit"
                                            className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500"
                                        >
                                            Verify & Sign In
                                        </Button>
                                    )}
                                </form>
                            </Form>
                        </TabsContent>
                    </Tabs>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 text-gray-300 bg-slate-700">Or</span>
                        </div>
                    </div>

                    <Button 
                        onClick={handleGoogleSignIn}
                        className="w-full bg-white text-slate-900 hover:bg-gray-100 flex items-center justify-center gap-2"
                    >
                        <img src="./icons/google.svg" alt="Google" className="w-5 h-5" />
                        Sign in with Google
                    </Button>

                    <p className="text-center text-gray-300 mt-6">
                        Don't have an account?{" "}
                        <NavLink to="/sign-up" className="text-amber-400 hover:text-amber-300">
                            Sign Up
                        </NavLink>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}