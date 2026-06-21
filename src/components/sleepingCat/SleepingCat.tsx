'use client'
import { useState, useEffect } from "react";
import "./sleepingCat.scss";

type Props = {};

const devPuns = [
  "I'm EatSleepScript Developer",
  "I'm not lazy, just in an infinite loop...",
  "404: Sleep Not Found",
  "Currently debugging my dreams...",
  "BRB... Deploying to Dream Server",
  "Refactoring my sleep cycle",
  "Purr-fectly compiled!",
  "Compiling: 9 lives left...",
  "JavaScript? More like Java-scratch!",
  "Git commit -m 'fed the cat'",
  "Cat-astrophic error in production!",
  "Meow-croservices architect",
  "Slept for 8 hours (in dev-time: 5 mins)"
];

export default function SleepingCat({}: Props) {
  const [message, setMessage] = useState(devPuns[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(devPuns[Math.floor(Math.random() * devPuns.length)]);
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div className="message-box">{message}</div>
      <span className="stand"></span>
      <div className="cat">
        <div className="body"></div>
        <div className="head">
          <div className="ear"></div>
          <div className="ear"></div>
        </div>
        <div className="face">
          <div className="nose"></div>
          <div className="whisker-container">
            <div className="whisker"></div>
            <div className="whisker"></div>
          </div>
          <div className="whisker-container">
            <div className="whisker"></div>
            <div className="whisker"></div>
          </div>
        </div>
        <div className="tail-container">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}