"use client";
import React, { useEffect, useState } from "react";

const PrivatePolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const handlePrivatePolicy = async () => {
    try {
      const data = await fetch("https://backend.aggrabandhuss.org/api/policy");
      const result = await data.json();
      setPrivacyPolicy(result[0].policy);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePrivatePolicy();
  }, []);

  return (
    <div className="mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div
        className="prose prose-lg md:prose-xl mx-auto max-w-full overflow-hidden"
        dangerouslySetInnerHTML={{ __html: privacyPolicy }}
      />
    </div>
  );
};

export default PrivatePolicy;
