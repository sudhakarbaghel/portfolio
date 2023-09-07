'use client'
import Underline from "@/components/svgComps/Underline";
import "./contact.scss";
import React, { useState } from "react";
import Button from "@/components/button/Button";
import SubmitIcon from "@/components/svgComps/skillsIcon/SubmitIcon";
import Contact from "@/components/svgComps/Contact";
import axios from "axios";
type Props = {};
//link : https://docs.google.com/forms/d/e/1FAIpQLSfehdpd30bOpWlUIA0vXYaiAUap8fMN4PBaF7D3oJJhjI2SMg/viewform?usp=pp_url&entry.1433760888=david&entry.1531804274=david@gmail.com&entry.2096754473=hi+im+david

export default function page({}: Props) {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    console.log("submitted")
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfehdpd30bOpWlUIA0vXYaiAUap8fMN4PBaF7D3oJJhjI2SMg/formResponse";

    try {
      // Prepare the data to be sent to Google Forms
      const formData = new FormData();
      formData.append("entry.1433760888", contactData.fullName);
      formData.append("entry.1531804274", contactData.email);
      formData.append("entry.2096754473", contactData.message);

      // Make a POST request to Google Forms with the form data
      await axios.post(
        formUrl,
        formData,

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      ),
        console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="contact">
      <h1>Contact</h1>
      <Underline />
      <p>
        Open for opportunities: <span>Yes</span>
      </p>
      <h2>Contact Form</h2>

      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email address"
          onChange={handleInputChange}
        />
      </div>
      <textarea
        name="message"
        placeholder="Your message"
        onChange={handleInputChange}
      ></textarea>
      <button onClick={()=>handleSubmit()}>
        <SubmitIcon />
        Submit
      </button>
    </div>
  );
}
