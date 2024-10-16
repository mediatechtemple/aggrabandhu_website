"use client";
import React, { useEffect, useState } from "react";

const PrivatePolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState([]);
  const handelPrivatePolicy = async () => {
    try {
      const data = await fetch("https://backend.aggrabandhuss.org/api/policy");

      const result = await data.json();

      setPrivacyPolicy(result[0].policy);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelPrivatePolicy();
  }, []);
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
    </div>
  );
};

export default PrivatePolicy;
