/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: Math.floor(Math.random() * 1000) + 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raul Galvez",
  title: "Hello, I'm Raul Galvez",
  subTitle: emoji(
    "I am a senior at Duke University majoring in Electrical and Computer Engineering and Computer Science. In addition to my interest in software and hardware development, I also enjoy CAD and working across disciplines."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VF8MllHyTKhDblJEzlQtTEr0duTiVs4L/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RaulGalvez288",
  linkedin: "https://www.linkedin.com/in/raulgalvezjr/",
  gmail: "Raulgalvez10072@outlook.com",
  phone: "210-309-0498",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate about development about Software, Hardware, and everything between them | Experienced across low-level languages, high-level languages, cloud technologies, and CAD",
  skills: [
    emoji(
      "🖥 Develop apps and scripts in high level languages like Java, Python, and MATLAB among others"
    ),
    emoji("📟 Program microcontrollers and FPGAs in C, Assembly, and Verilog"),
    emoji(
      "📱 Development of web apps using Typescript, Javascript, and many more"
    ),
    emoji("☁️ Utilize Cloud Technologies like AWS and Azure"),
    emoji("🔩 Design parts and products in SolidWorks, Fusion 360, and AutoCAD")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  programmingLanguages: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      targetID: ["duke-undergrad"]
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      targetID: ["Duke Robotics Club"]
    },
    {
      skillName: "C|C++|C#",
      fontAwesomeClassname: "fab fa-cuttlefish",
      targetID: [
        "duke-undergrad",
        "Duke Robotics Club",
        "Duke University Department of Computational Media, Arts & Cultures",
        "5-stage RISC Processor"
      ]
    },
    {
      skillName: "Assembly",
      fontAwesomeClassname: "fas fa-cog",
      targetID: ["5-stage RISC Processor"]
    },
    {
      skillName: "Verilog",
      fontAwesomeClassname: "fas fa-v",
      targetID: ["5-stage RISC Processor"]
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-scroll",
      targetID: ["Duke Robotics Club", "Portfolio Website"]
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      targetID: [
        "Duke Robotics Club",
        "Portfolio Website",
        "Apartment Hunter Website"
      ]
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
      targetID: [
        "Duke Robotics Club Website",
        "Portfolio Website",
        "Apartment Hunter Website"
      ]
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fa-brands fa-css3-alt",
      targetID: [
        "Duke Robotics Club Website",
        "Portfolio Website",
        "Apartment Hunter Website"
      ]
    },
    {
      skillName: "ROS1",
      fontAwesomeClassname: "fas fa-robot",
      targetID: ["Duke Robotics Club", "UR5e Cookout Simulation"]
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-square-root-alt",
      targetID: ["duke-undergrad"]
    }
  ],
  technologies: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      targetID: ["Apartment Hunter Website"]
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      targetID: [
        "Duke University Department of Computational Media, Arts & Cultures",
        "Duke Robotics Club",
        "Apartment Hunter Website",
        "UR5e Cookout Simulation"
      ]
    },
    {
      skillName: "Git Bash",
      fontAwesomeClassname: "fab fa-git-alt",
      targetID: [
        "Duke University Department of Computational Media, Arts & Cultures",
        "Duke Robotics Club",
        "Portfolio Website",
        "Apartment Hunter Website",
        "UR5e Cookout Simulation"
      ]
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      targetID: [
        "Duke Robotics Club",
        "Apartment Hunter Website",
        "Portfolio Website"
      ]
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire",
      targetID: ["Machine Learning Project"],
      targetBlock: "center"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-simple",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    }
  ],
  software: [
    {
      skillName: "Fusion 360",
      fontAwesomeClassname: "fas fa-cube",
      targetID: [
        "Duke University Department of Computational Media, Arts & Cultures",
        "Autonomous Walking Robot",
        "Duke Robotics Club",
        "UR5e Cookout Simulation"
      ]
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-vector-square",
      targetID: ["duke-undergrad"]
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-image",
      targetID: ["duke-undergrad"]
    },
    {
      skillName: "Unreal Engine 5",
      fontAwesomeClassname: "fas fa-gears",
      targetID: [
        "Duke University Department of Computational Media, Arts & Cultures"
      ],
      targetBlock: "center"
    },
    {
      skillName: "PSpice",
      fontAwesomeClassname: "fas fa-pepper-hot",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "LabVIEW",
      fontAwesomeClassname: "fas fa-solid fa-play",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    }
  ],
  handson: [
    {
      skillName: "3D Printing",
      fontAwesomeClassname: "fas fa-print",
      targetID: [
        "Duke Robotics Club",
        "Autonomous Walking Robot",
        "Underwater AUV",
        "Self-Attaching Camera Trap"
      ]
    },
    {
      skillName: "Laser Cutting",
      fontAwesomeClassname: "fas fa-scissors",
      targetID: ["duke-undergrad"]
    },
    {
      skillName: "Soldering",
      fontAwesomeClassname: "fas fa-pen",
      targetID: [
        "Duke Robotics Club",
        "Self-Attaching Camera Trap",
        "Underwater AUV"
      ]
    },
    {
      skillName: "Oscilloscope",
      fontAwesomeClassname: "fas fa-microscope",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Waveform Generator",
      fontAwesomeClassname: "fas fa-wave-square",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Power Supply",
      fontAwesomeClassname: "fas fa-plug",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Duke University",
      logo: require("./assets/images/dukeLogo.png"),
      subHeader:
        "BSE in Electrical and Computer Engineering, BS in Computer Science, Certificate in Robotics & Automation",
      duration: "August 2020 - Dec 2024",
      // desc: "Description of what I did here",
      descBullets: [],
      id: "duke-undergrad"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "General Software Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "3D Modeling and Building",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend/App Development",
      progressPercentage: "82%"
    },
    {
      Stack: "Computer Hardware Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend/Cloud Development",
      progressPercentage: "65%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer - Unreal Engine 5",
      company:
        "Duke University Department of Computational Media, Arts & Cultures",
      companylogo: require("./assets/images/dukeCMAC.png"),
      date: "August 2024 – Present",
      desc: "I first designed, built, and wired a custom control panel to emulate a polymer activation system. Then, I developed simulation software to enable remote analysis of customer equipment.",
      mainSkills: [
        "Unreal Engine 5: interactive world using simulation",
        "Blueprint Scrpting: element creation and interaction",
        "Fusion 360: asset modeling and implementation",
        "Jira: task tracking and documentation",
        "Git: version control and collaboration"
      ]
    }
  ]
};

const otherExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    // This experience is an example
    {
      role: "Electrical and Computer Engineering Teaching Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "August 2023 - Present",
      descBullets: [
        "I lead a lab section for Duke's Digital Systems course, covering concepts such as Verilog, FPGA programming, and electromechanical integration ",
        "🏅🏅 2x Outstanding Undergraduate TA Award"
      ],
      mainSkills: [
        "Lab instruction: guidance on computer architecture concepts and FPGA programming",
        "Project mentorship: assistance on Verilog programming and electromechanical integration"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Recent projects that showcase a diverse range of skills",
  projects: [
    {
      image: require("./assets/images/thumbnails/robot.png"),
      projectName: "Duke Robotics Club",
      projectDesc:
        "As a member of the CS team, I manage overarching decisions regarding the physical assembly of the robot, delegation of tasks, and the onboarding of new mechanical members.",
      mainSkills: [
        "Programming: Python, Typescript, ROS1",
        "Leadership: Onboarding lead, CS Core member",
        "Hands-On: 3D printing, Buoyancy Tuning"
      ],
      footerLink: [
        {
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/robot/rw1.png"),
              caption: "At competition"
            },
            {
              pic: require("./assets/images/robot/rw2.png"),
              caption: "At the pool"
            },
            {
              pic: require("./assets/images/robot/rw3.png"),
              caption: "Underside"
            },
            {
              pic: require("./assets/images/robot/render1.png"),
              caption: "Full assembly render"
            },
            {
              pic: require("./assets/images/robot/stack.png"),
              caption: "Electrical stack render"
            },
            {
              pic: require("./assets/images/robot/camera.png"),
              caption: "Camera mount render"
            }
          ]
        },
        {
          name: "Team Website",
          url: "https://duke-robotics.com/"
        },
        {
          name: "Competition Website",
          url: "https://robonation.org/about/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Walking_Robot/rendering.png"),
      projectName: "Autonomous Walking Robot",
      projectDesc:
        "I designed, modeled, and programmed a walking robot for my Robot Studio course. It uses a Raspberry Pi 4, Lewansoul LX-16A servos, and a custom 3D printed components.",
      mainSkills: [
        "Python: control of the servos",
        "Git: version control for various project stages",
        "Fusion 360: 3D modeling of legs, chassis, and housing",
        "3D printing: custom part fabrication",
        "Soldering: circuit assembly",
        "Circuit design: power distribution and control"
      ],
      footerLink: [
        /*{
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/placeholder.jpg"),
              caption: "Placeholder"
            }
          ]
        },
        {
          name: "Code Repository",
          url: "https://gitfront.io/r/vzchen12/UNpA3DKFZE8x/patron-counter/"
        }*/
      ]
    },
    {
      image: require("./assets/images/camera_trap/full_body.png"),
      projectName: "Self-Attaching Camera Trap",
      projectDesc:
        "Working with a team of engineers, we went through all of the engineering process including brainstorming, design, and implementation. I designed and programmed the sensor fusion of the electrical components",
      mainSkills: [
        "Python: motor control",
        "3D printing: custom housing fabrication",
        "Soldering: circuit assembly",
        "Circuit design: interface and control of components"
      ],
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/camera_trap/full_body.png"),
              caption: "Full assembly of camera trap"
            },
            {
              pic: require("./assets/images/camera_trap/internals.png"),
              caption: "Internal components"
            }
          ]
        },
        {
          name: "Poster Presentation",
          url: "https://drive.google.com/file/d/1xkYTDpCekDJP4LKa3pAZ-DWgQPGIFrm6/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const multiDiscProjects = {
  title: "Interdisciplinary Projects",
  subtitle: "Projects that overlap mechanical, electrical, and software",
  projects: [
    {
      image: require("./assets/images/placeholder.jpg"),
      projectName: "Animal Deterrent Mechanism",
      projectDesc:
        "I designed and programmed a Raspberry Pi-based system that detects animals using a PIR sensor and a camera with Computer Vision. After detection, the Raspberry Pi captures an image of the animal and activates several deterrents.",
      mainSkills: [
        "Circuit design: Connecting components to Raspberry Pi",
        "CV: OpenCV for animal detection",
        "Git: version control and collaboration",
        "3D printing: part fabrication for motion component"
      ],
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/placeholder.jpg"),
              caption: "Placeholder"
            }
          ]
        },
        {
          name: "Project Repository",
          url: "https://drive.google.com/drive/folders/1h6wmmpmsol9Kt3RwvbTfrpdYKEORiaBt?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Drone_DR/hook.png"),
      projectName: "Drone Delivery and Recovery System",
      projectDesc:
        "I designed and printed a drone delivery system that uses a Parrot ANAFI drone. The system delivers the payload to a tree branch, leaves it for long periods of time, and recovers the payload using the same drone. This project was used by Duke University during the 2024 XPrize Rainforest competition.",
      mainSkills: [
        "3D printing: part fabrication for drone attachment",
        "Fusion 360: Design of hook and attachment system"
      ],
      footerLink: [
        {
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/Drone_DR/low_fidelity.png"),
              caption: "Low fidelity prototype"
            },
            {
              pic: require("./assets/images/Drone_DR/hook.png"),
              caption: "Hook attachment"
            }
          ]
        },
        {
          name: "Final Report",
          url: "https://drive.google.com/file/d/1J3Hvar-NJ4yBdTvN8eqV9F3I1OrOSbYD/view?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const softwareProjects = {
  title: "Software Projects",
  subtitle: "Projects focused on software design and programming",
  projects: [
    {
      image: require("./assets/images/portfolio_website/Raul-Galvez.png"),
      projectName: "Portfolio Website",
      projectDesc:
        "I adapted and maintain my personal portfolio website using HTML, CSS, and JavaScript.",
      mainSkills: [
        // eslint-disable-next-line
        "HTML: website content and structure",
        "CSS: styling of website",
        "JavaScript: user interactability with website",
        "Git: version control throughout project"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://raulgalvezjr.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/DRC_website/logo.png"),
      projectName: "Duke Robotics Club Website",
      projectDesc:
        "I overhauled the Duke Robotics Club website and help to maintain it, adding new content and features as needed. It received 2nd place in the website metric in Robonation's Robosub 2024 competition.",
      mainSkills: [
        // eslint-disable-next-line
        "Wordpress: website content and structure",
        "CSS: styling of website"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://duke-robotics.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/UR5e_arm/Full_simulation.png"),
      projectName: "UR5e Cookout Simulation",
      projectDesc:
        "In a team of four people, I simulated a UR5e arm in Gazebosim by modifying the URDF file to incorporate a gripper as the end effector. I also helped to control the movement of the simulated arm using Python.",
      mainSkills: [
        "Gazebosim: simulation environment",
        "ROS1: customized URDF file of the robot",
        "Python: control of the arm's movement",
        "Git: version control and collaboration"
      ],
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/UR5e_arm/simulated_UR5e.png"),
              caption: "Simulated UR5e arm with gripper"
            },
            {
              pic: require("./assets/images/UR5e_arm/Full_simulation.png"),
              caption: "UR5e arm holding burger patty"
            },
          ]
        },
        {
          name: "Final Report",
          url: "https://drive.google.com/file/d/1p7hE7d0GsVRePXV9CouzCvUmgag8VIvV/view?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/5-stage_RISC/diagram.png"),
      projectName: "5-stage RISC Processor",
      projectDesc:
        "I coded a 5-stage RISC processor by using Verilog, and implemented it on an Nexys A7 FPGA.",
      mainSkills: [
        "Python: software development",
        "Assembly: test cases",
        "Verilog: processor testing",
        "Git: version control"
      ],
      footerLink: [
          /*{
          name: "Code Repository",
          url: "https://raulgalvezjr.com"
          }*/
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Apartment_hunter/atxaptlogo.jpg"),
      projectName: "Apartment Hunter Website",
      projectDesc:
        "I refactored and documented the codebase for Picasso Intelligence's product website, drastically reducing duplicated code and providing a no-code way to add new products via JSON files.",
      mainSkills: [
        // eslint-disable-next-line
        "HTML: website content and structure",
        "CSS: styling of website",
        "JavaScript: user interactability with website",
        "Bootstrap: website layout",
        "Git: version control throughout project",
        "Gitlab: CI/CD pipeline for website deployment",
        "AWS: hosting of website"
      ],
      footerLink: [
        {
          name: "Gitlab Repository",
          url: "https://gitlab.com/raulgalvez10072/atxapartmenthunter"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const electricalProjects = {
  title: "Electrical Projects",
  subtitle:
    "Projects focused on Circuit Design, Soldering, and Micro-controllers",
  projects: [
    {
      image: require("./assets/images/Underwater_AUV/Rendering.jpg"),
      projectName: "Underwater AUV",
      projectDesc:
        "In a team of engineers, I wired, soldered, and epoxied the electrical components of an AUV. Additionally, I incorporated a depth sensor and a gyroscopic sensor to the system.",
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/Underwater_AUV/Rendering.jpg"),
              caption: "Rendering of AUV"
            },
            {
              pic: require("./assets/images/Underwater_AUV/epoxied_arduino.jpg"),
              caption: "Epoxied Arduino"
            },
            {
              pic: require("./assets/images/Underwater_AUV/PDB.jpg"),
              caption: "Power Distribution Board"
            }
          ]
        },
        {
          name: "Final Report",
          url: "https://drive.google.com/file/d/1ZsWCRDoJMIcBn5en0zVbckDKV4P8z_4d/view?usp=drive_link"
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "3D printing: printing of custom thrusters",
        "Soldering: circuit assembly",
        "Circuit design: distribution of wires",
        "Epoxying: waterproofing of components"
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      image: require("./assets/images/placeholder.jpg"),
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
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Papers",
  subtitle: "Reports I have contributed to during my time at Duke University",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://arxiv.org/abs/2410.09684",
      title:
        "Technical Design Review of Duke Robotics Club's Oogway: An AUV for RoboSub 2024",
      description:
        "The technical design details of Oogway, Duke Robotics Club's AUV for RoboNation's 2024 RoboSub competition."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📫"),
  // number: "+1 (440) 318-4013",
  email_address: "RaulGalvez10072@outlook.com",
  location: "San Antonio, Texas"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  otherExperiences,
  openSource,
  bigProjects,
  multiDiscProjects,
  softwareProjects,
  electricalProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
