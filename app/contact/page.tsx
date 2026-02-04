'use client';

import React from "react"

import { useState } from 'react';
import PageHeader from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a demo form. In production, you would send this to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <PageHeader
        title="Get in Touch"
        subtitle="Contact Information"
        description="Reach out for collaboration, consulting, research partnerships, or speaking engagements"
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Mail className="w-6 h-6 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:krishnapantasecretariat@gmail.com"
                  className="text-primary hover:text-primary/80 transition font-semibold"
                >
                  krishnapantasecretariat@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  For general inquiries and collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Phone className="w-6 h-6 text-primary mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+9771234567890"
                  className="text-primary hover:text-primary/80 transition font-semibold"
                >
                  +977 9851226242
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Monday to Friday, 9 AM - 5 PM NST
                </p>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <MapPin className="w-6 h-6 text-primary mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Kathmandu, Nepal</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ministry of Finance & Research Organizations
                </p>
              </CardContent>
            </Card> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry subject"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      disabled={submitted}
                    >
                      {submitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Connect</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-foreground">Office Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM NST</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Typically within 24-48 hours</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Preferred Contact</p>
                        <p className="text-muted-foreground">Email for detailed inquiries</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social Media</CardTitle>
                    <CardDescription>Connect on professional networks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition text-primary font-semibold text-sm"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition text-primary font-semibold text-sm"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Areas I Help With</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Policy Research & Analysis</li>
                      <li>• Development Economics Consulting</li>
                      <li>• Fiscal Federalism Guidance</li>
                      <li>• Academic Collaborations</li>
                      <li>• Speaking Engagements</li>
                      <li>• Research Partnerships</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
