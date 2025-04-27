"use client"
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-lg ">
      <h2 className="text-3xl font-bold mb-8 text-black">Get in Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-black mb-2">
            Mobile Number (Optional)
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            placeholder="+1 (123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            placeholder="How can we help you?"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 font-medium transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}