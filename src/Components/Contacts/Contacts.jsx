import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nnxm37w', 'template_bse1t1v', form.current, {
        publicKey: 'emWBjC-_0AoAS9jQQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully');
          form.current.reset();  // Reset the form fields after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error');
        }
      );
  };

  return (
    <div id='Experience' className='p-6 md:p-24 -mb-20'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Contact Us</h1>
      <div className="flex justify-center items-center bg-[#171732] p-12 md:p-24 text-gray-900">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center text-[#3B4C7D] mb-6">Contact Us</h2>

          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-lg font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
