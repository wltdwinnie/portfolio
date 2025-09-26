"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import React from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  MapPin, 
  Send,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  User,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Let&apos;s connect! Whether it&apos;s about projects, opportunities, collaborations, or just a friendly chat about tech and innovation.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">1 Day</p>
          <p className="text-sm text-muted-foreground">Response Time</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-sm text-muted-foreground">Response Rate</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">Open</p>
          <p className="text-sm text-muted-foreground">To Opportunities</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <User className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">Active</p>
          <p className="text-sm text-muted-foreground">Status</p>
        </Card>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-lg transition-shadow h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you within a day!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What&apos;s this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={8}
                      placeholder="Tell me about your project, question, or just say hello! I'm excited to hear from you."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    This will open your email client with the message pre-filled.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - Takes 1 column */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Email</p>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Location</p>
                    <span className="text-xs text-muted-foreground">{siteConfig.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group border hover:border-primary/20"
                  >
                    <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">GitHub</p>
                      <p className="text-xs text-muted-foreground">Code & projects</p>
                    </div>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                  </a>
                  
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group border hover:border-primary/20"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Professional profile</p>
                    </div>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                  </a>
                  
                  <a
                    href={siteConfig.links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group border hover:border-primary/20"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Devpost</p>
                      <p className="text-xs text-muted-foreground">Hackathons</p>
                    </div>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                  </a>
                  
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group border hover:border-primary/20"
                  >
                    <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Instagram</p>
                      <p className="text-xs text-muted-foreground">Life updates</p>
                    </div>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Response Time?</h3>
              <p className="text-sm text-muted-foreground">
                I will respond within one day. For urgent matters, feel free to mention it in your message.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">What projects interest you?</h3>
              <p className="text-sm text-muted-foreground">
                Web development, mobile apps, AI/ML projects, and anything that creates positive impact.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Available for internships?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! I'm actively seeking summer internships and part-time opportunities during the school year.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Collaboration rates?</h3>
              <p className="text-sm text-muted-foreground">
                For student projects and non-profits, I'm happy to collaborate for free. Let's discuss your project!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
