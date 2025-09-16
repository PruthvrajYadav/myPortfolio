import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"
import { Description, Title } from "@radix-ui/react-toast"

export const ContactSection = () => {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const { toast } = useToast()


    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmiting(true)


        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            })
            setIsSubmiting(false)
        }, 1500)


    }
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a Project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">

                        <div className="flex items-start space-x-4">
                            <div className="p-3  rounded-full bg-primary/10">
                                <Mail className="h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:pruthvirajyadav703@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                                    pruthviraj@gmail.com
                                </a>
                            </div>

                        </div>


                        <div className="flex items-start space-x-4">
                            <div className="p-3  rounded-full bg-primary/10">
                                <Phone className="h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+19370894134" className="text-muted-foreground hover:text-primary transition-colors ">
                                    +919370894134
                                </a>
                            </div>

                        </div>


                        <div className="flex items-start space-x-4">
                            <div className="p-3  rounded-full bg-primary/10">
                                <MapPin className="h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a href="mailto:pruthvirajyadav703@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                                    Alishan colony kupwad,sangli
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="pt-8 ">
                        <h4 className="font-medium mb-4">Connect with me</h4>
                        <div className="flex space-x-4 justify-center ">

                            <a href="https://www.linkedin.com/in/pruthviraj-yadav-222303315/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://x.com/Pruthviraj0502?t=90AmfU2PeCwK3r-93w_Q8g&s=09" target="_blank">
                                <Twitter />
                            </a>

                            <a href="https://www.instagram.com/pruthviraj_yadav002/?igsh=bXZobjJpeGR1aXEy#" target="_blank">
                                <Instagram />
                            </a>

                            {/* <a href="#" target="_blank">
                                <Twitch />
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs bg-primary/10">
                    <h3 className="text-2xl font-semibold mb-6 ">Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name" className="block  text-sm  font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="pruthvriaj yadav" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus-ring-primary" />
                        </div>



                        <div>
                            <label htmlFor="name" className="block  text-sm  font-medium mb-2">Your Email</label>
                            <input type="text" id="name" name="name" placeholder="pruthvirajyadav703@gmai.com" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus-ring-primary" />
                        </div>


                        <div>
                            <label htmlFor="message" className="block  text-sm  font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" placeholder="Hello, I'd like to talk about... " required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus-ring-primary resize-none" />
                        </div>
                        <button type="submit"
                            disabled={isSubmiting}
                            className={cn("cosmic-button  w-full flex items-center justify-center gap-2")}>
                            <Send size={16} />
                            {isSubmiting ? "Sending..." : "send Message"}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section >
}