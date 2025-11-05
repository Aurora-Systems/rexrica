"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"

export default function ContactPage() {

  const [loading,set_loading] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form: any = useRef(null)

    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_dbu7g11", "template_ecymzcc", form.current, {
            publicKey: "zYdUNG_dELDUWdHJR"
        }).then(() => {
            alert("✅ We received your enquiry, expect a call or an email soon!")
            form.current.reset()
        }).catch(() => {
            alert("⚠️ Message not sent, please try again or send us a message on our email support@aurorasystems.co.zw!")
        }).finally(()=>{
            set_loading(false)
        })
    }

  
  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Have questions about our services? Want to explore partnership opportunities? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader  className="pt-6">
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={send_application} ref={form} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="full_name"
                            placeholder="John Doe"
                            
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="contact_number"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sector">Sector of Interest</Label>
                          <select
                            id="sector"
                            name="sector"
                            
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select a sector</option>
                            <option value="mining">Mining</option>
                            <option value="construction">Road Construction</option>
                            <option value="agriculture">Agricultural Production</option>
                            <option value="microfinance">Microfinance</option>
                            <option value="insurance">Insurance</option>
                            <option value="logistics">Logistics</option>
                            <option value="property">Property Development</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="trade">Import & Export</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your inquiry..."
                          rows={6}
                          
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader  className="pt-6">
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">info@rexrica.com</p>
                        <p className="text-sm text-muted-foreground">quincy@rexrica.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+263 77 457 0164</p>  
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          67 Selous Ave,
                          <br />
                          Harare
                          <br />
                          Zimbabwe
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader  className="pt-6">
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href="/#about"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About Rexrica
                    </a>
                    <a
                      href="/#sectors"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Our Sectors
                    </a>
                    <a
                      href="/sectors/mining"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Mining Division
                    </a>
                    <a
                      href="/sectors/microfinance"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Microfinance Services
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
