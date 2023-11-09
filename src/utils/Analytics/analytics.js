// analytics.js
export const GA_TRACKING_ID = "G-FVWQ2MZ10G"; // Replace with your actual Google Analytics tracking ID

const initGA = () => {
  // Add the Google Analytics script dynamically
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
  };
};

export default initGA;
