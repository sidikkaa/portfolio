import photo2 from './photo2.jpg'; // Adjust the path if necessary

const logotext = "Sidikkaa";
const meta = {
    title: "Sidikkaa MohamedSaleem",
    description: "I’m Sidikkaa Mohamed Saleem, a full-stack developer passionate about coding and creating innovative solutions.",
};

const introdata = {
    title: "Sidikkaa MohamedSaleem",
    animated: {
        first: "I love coding", 
        second: "I code cool websites",
        third: "I develop good websites",
    },
    description: "Having strong knowledge of developing websites. Aspiring computer programmer with a B.E degree and proven problem solving skills.organised, efficient and hard working person. I am able to motivate and direct my talents and skills to meet objectives",
    your_img_url:photo2,

};

const dataabout = {
    title: "about my self",
    aboutme:"I specialize in creating innovative solutions and tackling complex problems. Feel free to reach out if you'd like to learn more about my work or discuss potential projects.",
};
const worktimeline = [{
        jobtitle: "web development intern",
        where: "CodeBind Technology ",
        date: "2023",
    },
    {
        jobtitle: "Wed development intern",
        where: "CYBERNAUT karur(online)",
        date: "jan2024-Aug2024",
    },
   
];

const skills = [

    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "c",
        value: 95,
    },
    {
        name: "java",
        value: 100,
    },
    {
        name: "nextjs",
        value: 90,
    },
    {
        name: "nodejs",
        value: 95,
    },
    {
        name: "mongodb,firebase,sql",
        value: 95,
    },
];



const dataportfolio = [{
        img: "https://tse3.mm.bing.net/th?id=OIP.mgn8RgVHen2XkdD-vW-yIAHaFj&pid=Api&P=0&h=220",
        description: "chat application supports real-time messaging so that users can instantly receive and send messages.",
        link: "https://github.com/sidikkaa/chat_app",
        liveLink:"https://chat-app-41br.vercel.app/login"
       
    },
    {
        img: "https://screenshots.webflow.com/sites/5f51f3bd538d832ac74d1f71/20201017155855_24f0ae61ad5144db62cec7e2bf189159.png",
        description: "Focus on accurately simulating the performance and behavior of Apple devices.",
        link: "https://github.com/sidikkaa/apple_clone",
        liveLink:"https://apple-clone-vqvl.vercel.app/"
    },
    {
        img: "https://tse1.mm.bing.net/th?id=OIP.70CLW58hxZqoV8d5xa5L3wHaE7&pid=Api&P=0&h=220",
        description: " Implement features that allow users to easily categorize, prioritize, and track tasks to streamline workflow and improve productivity",
        link: "https://github.com/sidikkaa/task-management-FR",
        liveLink: "https://task-management-fr-pfrk.vercel.app/",
    },
    {
        img: "https://tse3.mm.bing.net/th?id=OIP.IJ9NJDBgMqOGC4bnlcp4xAHaEH&pid=Api&P=0&h=220",
        description: "pdf-word,word-pdf,image-pdf,ppt-pdf...",
        link: "https://github.com/sidikkaa/all_in_one_conversion",
    },
    {
        img: "https://tse1.mm.bing.net/th?id=OIP.JcE6jmncPuhFYym0QCxqXQAAAA&pid=Api&P=0&h=220",
        description: "Removes the background from the image",
        link: "https://github.com/sidikkaa/br-remover",
    },
];

const contactConfig = {
    YOUR_EMAIL: "sidikkaa772004@gmail.com",
    YOUR_FONE: "+91 9962600752",
    description: "With a background in computer science and experience in full-stack development, I specialize in creating innovative solutions and tackling complex problems. Feel free to reach out if you'd like to learn more about my work or discuss potential projects." ,
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_m1fziu2",
    YOUR_TEMPLATE_ID: "template_izy30vc",
    YOUR_USER_ID: "jsIbN7KO-TASw3tkp",
};

const socialprofils = {
    github: "https://github.com/sidikkaa",
    linkedin: "https://www.linkedin.com/in/sidikkaa-m-a0119b260/",
    leetcode:"https://leetcode.com/u/sidi21cs138/"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};