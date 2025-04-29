import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer and DSA enthusiast. I enjoy everything from crafting beautiful UIs to designing efficient backend systems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    githubLink: "https://github.com/amanraj464667/ecomm.git", // Add your GitHub link here
  },
  {
    title: "Real Time Chat Application",
    image: project2,
    description:
      "A chat application is a real-time communication tool that allows users to exchange messages instantly. At its core, it includes essential features such as user authentication, one-on-one messaging, group chats, and message timestamps.",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    githubLink: "https://github.com/amanraj464667/fullstack-chat-app.git", // Add your GitHub link here
  },
  {
    title: "To-Do App",
    image: project3,
    description:
      "A To-Do application is a productivity tool that helps users manage and organize their daily tasks efficiently. It typically includes core features such as task creation, editing, deletion, and completion marking.",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    githubLink: "https://github.com/amanraj464667/todo-app.git", // Add your GitHub link here
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "A Weather App is a user-friendly tool that provides real-time weather updates for any searched city using a third-party API such as OpenWeatherMap or WeatherAPI. The app displays essential weather details including temperature, humidity, wind speed, and overall conditions like sunny, cloudy, or rainy, all presented with appropriate weather icons for better visual understanding.",
    technologies: ["HTML", "CSS", "ReactJS"],
    githubLink: "https://github.com/amanraj464667/weather.git", // Add your GitHub link here
  },
];

export const CONTACT = {
  address: "Bengaluru ",
  phoneNo: "9905661917 ",
  email: "amanraj464667@gmail.com",
};
