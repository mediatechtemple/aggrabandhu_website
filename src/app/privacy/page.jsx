"use client";
import urlApi from "@/utils/api";
import React, { useEffect, useState } from "react";

const PrivatePolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const handelPrivatePolicy = async () => {
    try {
      const data = await fetch(`${urlApi}/policy`);
      const result = await data.json();

      const updatedPolicy = result[0].policy.replace(
        /width:\s?1024px/g,
        "width: 100%"
      );

      setPrivacyPolicy(updatedPolicy);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelPrivatePolicy();
  }, []);

  return (
    <>
      <div className="mt-20 md:max-w-4xl mx-auto px-4">
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
      </div>
    </>
  );
};

export default PrivatePolicy;
