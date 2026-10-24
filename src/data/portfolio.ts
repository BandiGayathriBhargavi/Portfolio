export const profile = {
  fullName: 'Bandi Gayathri Bhargavi',
  shortName: 'Bhargavi',
  monogram: 'BGB',
  headline:
    'Software Developer | Python and Java | Data Science and Machine Learning | Salesforce Development',
  eyebrow: 'Aspiring Software Developer | Lifelong Learner | Problem Solver',
  heroHeading: 'Building Ideas Into Intelligent Digital Experiences.',
  heroSupporting:
    "I'm a Computer Science and Data Science graduate passionate about software development, problem-solving, data-driven applications, and exploring technologies that turn ideas into practical solutions.",
  education: {
    field: 'B.Tech in Computer Science and Data Science',
    institution: 'G. Pulla Reddy Engineering College',
    location: 'Kurnool',
    cgpa: '8.63',
  },
  contact: {
    email: '229x1a3204@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bandi-gayathri-bhargavi-58b4a8343',
    github: '[ADD GITHUB URL]',
  },
  resumeFile: 'Bandi_Gayathri_Bhargavi__upGradX_Resume.pdf',
  tagline: 'Designed with curiosity. Built with code.',
};

export type ProjectCategory =
  | 'Software Development'
  | 'AI/ML'
  | 'Web Applications'
  | 'Salesforce'
  | 'Python'
  | 'Machine Learning'
  | 'Web Development'
  | 'Database';

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; icon: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C', icon: 'c' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'Globe',
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Django', icon: 'django' },
      { name: 'Flask', icon: 'flask' },
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQL', icon: 'sql' },
    ],
  },
  {
    title: 'Data Science and Machine Learning',
    icon: 'BrainCircuit',
    skills: [
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'LSTM', icon: 'lstm' },
      { name: 'ARIMA', icon: 'arima' },
      { name: 'SVM', icon: 'ml' },
      { name: 'Random Forest', icon: 'ml' },
      { name: 'Data Analysis', icon: 'analysis' },
    ],
  },
  {
    title: 'Salesforce and Cloud Technologies',
    icon: 'Cloud',
    skills: [
      { name: 'Apex', icon: 'apex' },
      { name: 'Lightning Web Components', icon: 'lwc' },
      { name: 'Flows', icon: 'flow' },
      { name: 'CRM Concepts', icon: 'crm' },
    ],
  },
  {
    title: 'Tools and Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Windows', icon: 'windows' },
    ],
  },
];

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  filterTags: string[];
  tagline: string;
  problem: string;
  technologies: string[];
  gradient: string;
  icon: string;
  status: string;
  features: string[];
  sections: { heading: string; body: string }[];
  links: { label: string; url: string; type: 'repo' | 'demo' | 'placeholder' }[];
}

export const projects: ProjectCaseStudy[] = [
  {
    id: 'stocksight-ai',
    slug: 'stocksight-ai',
    title: 'StockSight AI — Stock Price Prediction and Trend Analysis',
    shortTitle: 'StockSight AI',
    category: 'Machine Learning | Deep Learning | Web Development',
    filterTags: ['Machine Learning', 'Web Development', 'Python'],
    tagline:
      'A stock-price prediction web application designed to help users explore historical and current market trends and view model-generated price predictions.',
    problem:
      'Understanding stock market trends is difficult for non-experts. StockSight AI explores whether machine learning models can surface historical patterns and present them as approachable visual insights.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'ARIMA', 'HTML', 'React'],
    gradient: 'from-violet-glow via-cyan-glow to-magenta-glow',
    icon: 'TrendingUp',
    status: 'Academic Project',
    features: [
      'Historical stock-price exploration',
      'Visual representation of market trends',
      'Stock prediction using LSTM and ARIMA approaches',
      'Interactive charts and data-focused interface',
      'Frontend and backend integration',
    ],
    sections: [
      {
        heading: 'Project Overview',
        body: 'StockSight AI is a machine-learning and deep-learning web application designed to analyze historical stock data and surface stock trends, predictions, and visual insights. The motivation was to combine data science techniques with an accessible interface, making the pipeline from raw data to visual forecast something a user could actually follow end to end.',
      },
      {
        heading: 'Problem Statement',
        body: 'Stock markets produce large volumes of historical data that hide patterns difficult to spot manually. The project explores whether predictive models can help surface those patterns and present them in a way that is easier to interpret than raw price tables.',
      },
      {
        heading: 'Objectives',
        body: 'The project aims to (1) ingest and preprocess historical stock data, (2) train predictive models using both statistical and deep-learning approaches, (3) visualize historical trends alongside predicted values, and (4) present results through a clean web interface.',
      },
      {
        heading: 'Architecture and Workflow',
        body: 'The system follows a data-pipeline architecture: a data ingestion and preprocessing stage feeds model training, whose outputs are served to a frontend for visualization. Python handles the data and modeling layer, while React renders the interactive views. The separation keeps the modeling concerns decoupled from presentation.',
      },
      {
        heading: 'Frontend and Backend Responsibilities',
        body: 'The frontend (built with React and HTML) focuses on rendering charts, historical data, and predicted values in an approachable layout. The backend handles data loading, preprocessing, model training, and serving predictions. Keeping prediction logic on the backend allows the frontend to stay responsive.',
      },
      {
        heading: 'LSTM and ARIMA Approach',
        body: 'Two complementary approaches are used. ARIMA, a statistical time-series method, provides a baseline rooted in autoregressive structure. LSTM (Long Short-Term Memory) networks capture longer-range sequential dependencies in the data. Comparing both approaches gives insight into where each is more useful.',
      },
      {
        heading: 'Key Features',
        body: 'Historical stock-price exploration, visual representation of market trends, stock prediction using LSTM and ARIMA, interactive charts and a data-focused interface, and frontend-backend integration. Predictions are model outputs and not guaranteed future prices or financial advice.',
      },
      {
        heading: 'My Role and Contributions',
        body: 'I worked on both the data/modeling layer and the frontend integration — implementing the prediction pipeline in Python and building the visualization interface to present results clearly.',
      },
      {
        heading: 'Challenges and Lessons Learned',
        body: 'Time-series data is noisy and non-stationary, which makes preprocessing and model selection genuinely hard. The project reinforced the importance of careful data preparation, realistic expectations about prediction accuracy, and clear communication that predictions are estimates — not guarantees of future performance.',
      },
    ],
    links: [
      // { label: 'Repository', url: '[ADD VERIFIED REPOSITORY URL]', type: 'placeholder' },
      // { label: 'Live Demo', url: '[ADD VERIFIED DEMO URL]', type: 'placeholder' },
    ],
  },
  {
    id: 'whatnext-vision-motors',
    slug: 'whatnext-vision-motors',
    title: 'WhatNext Vision Motors — Salesforce Mobility Management',
    shortTitle: 'WhatNext Vision Motors',
    category: 'Salesforce | CRM | Business Process Automation',
    filterTags: ['Salesforce'],
    tagline:
      'A Salesforce-based automotive business solution focused on customer registration, product management, order processing, inventory handling, and business workflow automation.',
    problem:
      'A mobility business needs a unified way to manage customers, products, orders, and inventory while preventing common errors like ordering out-of-stock items.',
    technologies: ['Apex', 'Lightning Web Components', 'Flows', 'Salesforce'],
    gradient: 'from-cyan-glow via-violet-glow to-magenta-glow',
    icon: 'Car',
    status: 'Salesforce Project',
    features: [
      'Customer registration',
      'Product setup and management',
      'Order placement',
      'Inventory and stock-status management',
      'Prevention of orders for unavailable products',
      'Scheduled bulk stock-status updates',
      'Nearest-dealer lookup based on customer address',
      'Loyalty-related functionality and email notifications',
    ],
    sections: [
      {
        heading: 'Project Overview',
        body: 'WhatNext Vision Motors is a Salesforce-based automotive business solution that coordinates customer registration, product catalog management, order processing, inventory tracking, and business workflow automation into a single platform.',
      },
      {
        heading: 'Business Problem',
        body: 'A mobility business needs to coordinate customer registration, product catalog management, order placement, and inventory tracking — while preventing operational errors such as customers ordering products that are out of stock. Manual coordination across these areas is slow and error-prone.',
      },
      {
        heading: 'Salesforce Solution',
        body: 'The project uses Salesforce as the platform, leveraging custom objects, Apex logic, Lightning Web Components for the interface, and Flows for guided automation. This brings customer, product, order, and inventory data into one coordinated system.',
      },
      {
        heading: 'Data Model and Relationships',
        body: 'The data model relates customers to their orders, orders to products, and products to inventory records. These relationships let the system enforce rules such as blocking orders for out-of-stock items and surfacing dealer options based on a customer address.',
      },
      {
        heading: 'Automation and Business Rules',
        body: 'Implemented automation includes scheduled bulk stock-status updates and Flows that guide customer-facing workflows. Business rules prevent orders for out-of-stock products and support email notifications for relevant events.',
      },
      {
        heading: 'Order and Inventory Workflow',
        body: 'The workflow moves from customer registration, through product browsing, to order placement — with inventory checks preventing invalid orders. Scheduled updates keep stock statuses current in bulk, rather than requiring manual per-record updates.',
      },
      {
        heading: 'Key Features',
        body: 'Customer registration, product setup and management, order placement, inventory and stock-status management, prevention of orders for unavailable products, scheduled bulk stock-status updates, nearest-dealer lookup based on customer address, and loyalty-related functionality with email notifications.',
      },
      {
        heading: 'Customer Experience',
        body: 'Customers can register, browse products, place orders, and discover dealers based on their address. Loyalty-related functionality is included as part of the customer-facing workflow. Email notifications keep customers informed of relevant events.',
      },
      {
        heading: 'Technical Challenges and Learning Outcomes',
        body: 'The project required modeling real business rules in Salesforce — particularly enforcing inventory constraints and scheduling bulk operations. It deepened understanding of how Apex, Flows, and LWC work together to deliver a coordinated experience.',
      },
    ],
    links: [
      // { label: 'Repository', url: '[ADD VERIFIED REPOSITORY URL]', type: 'placeholder' },
      // { label: 'Live Demo', url: '[ADD VERIFIED DEMO URL]', type: 'placeholder' },
    ],
  },
  {
    id: 'college-management-system',
    slug: 'college-management-system',
    title: 'College Management System — Python Application',
    shortTitle: 'College Management System',
    category: 'Python | Backend Development | Database Management',
    filterTags: ['Python', 'Database'],
    tagline:
      'A college management application developed to organize academic or administrative information using Python and database concepts.',
    problem:
      'Academic institutions need a structured way to organize and manage college-related information, with reliable backend logic and database operations.',
    technologies: ['Python', 'MySQL', 'SQL'],
    gradient: 'from-magenta-glow via-violet-glow to-cyan-glow',
    icon: 'GraduationCap',
    status: 'Academic Project',
    features: [
      'CRUD operations on college-related data',
      'Input validation',
      'Database integration',
      'Backend application logic',
    ],
    sections: [
      {
        heading: 'Project Overview',
        body: 'A college management application developed to organize academic or administrative information using Python and database concepts. The focus was on building reliable backend logic and a coherent database layer.',
      },
      {
        heading: 'Problem Statement',
        body: 'College-related information needs a structured, organized system rather than scattered records. The project builds a Python application backed by a database to manage this information with proper CRUD workflows and validation.',
      },
      {
        heading: 'My Role and Responsibilities',
        body: 'My contribution was focused on backend development — implementing the Python application logic, designing the database schema, and ensuring data operations were correct and validated before persistence.',
      },
      {
        heading: 'Backend Implementation',
        body: 'My contribution emphasized backend logic and database-related work — implementing the Python layer that handles data operations, connects to the database, and enforces validation rules. The backend is the core that keeps the data consistent.',
      },
      {
        heading: 'Database Design',
        body: 'The database was designed to organize college information into related entities with appropriate relationships. Specific tables, columns, and relationships should be confirmed against the actual schema before detailed publication.',
      },
      {
        heading: 'Core Features',
        body: 'Core features include CRUD operations on college-related data and input validation. The specific feature set should be verified against the implemented modules before being listed in full detail.',
      },
      {
        heading: 'Challenges and Lessons Learned',
        body: 'Testing focused on validating that CRUD operations behaved correctly and that invalid input was properly rejected. The project reinforced the importance of schema design, input validation, and keeping backend logic clean and maintainable.',
      },
    ],
    links: [
      // { label: 'Repository', url: '[ADD VERIFIED REPOSITORY URL]', type: 'placeholder' },
      // { label: 'Live Demo', url: '[ADD VERIFIED DEMO URL]', type: 'placeholder' },
    ],
  },
];

export interface Certificate {
  // id: string;
  // title: string;
  // organization: string;
  // date: string;
  // category: string;
  description: string;
  // url: string;
  // type: 'image' | 'pdf' | 'placeholder';
  // featured?: boolean;
}

export const certificates: Certificate[] = [
  {
    // id: 'algouniversity-graphs',
    // title: 'Graph Theory Programming Camp',
    // organization: 'AlgoUniversity',
    // date: 'March 27, 2026',
    // category: 'Data Structures and Algorithms',
    description:
      'Coursera — 240 certifications',
    // url: '[ADD CERTIFICATE IMAGE OR PDF URL]',
    // type: 'placeholder',
    // featured: true,
  },
  {
  //   id: 'algouniversity-graphs',
  //   title: 'What is Data Science',
  //   organization: 'IBM',
  //   date: 'Oct 2025',
  //   category: 'Machine Learning',
  description:
    'Infosys Springboard — 57 certifications',
  //     'Understood what data science is and what data scientists do, and learnt about career paths in the field.The art of uncovering insights and trends in data has been around since ancient times. The ancient Egyptians used census data to increase efficiency in tax collection and accurately predicted the Nile Rivers flooding every year. Since then, people have continued to use data to derive insights and predict outcomes. ',
  //   // url: '[ADD CERTIFICATE IMAGE OR PDF URL',
  //   // type: 'https://coursera.org/share/16f0a6d47936f64dae653991308d1e1a',
  //   // featured: true,
  },
{
 
  description:
    'HCL GUVI — 30 certifications',
  },
  {
 
  description:
    'NPTEL — 6 certifications',
  },
  {
 
  description:
    'Spoken Tutorial, Unstop — 4 certifications',
  },
  {
 
  description:
    'Nasscom Foundation — 3 certifications',
  },
  {
 
  description:
    'Cisco, FutureSkills Prime — 2 certifications',
  },
  {
 
  description:
    'HackerRank, CodeChef, Great Learning, MathWorks, MyBharat — 1 certification',
  },
];

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  icon: string;
}

export const timeline: TimelineEntry[] = [
  {
    date: 'Completed',
    title: 'B.Tech — Computer Science and Data Science',
    description:
      'Studied at G. Pulla Reddy Engineering College, Kurnool — building foundations across programming, databases, and machine learning. CGPA: 8.63.',
    icon: 'GraduationCap',
  },
  {
    date: 'Completed',
    title: 'HSE - MPC',
    description:
      'Developed academic spanning for Maths, Physics, Chemistry at Sri Masters Junior College, Ananthapuramu. Percentange: 94.5%.',
    icon: 'Code2',
  },
  {
    date: 'Completed',
    title: 'SSC - State Board',
    description:
      'Learnt and applied all subjects at Sri Chaitany E/M HS, Ananthapuramu. Percentage: 100%.',
    icon: 'Compass',
  },
  // {
  //   date: 'March 2026',
  //   title: 'AlgoUniversity Graphs Programming Camp',
  //   description:
  //     'Completed the Graph Theory Programming Camp from AlgoUniversity under mentorship of Codeforces Master Manas Kumar Verma, solving 17 advanced graph problems.',
  //   icon: 'Award',
  // },
];

export interface ExperienceEntry {
  role: string;
  organization: string;
  date: string;
  responsibilities: string;
  technologies: string;
  outcomes: string;
  verified: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Junior Application Engineer — Long-Term Internship',
    organization: 'Redbot Innovations Pvt Ltd',
    date: 'December 8, 2025 – April 15, 2026',
    responsibilities:
      'I gained valuable exposure to emerging technologies and their practical applications in solving real-world problems.',
    technologies: 'Machine Vision, Computer Vision, Deep Learning',
    outcomes:
      'Gained practical exposure to applied computer vision and deep-learning workflows in an application engineering setting.',
    verified: true,
  },
  {
    role: 'Student Report Generation — Summer Internship',
    organization: 'Six Phrase',
    date: 'May 5, 2025 – July 6, 2025',
    responsibilities:
      'Worked on a student report generation project as Document Controller.',
    technologies: 'Python, Tkinter',
    outcomes:
      'Practiced building a Python desktop workflow for document-oriented application tasks.',
    verified: true,
  },
  {
    role: 'Salesforce Training — TCS Last Mile Program',
    organization: 'TCS Last Mile Program',
    date: 'July 25, 2025 – October 18, 2025',
    responsibilities:
      'Worked on WhatNext Vision Motors, a customized Salesforce Sales Cloud solution for customer interactions and vehicle order management.',
    technologies: 'Apex, Salesforce Sales Cloud',
    outcomes:
      'Strengthened Salesforce development and business-process automation skills in an automotive domain project.',
    verified: true,
  },
  {
    role: 'Django Placement Program',
    organization: 'Besant Technologies',
    date: 'July 4, 2025 – August 9, 2025',
    responsibilities:
      'Developed a basic web application demonstrating Django MVT architecture, backend logic, database integration, and interactive frontend forms.',
    technologies: 'Python, Django',
    outcomes:
      'Built practical understanding of full-stack web application structure and database-backed workflows.',
    verified: true,
  },
];

export interface CodingProfile {
  platform: string;
  url: string;
  icon: string;
  available: boolean;
}

export const codingProfiles: CodingProfile[] = [
  { platform: 'GitHub', url: 'https://github.com/BandiGayathriBhargavi', icon: 'Github', available: true },
  { platform: 'CodeChef', url: 'https://www.codechef.com/users/gayathri_59', icon: 'Hash', available: true },
  { platform: 'HackerRank', url: 'https://www.hackerrank.com/profile/229x1a3204', icon: 'Terminal', available: true },
  { platform: 'HCL GUVI', url: 'https://www.guvi.in/229x1a320489177', icon: 'Code2', available: true },
  // { platform: 'Codeforces', url: '[ADD CODEFORCES URL]', icon: 'Trophy', available: false },
  // { platform: 'LeetCode', url: '[ADD LEETCODE URL]', icon: 'Code2', available: false },
];

export const techStackHero = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'SQL', icon: 'sql' },
  { name: 'React', icon: 'react' },
  { name: 'AI/ML', icon: 'ml' },
  { name: 'Salesforce', icon: 'crm' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

export const projectFilters = [
  'All Projects',
  // 'Python',
  // 'Machine Learning',
  // 'Web Development',
  // 'Salesforce',
  // 'Database',
];
