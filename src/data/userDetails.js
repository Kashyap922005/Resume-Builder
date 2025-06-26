const userDetails = {
  userName: "alex_smith",
  firstName: "Alex",
  middleName: "J",
  lastName: "Smith",
  location: "Los Angeles",
  email: "alex.smith@example.com",
  phone: "9123456780",
  profile: "www.alexsmith.com",
  linkedin : "alexsmith",
  github : "alexsmith",
  professionalSummary:
    "Versatile software engineer with 6+ years of experience specializing in cloud-native applications, microservices architecture, and scalable APIs. Passionate about clean code and continuous integration.",
  
  DOB: "22/03/1990",
  addresses: {
    permanentAddress: {
      doorNo: "102A",
      streetName: "Park Avenue",
      landMark: "Opposite Central Library",
      areaName: "Whitefield",
      pincode: "560066",
      cityName: "Bangalore",
      districtName: "Bangalore Urban",
      stateName: "Karnataka",
    },
  },
  Skills: ["Java", "Spring Boot", "Kubernetes", "AWS", "Docker"],
  languages: ["English", "French", "Kannada"],
  hobbies: [
    "Cycling — exploring city trails and countryside routes.",
    "Cooking — experimenting with international cuisines.",
    "Tech Blogging — writing about cloud technologies and best practices.",
  ],
  extraCirrcularActivities: [
    "Speaker at JavaOne 2022 — Presented a talk on microservices optimization.",
    "Community Organizer — Managed local developer meetups and hackathons.",
  ],
  educationDetails: [
    {
      type: "10th",
      board: "ICSE",
      school: "Green Valley High School",
      hallticket: "ICSE654321",
      startDate: "01/06/2004",
      endDate: "30/04/2005",
      yearofPass: "2005",
      grade: "92%",
      city: "Mumbai",
      stream: "General",
      description:
        "Secured top 10 rank in the city. Active participant in science fairs and debate competitions.",
    },
    {
      type: "12th",
      board: "ICSE",
      school: "Bright Future Junior College",
      hallticket: "ICSE765432",
      startDate: "01/06/2005",
      endDate: "30/04/2007",
      yearofPass: "2007",
      gradingSystem: "%",
      grade: "90%",
      city: "Mumbai",
      description:
        "Specialized in Physics, Chemistry, and Mathematics. Developed a basic weather forecasting web app as a project.",
      stream: "Science",
    },
    {
      type: "B.E.",
      board: "Mumbai University",
      school: "National Institute of Technology",
      hallticket: "MU123987",
      startDate: "01/08/2007",
      endDate: "31/05/2011",
      yearofPass: "2011",
      gradingSystem: "CGPA",
      grade: "8.3",
      city: "Mumbai",
      description:
        "Graduated with distinction in Computer Engineering. Completed final year project on automated drone navigation systems.",
      stream: "Computer Engineering",
    },
  ],
  experiences: [
    {
      company: "TCS",
      role: "Backend Developer",
      startDate: "01/02/2012",
      endDate: "31/12/2015",
      city: "Bangalore",
      description:
        "Developed RESTful services for client applications using Java and Spring Boot. Participated in migrating monolithic systems to microservices, improving system uptime by 30%.",
    },
    {
      company: "Amazon",
      role: "Cloud Engineer",
      startDate: "01/01/2016",
      endDate: "31/12/2021",
      city: "Seattle",
      description:
        "Designed and implemented scalable cloud infrastructure solutions on AWS. Automated deployment pipelines using Jenkins and Terraform, reducing manual errors and deployment time.",
    },
  ],
  links: [
    {
      title: "GitHub",
      link: "https://github.com/alexsmith",
    },
    {
      title: "Portfolio",
      link: "https://alexsmith.dev",
    },
  ],
  projects: [
    {
      company: "Freelance",
      project: "Task Management App",
      startDate: "01/03/2020",
      endDate: "31/08/2020",
      city: "Remote",
      description:
        "Created a cross-platform task management application using React Native and Firebase. Implemented push notifications and offline sync features.",
    },
  ],
  internships: [
    {
      company: "Innovate Labs",
      project: "IoT Home Automation",
      startDate: "01/06/2009",
      endDate: "31/08/2009",
      city: "Mumbai",
      description:
        "Developed prototypes for home automation devices communicating via MQTT protocol. Assisted in hardware testing and firmware development.",
    },
  ],
  volunteerings: [
    {
      organization: "Code for Good",
      volunteering: "Volunteer Developer",
      startDate: "01/07/2018",
      endDate: "31/12/2019",
      city: "Bangalore",
      description:
        "Contributed to open source projects aimed at improving civic engagement and transparency. Helped build apps for community resource sharing.",
    },
  ],
  accomplishments: [
    {
      company: "Amazon",
      accomplishment: "Innovator Award",
      startDate: "01/01/2019",
      endDate: "31/12/2019",
      city: "Seattle",
      description:
        "Recognized for designing a cost-optimization framework that reduced cloud infrastructure expenses by 20% without impacting performance.",
    },
  ],
  research: [
    {
      organization: "Tech Institute",
      type: "Conference Paper",
      startDate: "01/03/2013",
      endDate: "30/09/2013",
      title: "Optimizing Kubernetes Clusters for Cost and Performance",
      description:
        "Explored techniques to improve resource allocation and scaling policies in Kubernetes environments, presented at CloudConf 2013.",
    },
  ],
  certifications: [
    {
      organization: "Udemy",
      title: "Docker Mastery",
      type: "Professional Certificate",
      startDate: "01/05/2018",
      endDate: "31/07/2018",
      description:
        "Completed an in-depth course on Docker and container orchestration covering best practices and deployment strategies.",
    },
    {
      organization: "Google Cloud",
      title: "Professional Cloud Architect",
      type: "Certification",
      startDate: "01/11/2020",
      endDate: "01/11/2023",
      description:
        "Achieved certification demonstrating expertise in designing and managing Google Cloud solutions for enterprises.",
    },
  ],
};

export default userDetails;
