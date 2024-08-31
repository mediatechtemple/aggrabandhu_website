'use client';
import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="what-we-do py-12">
      <div className="container mx-auto">
        <div className="session-title text-center mb-8">
          <h2 className="text-3xl font-bold">What we Do</h2>
          <p className="text-gray-600">We are a non-profit & Charity raising money for child education</p>
        </div>


        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="donat-form bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="form-titl mb-4">
                <b className="text-lg">Enter the amount for Donation</b>
              </div>
              <div className="form-dong">
                <div className="input-group mb-4">
                  <div className="flex">
                    <span className="inline-block bg-gray-200 px-4 py-2 rounded-l">$</span>
                    <input type="text" className="form-control flex-grow p-2 border rounded-r" placeholder="Enter Amount" />
                  </div>
                </div>
                <div className="input-group mb-4">
                  <input type="text" className="form-control w-full p-2 border rounded" placeholder="Enter Full Name" />
                </div>
                <div className="input-group mb-4">
                  <input type="text" className="form-control w-full p-2 border rounded" placeholder="Enter Email Address" />
                </div>
                <div className="input-group mb-4">
                  <input type="text" className="form-control w-full p-2 border rounded" placeholder="Enter City" />
                </div>
                <div className="text-center">
                  <button className="bg-green-500 text-white px-6 py-3 rounded">Donate Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div className="donation-list space-y-6">
              {[
                { icon: 'fas fa-user-graduate', title: 'We Care Student Education', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { icon: 'fas fa-medkit', title: 'Care Student Health', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { icon: 'fas fa-graduation-cap', title: 'We Care Student Education', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { icon: 'fas fa-dollar-sign', title: '100% Goes to the Field', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
              ].map((item, index) => (
                <div key={index} className="we-ro flex p-4 bg-white shadow-md rounded-lg">
                  <div className="icon p-4">
                    {/* <i className={`${item.icon} text-green-500 text-4xl bg-white p-5 rounded-full shadow-md`}></i> */}
                  </div>
                  <div className="detail ml-4">
                    <h6 className="text-lg font-bold">{item.title}</h6>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
