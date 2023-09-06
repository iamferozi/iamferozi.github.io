/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "iamferozi",
  title: "Hi all, I'm Hamza",
  subTitle: emoji(
    "A computer science graduate from Sindh Madrasah-Tul-Islam University. Technology enthusiast. Coding since 2016. My thirst for knowledge is never quenched. It is my 3rd year as a Game Developer."
  ),
  resumeLink:
    "https://github.com/iamferozi/iamferozi.github.io/raw/main/Assets/HamzaAli-CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iamferozi",
  linkedin: "https://www.linkedin.com/in/m-hamza-ali-ferozi-49b177184/",
  gmail: "designerali54@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/imferozi/",
  //medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/11960513/hamza-ali",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE GAME DEVELOPER WHO WANTS TO BECOME A GAME DIRECTOR",
  skills: [
    emoji(
      "⚡ Develop highly interactive gameplay functionalities, bot in single and multiplayer games."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Coding",
      fontAwesomeClassname: "fa-code"
    },
    {
      skillName: "C-terminal",
      fontAwesomeClassname: "fa-terminal"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sindh Madressatul Islam University",
      logo: require("./assets/images/smiu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2016 - December 2020",
      desc: "Designed and developed a PC game that can be controlled by an Android device.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Govt PECHS Education Foundation Science College Karachi",
      logo: require("./assets/images/pechs.jpeg"),
      subHeader: "High School",
      duration: "January 2014 - Decemeber 2016",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Designing",
      progressPercentage: "50%"
    },
    {
      Stack: "Debugging",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Game Developer",
      company: "Epaging (PVT). Ltd",
      companylogo: require("./assets/images/epaging-logo.png"),
      date: "June 2022 – Present",
      desc: "Managing design team, Implementing new functionalities and client handling",
      descBullets: [
        "Implemented multiplayer combat system",
        "Implemented multiplayer positioning system for racing",
        "Implemented AI using Blackboard"
      ]
    },
    {
      role: "Game Developer",
      company: "The GameStorm Studios",
      companylogo: require("./assets/images/gss.png"),
      date: "May 2019 – May 2022",
      desc: "Cloned number of multiple Android games of Shooting, Racing, Stunts and Adventure genre. Integrated 3rd part SDKs Admob, Firebase and Game Analytics etc. Designed economy and overall gameplays for complete games."
    },
    {
      role: "Game Developer Intern",
      company: "The GameStorm Studios",
      companylogo: require("./assets/images/gss.png"),
      date: "Jan 2019 – May 2019",
      desc: "Improving gameplay functionalites, level desiging, UI implementations and game design documentations."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR GAMES",
  projects: [
    {
      image: require("./assets/images/apeslogo.png"),
      projectName: "Olympus of the Eternal Victory",
      projectDesc: "Apes Planet, an imersive metaverse experience based on Unreal Engine.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apesplanet.com/#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/crazy.gif"),
      projectName: "Crazy Race Battle 2.0",
      projectDesc: "Project - Photon based multiplayer racing game.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crazybattle.io/"
        }
      ]
    },
    {
      image: require("./assets/images/acro.webp"),
      projectName: "Acromania",
      projectDesc: "Project - An acronym based, multiplayer game build in Unity game engine using Photon",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.poshsidekick.acromania"
        }
      ]
    },
    {
      image: require("./assets/images/astro.webp"),
      projectName: "Astro Adventure",
      projectDesc: "Startup - Single player game based on Unity, I use to develop it in my free time.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.ARC.AstroAdventures&hl=en&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/mafia.webp"),
      projectName: "City Mafia Game:Gangster Games",
      projectDesc: "Project - Story based first person shooting game. Implemented using Opsive First person shooting.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.dolphingames.city.mafia.gods"
        }
      ]
    },
    {
      image: require("./assets/images/prado.webp"),
      projectName: "Prado Car Parking - Car games",
      projectDesc: "Project - Realistic Car controller based parking games, designed and developed by me.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.te.police.robot.bike.stunts"
        }
      ]
    },
    {
      image: require("./assets/images/hotcar.webp"),
      projectName: "Hot Cars Fever-Car Stunt Races",
      projectDesc: "Project - Designed multiple levels for different modes, implemented AI and cards collecting system to unlock cars",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.arillabs.hot.car"
        }
      ]
    },
    {
      image: require("./assets/images/dino.webp"),
      projectName: "Dino Hunt: Jungle Adventure",
      projectDesc: "Project - First person hunting game, implemented different guns functionality and AI behaviours for dinosaurs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.gb.dino.snipershooter"
        }
      ]
    },
    {
      image: require("./assets/images/monster.webp"),
      projectName: "Crazy Monster Truck Stunts",
      projectDesc: "Project - Stunt based racing game, with monster truck physics.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.sharpaxe.monstertruck.carstunts.cardrivingsimulator"
        }
      ]
    },
    {
      image: require("./assets/images/robo.webp"),
      projectName: "Robot Dino Vs Robot Kong Fight",
      projectDesc: "Project - Robot simulation game with differnt mode to make the game addictive.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.sharpaxe.dino.robot.car.transform.game"
        }
      ]
    },
    {
      image: require("./assets/images/dog.webp"),
      projectName: "Police Dog Attack Prison Break",
      projectDesc: "Project - Story based dog simulation game, I implemented dog controller in 3rd person and diffferent AIs. to make the game engaging.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.te.policedog.attack.prisonbreak"
        }
      ]
    },
    {
      image: require("./assets/images/hope.png"),
      projectName: "Hope: The Last Light",
      projectDesc: "GAME JAM Project - 48-Hour Game Jam: I, along with a team of two talented designers and one skilled developer, successfully created an exhilarating top-down endless shooting game within a tight deadline.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.te.policedog.attack.prisonbreak"
        }
      ]
    },
    {
      image: require("./assets/images/sks.png"),
      projectName: "Kids Learning App",
      projectDesc: "Freelance Project - Subject-based worlds, continent-based levels, and country-based exercises. It is a 2D learning application designed to enhance students' learning experience. This innovative app offers a unique approach to education, allowing students to explore various subjects through captivating virtual worlds.",
      footerLink: [
        {
          name: "Watch Gameplay",
          url: "https://www.youtube.com/watch?v=q1bfS9Td-20"
        }
      ]
    },
    {
      image: require("./assets/images/golf.png"),
      projectName: "Spirometer Integrated IOT App",
      projectDesc: "Freelance Project - A Golf Game connected with spirometer device, allowing patients to engage in a playful exercise. Golf gamplay was implemented. database and assesment reports was also gerated for each cycle.",
      footerLink: [
        {
          name: "Watch Gameplay",
          url: "https://www.youtube.com/watch?v=KD7Q3qHBFzY"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3342465557",
  email_address: "designerali54@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
