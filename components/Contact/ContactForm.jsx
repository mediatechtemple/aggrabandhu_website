// components/ContactForm.js

import React from 'react';

const ContactForm = () => {
  return (
    <div className="row no-margin bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center  -mx-4">








          {/* Contact Form Section */}
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-1/3 text-right pr-4">Enter Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="form-input w-2/3"
                />
              </div>
              <div className="flex items-center">
                <label className="w-1/3 text-right pr-4">Email Address:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email Address"
                  className="form-input w-2/3"
                />
              </div>
              <div className="flex items-center">
                <label className="w-1/3 text-right pr-4">Mobile Number:</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  className="form-input w-2/3"
                />
              </div>
              <div className="flex items-center">
                <label className="w-1/3 text-right pr-4">Enter Message:</label>
                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  className="form-textarea w-2/3"
                ></textarea>
              </div>
              <div className="flex items-center">
                <div className="w-1/3"></div>
                <button className="btn btn-success">Send Message</button>
              </div>
            </div>
          </div>




          {/* Address Section */}
          <div className="w-full sm:w-1/2 px-4 ">
            <div className="p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <p>Smart Hospital</p>
              <p>Daman Street</p>
              <p>K.K District</p>
              <p>Phone: +91 9159669599</p>
              <p>Email: info@smart-eye.in</p>
              <p>Website: www.smart-eye.com</p>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default ContactForm;
