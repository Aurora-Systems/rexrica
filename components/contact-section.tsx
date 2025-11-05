"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Ready to discuss your project or learn more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card>
              <CardHeader  className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>info@rexrica.com</CardDescription>
                <CardDescription>quincy@rexrica.com</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader  className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>+263 77 457 0164</CardDescription>
                {/* <CardDescription>+1 (555) 987-6543</CardDescription> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                67 Selous Ave

                  <br />
                  Harare
                  <br />
                  Zimbabwe
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader  className="pt-6">
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
            
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
