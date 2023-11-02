/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "user-images.githubusercontent.com",
      "firebase.google.com",
      "udemy-certificate.s3.amazonaws.com",
      "s3.amazonaws.com",
      "upload.wikimedia.org",
      "media.licdn.com",
      "encrypted-tbn0.gstatic.com"
    ],
  },
};

module.exports = nextConfig;
