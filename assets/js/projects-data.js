

const webProjects = [
  {
    id: "web-01",
    category: "web",
    title: "Disaster Information Management System (K-Nearest Neighbor)",
    shortDescription: "Flood-risk prediction and disaster information platform using the K-Nearest Neighbor algorithm on real-time sensor data.",
    fullDescription: "A disaster-information management system that collects, analyzes and distributes flood-related data to the public. A K-Nearest Neighbor model classifies incoming sensor readings to generate flood-risk predictions and recommendations, surfaced through a monitoring dashboard.",
    image: "assets/images/projects/web/disaster-flood.jpg",
    techStack: ["Python", "Flask", "SQL", "K-Nearest Neighbor", "Data Visualization"],
    features: ["Flood potential monitoring & analysis", "Sensor data history", "Flood prediction simulation", "Admin dashboard"],
    role: "Full-stack Developer — front-end, back-end, and ML algorithm integration.",
    demoLink: "https://silviaskha.github.io/Portofolio/Floodcast/floodcast.html",
    githubLink: "#"
  },
  {
    id: "web-02",
    category: "web",
    title: "Javadwipa Lighting — Corporate Website",
    shortDescription: "Company profile website for a lighting-solutions company, built to showcase services, project portfolio and brand identity.",
    fullDescription: "Designed and built to strengthen Javadwipa Lighting's brand identity with a modern, elegant, responsive layout. Includes company information, core services, a lighting-project catalogue, and a contact page that makes it easy for prospective clients to get in touch.",
    image: "assets/images/projects/web/JDL.png",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: ["Company profile page", "Core services", "Project portfolio", "Contact / inquiry form", "Fully responsive"],
    role: "Front-end Developer — UI/UX design, front-end build, layout optimization and content structuring.",
    demoLink: "https://silviaskha.github.io/projects/javadwipa-lighting/",
    githubLink: "#"
  },
  {
    id: "web-03",
    category: "web",
    title: "Reparium Tech — IT Service & Company Profile Website",
    shortDescription: "Company profile site presenting IT Support, Gadget & PC Care, and Repair & Maintenance services.",
    fullDescription: "A modern, minimalist, technology-blue company profile built to introduce Reparium Tech as an IT support and repair service provider. Covers core services, value proposition, the work process, project highlights and a contact form, fully responsive across devices.",
    image: "assets/images/projects/web/reparium-tech.png",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: ["IT services page", "Gadget & PC care", "Repair & maintenance", "Project highlights", "Contact form"],
    role: "Front-end Developer & Designer — UI/UX design, full HTML/CSS layout, content structuring, responsive QA.",
    demoLink: "https://silviaskha.github.io/projects/reparium-tech/",
    githubLink: "#"
  },
  {
    id: "web-04",
    category: "web",
    title: "Fotomoro — Photography & Creative Visual Studio",
    shortDescription: "Editorial-style company profile for a photography studio covering graduation, family, prewedding and event shoots.",
    fullDescription: "A clean, minimalist, editorial website built for Fotomoro's brand identity — portfolio showcase, service packages, pricing, testimonials and a booking form, tuned for a premium photography feel. Fully responsive for mobile and desktop.",
    image: "assets/images/projects/web/fotomoro.png",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    features: ["Portfolio showcase", "Service packages & pricing", "Testimonials", "Booking form", "Responsive navigation"],
    role: "Front-end Developer & Designer — UI/UX design, layout, content, responsive & style consistency.",
    demoLink: "https://silviaskha.github.io/projects/fotomoro/",
    githubLink: "#"
  },
  {
    id: "web-05",
    category: "web",
    title: "Lost & Found GIS — Search & Rescue Mapping System",
    shortDescription: "Geographic information system built to help SAR teams locate missing persons in forested search areas.",
    fullDescription: "An interactive-map web application that helps Search and Rescue teams visualize real-time sensor and victim-location data during forest search operations, integrated with IoT hardware for live status updates.",
    image: "assets/images/projects/web/gis-sar.jpg",
    techStack: ["Leaflet.js", "JavaScript", "Bootstrap", "MySQL", "IoT Integration"],
    features: ["Interactive map", "Location search", "Real-time status updates", "Victim data log", "Sensor history"],
    role: "Full-stack Developer — front-end, back-end and IoT hardware integration.",
    demoLink: "https://github.com/silviaskha/lostawaymonitoring",
    githubLink: "https://github.com/silviaskha/lostawaymonitoring"
  },
  {
    id: "web-06",
    category: "web",
    title: "Supply Chain Management System",
    shortDescription: "Android application for equipment maintenance and inventory tracking, built for PT Garuda Food.",
    fullDescription: "A supply-chain management app for PT Garuda Food, designed to simplify equipment maintenance scheduling and track inventory across the supply chain efficiently.",
    image: "assets/images/projects/web/supply-chain.jpg",
    techStack: ["Kotlin", "MySQL", "Android"],
    features: ["Equipment inventory tracking", "Real-time status updates", "Automated reporting"],
    role: "Database & Systems Administrator.",
    demoLink: "#",
    githubLink: "#"
  }
];

const dataProjects = [
  
      {
      id: "data-01",
      category: "data",
      title: "Earthquake Pattern Discovery using Association Rule Mining",
      shortDescription:
        "An end-to-end Data Science project that discovers hidden spatial-temporal earthquake patterns across Indonesia using Association Rule Mining (Apriori).",
      fullDescription:
        "This project analyzes 91,395 historical earthquake records from BMKG (2009–2022) to discover hidden co-occurrence patterns among 51 seismic regions. Earthquake events are transformed into daily transactions and analyzed using the Apriori algorithm to generate frequent itemsets and association rules. The project includes data preprocessing, exploratory data analysis (EDA), transaction engineering, association rule mining, network visualization, and interpretation of discovered spatial-temporal relationships.",
      image: "assets/images/projects/data-science/earthquake.png",
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "MLxtend",
        "Association Rule Mining",
        "Apriori",
        "NetworkX",
        "Jupyter Notebook"
      ],
      features: [
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Transaction Engineering",
        "Apriori Frequent Itemset Mining",
        "Association Rule Generation",
        "Support, Confidence & Lift Analysis",
        "Earthquake Association Network Visualization",
        "Pattern Discovery Dashboard"
      ],
      role: "Data Scientist",
      demoLink: "https://github.com/silviaskha/earthquake-pattern-discoveryEarthquake Pattern Discovery.pdf",
      githubLink:
        "https://github.com/silviaskha/earthquake-pattern-discovery"
    },

    {
    id: "data-02",
    category: "data",
    title: "Customer Behavior Analysis — Exploratory Data Analysis",
    shortDescription: "Statistical exploration of customer demographics and purchase patterns across 400 records.",
    fullDescription: "An in-depth exploratory data analysis (EDA) of a customer-behavior dataset (400 observations: ID, Gender, Age, Estimated Salary, Purchased). The project surfaces demographic patterns behind purchase decisions through statistical testing and visualization, packaged as an interactive report.",
    image: "assets/images/projects/data-science/customer.jpg",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "HTML/CSS/JS"],
    features: ["Interactive chart explanations", "Downloadable dataset", "Descriptive statistics overview"],
    role: "Solo Data Analyst & Developer — analysis, visualization, and interactive report build end-to-end.",
    demoLink: "https://silviaskha.github.io/Portofolio/Customer-Behaviour/customer-behaviour.html",
    githubLink: "#"
  }
];

// Combined list — used by main.js. Don't edit this line.
const allProjects = [...webProjects, ...dataProjects];
