"use client"
import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea } from '@/components/ui';
import { Mail, MapPin, Phone, Navigation, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Hi Isaac,\n\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Sent from your portfolio contact form.`
      );
      
      const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      setSubmitStatus('Email client opened! Please send the email from your email application.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('');
      }, 3000);
      
    } catch {
      setSubmitStatus('Error opening email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          
          // Copy to clipboard
          navigator.clipboard.writeText(locationUrl).then(() => {
            alert('Your location has been copied to clipboard! You can share this link.');
          }).catch(() => {
            // Fallback: open in new tab
            window.open(locationUrl, '_blank');
          });
        },
        () => {
          alert('Unable to get your location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Email</h4>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors underline"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center p-6">
                    <MapPin className="h-6 w-6 text-primary mr-4" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground mb-2">Remote / Available Worldwide</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={shareLocation}
                        className="flex items-center gap-2"
                      >
                        <Navigation className="h-4 w-4" />
                        Share My Location
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h4 className="font-semibold">Availability</h4>
                      <p className="text-muted-foreground">Available for freelance & full-time</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="outline" asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              {submitStatus && (
                <p className={`text-sm ${
                  submitStatus.includes('Error') ? 'text-red-600' : 'text-green-600'
                }`}>
                  {submitStatus}
                </p>
              )}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry" 
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex items-center gap-2 cursor-pointer"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 