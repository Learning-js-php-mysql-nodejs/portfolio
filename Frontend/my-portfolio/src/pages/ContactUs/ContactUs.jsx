import React, { useRef, useState } from 'react';
import { Mail, Phone, Github, Gitlab, Linkedin, School, Building, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function ContactUs() {

  const form = useRef(); // ✅ Ref for the form

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required.";
    if (!formData.email.trim()) {
      newErrors.email = "Required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value.trim()) {
        delete updatedErrors[id];
        if (id === "email" && !/\S+@\S+\.\S+/.test(value)) {
          updatedErrors.email = "Email is invalid.";
        }
      }
      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (validate()) {
      setLoading(true)
      emailjs
        .sendForm(
          'service_5k17kwq', // Replace with your EmailJS service ID
          'template_vohkyhj', // Replace with your EmailJS template ID
          form.current,
          'S7c8qjVpVT4YEgfxd' // Replace with your EmailJS public key
        )
        .then(
          (result) => {


            setFormData({ name: '', email: '', message: '' });
            setLoading(false)
            toast.success(`Send message Succesfully`)

          },
          (error) => {
            setLoading(false)
            toast.success(`Failed to send message`)

          }
        );
    }
  };


  return (
    <div className="text-gray-900 dark:text-white px-4 py-10  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 h-full overflow-hidden">

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-8xl mx-auto">

        {/* Personal Information Section */}
        <section className="flex-2">
          <Card className="p-10 shadow-2xl rounded-3xl bg-white dark:bg-gray-800 transition-all duration-500 h-auto">
            <CardHeader>
              <CardTitle className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-6">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-8">
                <InfoItem icon={<Mail className="text-red-500" />} label="Email" value="aarushuikey@gmail.com" />
                <InfoItem icon={<Mail className="text-green-500" />} label="Employee Email" value="virendra@eminenceinfotech.in" />
                <InfoItem icon={<Phone className="text-blue-500" />} label="Mobile Number" value="+91 9753725878" />
                <InfoItem icon={<Github className="text-black" />} label="GitHub" link="https://github.com/virendrauikey" />
                <InfoItem icon={<Gitlab className="text-orange-500" />} label="GitLab" link="https://gitlab.com/Virendrauikey11" />
                <InfoItem icon={<Linkedin className="text-blue-600" />} label="LinkedIn" link="https://www.linkedin.com/in/virendra-uikey-5913b7247/" />
                <InfoItem icon={<School className="text-purple-500" />} label="Education" value="Bachelor of Electronics and communication" />
                <InfoItem icon={<Building className="text-teal-500" />} label="Working Current Organization" value="Eminence infotech Pvt Ltd indore" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form Section */}
        <section className="flex-1">
          <Card className="p-10 shadow-2xl rounded-3xl bg-white dark:bg-gray-800 transition-all duration-500 h-auto">
            <CardHeader>
              <CardTitle className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-6">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} // ✅ Ref added here
                onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 mt-6">
                <div className="flex items-center gap-4">
                  <User className="text-indigo-500" />
                  <Input
                    type="text"
                    id="name"
                    name="name" // ✅ Required for EmailJS
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-sm text-start">{errors.name}</p>}
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-indigo-500" />
                  <Input
                    type="email"
                    id="email"
                    name="email" // ✅ Required for EmailJS
placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-sm text-start">{errors.email}</p>}
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="text-indigo-500 mt-2" />
                  <Textarea
                    id="message"
                    name="message" // ✅ Required for EmailJS
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    className="focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                  {errors.message && <p className="text-red-500 text-sm text-start">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg py-3 transition-transform hover:scale-105 duration-300"
                >
                  {loading && <Loader2 className="animate-spin" />}
                  {loading ? "Please wait" : "Send"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}

// Helper component
function InfoItem({ icon, label, value, link }) {
  return (
    <div className="flex flex-col items-center justify-center w-70 text-center">
      <div className="mb-2">{icon}</div>
      <div>
        <strong className="text-gray-700 dark:text-gray-300">{label}:</strong>{" "}
        {link ? (
          <div>
            <a
              href={link}
              className="text-indigo-600 hover:text-indigo-800 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.replace(/^https?:\/\//, '')}
            </a>
          </div>
        ) : (
          <div className="text-gray-600 dark:text-gray-400">{value}</div>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
