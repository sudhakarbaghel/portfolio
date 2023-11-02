"use client";
import Underline from "@/components/svgComps/Underline";
import "./contact.scss";
import React, { useState } from "react";
import Button from "@/components/button/Button";
import SubmitIcon from "@/components/svgComps/skillsIcon/SubmitIcon";
import Contact from "@/components/svgComps/Contact";
import axios from "axios";
type Props = {};
//link : https://docs.google.com/forms/d/e/1FAIpQLSfehdpd30bOpWlUIA0vXYaiAUap8fMN4PBaF7D3oJJhjI2SMg/viewform?usp=pp_url&entry.1433760888=david&entry.1531804274=david@gmail.com&entry.2096754473=hi+im+david
type ContactDataType = {
  fullName: string | undefined;
  email: string | undefined;
  message: string | undefined;
};
type LoadingType = any;
export default function ContactPage({}: Props) {
  const [contactData, setContactData] = useState<ContactDataType>({
    fullName: undefined,
    email: undefined,
    message: undefined,
  });
  const [message, setMessage] = useState(
    "Thanks for reaching out,will get back soon🙏"
  );
  const [loading, setLoading] = useState<LoadingType>(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log("submitted");
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfehdpd30bOpWlUIA0vXYaiAUap8fMN4PBaF7D3oJJhjI2SMg/formResponse";

    try {
      // Prepare the data to be sent to Google Forms
      const formData = new FormData();
      formData.append(
        "entry.1433760888",
        contactData?.fullName ? contactData?.fullName : ""
      );
      formData.append(
        "entry.1531804274",
        contactData?.email ? contactData?.email : ""
      );
      formData.append(
        "entry.2096754473",
        contactData?.message ? contactData?.message : ""
      );

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
    setLoading(false);
    setContactData({
      fullName: "",
      email: "",
      message: "",
    });
    setMessage("Thanks for reaching out,will get back soon🙏");
    setTimeout(() => {
      setMessage("");
    }, 7000);
  };
  return (
    <form className="contact" onSubmit={handleSubmit}>
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
          required
          value={contactData?.fullName}
          placeholder="Full name"
          onChange={handleInputChange}
        />
        <input
          required
          type="text"
          name="email"
          value={contactData?.email}
          placeholder="Email address"
          onChange={handleInputChange}
        />
      </div>
      <textarea
        required
        name="message"
        value={contactData?.message}
        placeholder="Your message"
        onChange={handleInputChange}
      ></textarea>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <span style={{ color: "rgba(205, 208, 217, 0.7411764706)" }}>
          {message}
        </span>
        <button type="submit">
          <SubmitIcon />
          {loading == false ? "Submit" : "Submitting..."}
        </button>
      </p>
    </form>
  );
}
