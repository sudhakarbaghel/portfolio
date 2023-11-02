const portfolioItems = [
  {
    portfolioType: "Project",
    certificateLink: "https://sudhakarbaghel.github.io/resume-maker/",
    githubLink: "https://github.com/sudhakarbaghel/resume-maker",
    techStack: "React Js, Node Js",
    imgSrc:
      "https://res.cloudinary.com/dw7xu0fus/image/upload/v1691735797/Screenshot_from_2023-08-11_12-06-19_lcjoer.png",
    heading: "Resume Maker",
  },
  {
    portfolioType: "Project",
    certificateLink: null,
    githubLink: "https://github.com/sudhakarbaghel/booking.com-clone",
    techStack: "React Js, Node Js, Express, Mongo DB, JWT's",
    imgSrc:
      "https://res.cloudinary.com/dw7xu0fus/image/upload/v1693464447/Screenshot_from_2023-08-31_12-17-17_t9uwtn.png",
    heading: "Booking.com clone",
  },
  {
    portfolioType: "Project",
    certificateLink: "https://sudhakarbaghel.github.io/trakovid",
    githubLink: "https://github.com/sudhakarbaghel/booking.com-clone",
    techStack: "React Js, Typescript.js, Redux",
    imgSrc:
      "https://user-images.githubusercontent.com/88780692/241116564-592eea7b-57db-4bf1-a54c-beb4a807c49e.png",
    heading: "Trakovid: Covid tracker",
  },
  {
    portfolioType: "Project",
    certificateLink: "https://sudhakarbaghel.github.io/invoiceGenerator/",
    githubLink: "https://github.com/sudhakarbaghel/invoiceGenerator",
    techStack: "React Js,CSS",
    imgSrc:
      "https://user-images.githubusercontent.com/88780692/230784388-6730385f-4f67-47f8-9ede-aea62881c446.png",
    heading: "Invoice generator",
  },

  {
    portfolioType: "Project",
    certificateLink: null,
    githubLink: "https://github.com/sudhakarbaghel/firebase-chat-app",
    techStack: "React js, Firebase",
    imgSrc:
      "https://firebase.google.com/static/codelabs/firebase-android/img/screenshot_960.png",
    heading: "Chat app",
  },
  {
    portfolioType: "Project",
    certificateLink: null,
    githubLink: "https://github.com/sudhakarbaghel/React-blog-app",
    techStack: "React js, Mongo DB, Node js, Express js",
    imgSrc:
      "https://res.cloudinary.com/dw7xu0fus/image/upload/v1693473423/Screenshot_from_2023-08-31_14-45-47_auscje.png",
    heading: "Blog app",
  },
  {
    portfolioType: "Project",
    certificateLink: "https://sudhakarbaghel.github.io/Book-terminal-app/",
    githubLink: "https://github.com/sudhakarbaghel/Book-terminal-app",
    techStack: "HTML ,CSS, Bootstrap",
    imgSrc:
      "https://res.cloudinary.com/dw7xu0fus/image/upload/v1693465384/Screenshot_from_2023-08-31_12-32-47_ditv3a.png",
    heading: "Book Terminal: Connecting bibliophiles",
  },
  {
    portfolioType: "Certificate",
    certificateLink:
      "https://www.udemy.com/certificate/UC-5c2ec66d-9f1d-4ee1-8a63-16346c377cf9/",
    githubLink: null,
    techStack: "MERN stack",
    imgSrc:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-5c2ec66d-9f1d-4ee1-8a63-16346c377cf9.jpg?v=1670129700000",
    heading: "MERN stack udemy certificate",
  },
  {
    portfolioType: "Certificate",
    certificateLink:
      "https://coursera.org/share/65e83026955ef2d620e2214760158c72",
    githubLink: null,
    techStack: "C++",
    imgSrc:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8H49XH5UTHSG/CERTIFICATE_LANDING_PAGE~8H49XH5UTHSG.jpeg",
    heading: "Advanced c++",
  },
  {
    portfolioType: "Certificate",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/certificate/BUBUFNCMT7MY",
    githubLink: null,
    techStack: "Search engine optimisation",
    imgSrc:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BUBUFNCMT7MY/CERTIFICATE_LANDING_PAGE~BUBUFNCMT7MY.jpeg",
    heading: "Introduction to Google SEO",
  },
  {
    portfolioType: "Certificate",
    certificateLink:
      "https://coursera.org/share/a23514ec37cb51ab4ef901d005d534c2",
    githubLink: null,
    techStack: "Search engine optimisation",
    imgSrc:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BUBUFNCMT7MY/CERTIFICATE_LANDING_PAGE~BUBUFNCMT7MY.jpeg",
    heading: "Introduction to Google SEO",
  },
  {
    portfolioType: "Certificate",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/specialization/NNRD8P89F9WL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    githubLink: null,
    techStack: "Smart contracts, Consensus, Hashing algo's",
    imgSrc:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NNRD8P89F9WL/CERTIFICATE_LANDING_PAGE~NNRD8P89F9WL.jpeg",
    heading: "Specialization in blockchain",
  },
  {
    portfolioType: "Badge",
    certificateLink: "https://www.codechef.com/users/sudhakar_1112",
    githubLink: null,
    techStack: "Competitive programming using c++",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1024px-Codechef%28new%29_logo.svg.png",
    heading: "4⭐ on Codechef",
  },
  {
    portfolioType: "Badge",
    certificateLink: "https://www.hackerrank.com/sudhakarsinghba1",
    githubLink: null,
    techStack: "Competitive programming using c++",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvMT69gb_MUzi831hF8xm5lcgeebh1DHEiTufBwlDkMLIbxg5",
    heading: "5⭐ (C++) on Hackerrank",
  },
];
 
export default portfolioItems;
