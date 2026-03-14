import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

import { cn } from '@/lib/utils'

export const ContactSection = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        setTimeout(()=>{
            
        }, 1500)
    }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to colaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid gap-12">
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:nakulgite08@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    priyankphulpagar27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919518947457"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +(91) 9075667839
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground block">
                    Pune, Maharastra
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/priyank-phulpagar-192a27237" target="_blank" className="">
                  <Linkedin />
                </a>
                {/* <a href="#" target="_blank" className="">
                  <Instagram />
                </a> */}
                
                {/* <a href="" target="_blank" className="">
                  <Facebook />
                </a> */}
              </div>
            </div>
          </div>
          
          {/*
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6">
              <div className="">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nakul Gite..."
                />
              </div>

               <div className="">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nakulgite@gmaill.com"
                />
              </div>

               <div className="">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello I'd like to talk about..."
                />
              </div>

              <button className={cn("cosmic-button w-full flex items-center justify-center gap-2",

              )} type="submit">
                <Send size={16}/>
              </button>
            </form>
          </div> 
          */}
          
        </div>
      </div>
    </section>
  );
};
