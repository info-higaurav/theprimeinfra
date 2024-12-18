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

const emailFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    agreeToTerms: z.boolean().refine(val => val === true, {
        message: "You must agree to the terms and conditions.",
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const phoneFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    otp: z.string().min(6, {
        message: "Please enter a valid OTP.",
    }).optional(),
    agreeToTerms: z.boolean().refine(val => val === true, {
        message: "You must agree to the terms and conditions.",
    })
})

export default function SignUp() {
    const [showOtpField, setShowOtpField] = useState(false);
    // @ts-ignore
    const [phoneNumber, setPhoneNumber] = useState("");

    const emailForm = useForm<z.infer<typeof emailFormSchema>>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeToTerms: false,
        },
    })

    const phoneForm = useForm<z.infer<typeof phoneFormSchema>>({
        resolver: zodResolver(phoneFormSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
            otp: "",
            agreeToTerms: false,
        },
    })

    function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
        console.log(values)
    }

    function onPhoneSubmit(values: z.infer<typeof phoneFormSchema>) {
        if (!showOtpField) {
            console.log("Sending OTP to:", values.phoneNumber)
            setShowOtpField(true);
            setPhoneNumber(values.phoneNumber);
        } else {
            console.log("Verifying OTP:", values)
        }
    }

    function handleGoogleSignUp() {
        console.log("Google Sign Up")
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
                    <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">Create Account</h2>

                    <Tabs defaultValue="email" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-600">
                            <TabsTrigger value="email" className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900">Email</TabsTrigger>
                            <TabsTrigger value="phone" className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900">Phone</TabsTrigger>
                        </TabsList>

                        <TabsContent value="email">
                            <Form {...emailForm}>
                                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                                    <FormField
                                        control={emailForm.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-200">Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your name" className="bg-slate-600 border-slate-500 text-gray-200" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={emailForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-200">Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your email" className="bg-slate-600 border-slate-500 text-gray-200" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={emailForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-200">Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Create password" className="bg-slate-600 border-slate-500 text-gray-200" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={emailForm.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-200">Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Confirm password" className="bg-slate-600 border-slate-500 text-gray-200" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={emailForm.control}
                                        name="agreeToTerms"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="border-amber-400 data-[state=checked]:bg-amber-400 data-[state=checked]:text-slate-900"
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="text-gray-200">
                                                        I agree to the terms and conditions
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500">Sign Up</Button>
                                </form>
                            </Form>
                        </TabsContent>

                        <TabsContent value="phone">
                            <Form {...phoneForm}>
                                <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
                                    <FormField
                                        control={phoneForm.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-200">Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your name" className="bg-slate-600 border-slate-500 text-gray-200" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={phoneForm.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-200">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your phone number" className="bg-slate-600 border-slate-500 text-gray-200" {...field} disabled={showOtpField} />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    {showOtpField && (
                                        <FormField
                                            control={phoneForm.control}
                                            name="otp"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-gray-200">OTP</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter OTP" className="bg-slate-600 border-slate-500 text-gray-200" {...field} />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400" />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                    <FormField
                                        control={phoneForm.control}
                                        name="agreeToTerms"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="border-amber-400 data-[state=checked]:bg-amber-400 data-[state=checked]:text-slate-900"
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="text-gray-200">
                                                        I agree to the terms and conditions
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500">
                                        {showOtpField ? "Verify OTP" : "Get OTP"}
                                    </Button>
                                </form>
                            </Form>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-slate-700 text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full bg-white text-slate-900 hover:bg-gray-100 flex items-center justify-center gap-2"
                            onClick={handleGoogleSignUp}
                        >
                           <img src="./icons/google.svg" alt="Google" className="w-5 h-5" />
                            Sign up with Google
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}