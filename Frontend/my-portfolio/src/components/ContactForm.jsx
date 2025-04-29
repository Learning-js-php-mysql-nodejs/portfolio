import React, { useState, useRef } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Loader2 } from "lucide-react"

const ContactForm = ({ showForm, toggleForm }) => {
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
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
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
            toggleForm(); // Close the form
           
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
    showForm && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-sm p-4">
        <form
          ref={form} // ✅ Ref added here
          onSubmit={handleSubmit}
          className="relative w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl space-y-5"
        >
          <button
            onClick={toggleForm}
            type="button"
            className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-red-500 focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
            Contact Us
          </h2>

          <div className="space-y-1">
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 mb-3">Name</Label>
            <Input
              id="name"
              name="name" // ✅ Required for EmailJS
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && <p className="text-red-500 text-sm text-start">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-3">Email</Label>
            <Input
              id="email"
              name="email" // ✅ Required for EmailJS
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && <p className="text-red-500 text-sm text-start">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 mb-3">Message</Label>
            <Textarea
              id="message"
              name="message" // ✅ Required for EmailJS
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.message && <p className="text-red-500 text-sm text-start">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition duration-200 cursor-pointer"
            disabled={loading}
          >
            {loading && <Loader2 className="animate-spin" />}
            {loading?"Please wait":"Send"}
          </Button>
        </form>
      </div>
    )
  );
};

export default ContactForm;
