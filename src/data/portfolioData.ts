import type {
  PersonalInfo,
  MetricSnapshot,
  SkillCategory,
  ProjectData,
  EducationItem,
  CertificationItem,
  WorkflowStep,
  ProfileLink,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Arunkumar R",
  role: "Data Engineer & Analyst",
  subtitles: [
    "Data Engineer",
    "Senior Data Analyst",
    "BI & Analytics Professional",
    "Database Architect",
    "IT Professional"
  ],
  location: "Velachery, Chennai, Tamil Nadu",
  phone: "+91 6381641778",
  email: "arunkumarrasik@gmail.com",
  linkedin: "https://www.linkedin.com/in/arunkumar-r-06aa1143b",
  photoUrl: "/arunkumar_suit.jpg",
  summary:
    "Results-driven IT Professional and Data Specialist with a proven track record of designing data pipelines, optimizing complex SQL queries, and building scalable business intelligence solutions. Experienced in transforming enterprise data into actionable insights using Python, Power BI, and modern IT infrastructure to drive strategic business decisions.",
  availableForWork: true,
  statusBadge: "IT Professional | Data Engineering & Analytics",
};

export const analyticsSnapshots: MetricSnapshot[] = [
  {
    label: "Data Pipelines & ETL",
    value: "Optimized",
    subtext: "Automated enterprise data workflows",
    iconName: "Database",
  },
  {
    label: "Enterprise Solutions",
    value: "Delivered",
    subtext: "Scalable BI & IT reporting dashboards",
    iconName: "LayoutDashboard",
  },
  {
    label: "Core IT Stack",
    value: "SQL & Python",
    subtext: "Advanced querying, scripting & automation",
    iconName: "Terminal",
  },
  {
    label: "Professional Focus",
    value: "Data Architecture",
    subtext: "Designing robust systems for decision making",
    iconName: "Activity",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "SQL & Relational Databases",
    iconName: "Database",
    color: "#38bdf8",
    skills: [
      { name: "MySQL", level: "Intermediate", description: "Relational database structure, table creation, and indexing." },
      { name: "SQL Queries & Joins", level: "Intermediate", description: "INNER, LEFT, RIGHT, and FULL OUTER joins across multiple relational tables." },
      { name: "Subqueries & CTEs", level: "Intermediate", description: "Nested queries and common table expressions for complex aggregations." },
      { name: "Aggregate Functions", level: "Intermediate", description: "SUM, COUNT, AVG, MIN, MAX for analytical summaries." },
      { name: "GROUP BY & HAVING", level: "Intermediate", description: "Multi-level grouping and post-aggregation filtering." },
      { name: "CASE Statements", level: "Intermediate", description: "Conditional logic for custom categorization and KPI tiering." },
    ],
  },
  {
    title: "Python Data Analytics",
    iconName: "Terminal",
    color: "#818cf8",
    skills: [
      { name: "Python", level: "Intermediate", description: "Core syntax, data structures, list comprehensions, and scripting." },
      { name: "Pandas", level: "Intermediate", description: "DataFrames, missing value imputation, duplicate removal, merges & pivots." },
      { name: "NumPy", level: "Intermediate", description: "Array operations, vectorization, and mathematical computations." },
      { name: "Matplotlib & Seaborn", level: "Intermediate", description: "Histograms, bar charts, heatmaps, box plots, and line charts." },
      { name: "Plotly Express", level: "Working Knowledge", description: "Interactive visualizations and zoomable drill-down plots." },
      { name: "OOPs & Web Scraping", level: "Working Knowledge", description: "Object-oriented programming concepts and automated web data extraction." },
    ],
  },
  {
    title: "Business Intelligence & Dashboards",
    iconName: "LayoutDashboard",
    color: "#f59e0b",
    skills: [
      { name: "Power BI", level: "Intermediate", description: "Data modeling, star schema relationships, interactive report authoring." },
      { name: "DAX Measures", level: "Intermediate", description: "Calculated columns, CALCULATE, SUMX, RELATED, and time intelligence." },
      { name: "Slicers & Drillthroughs", level: "Intermediate", description: "Dynamic filtering, cross-highlighting, and interactive slicers." },
      { name: "Tableau", level: "Intermediate", description: "Worksheet creation, calculated fields, filters, and dynamic parameters." },
      { name: "Dashboard Design", level: "Intermediate", description: "User-centric UI layout, KPI card tracking, and clear executive reporting." },
    ],
  },
  {
    title: "Microsoft Excel & Spreadsheet Analytics",
    iconName: "FileSpreadsheet",
    color: "#10b981",
    skills: [
      { name: "Data Cleaning & Sorting", level: "Intermediate", description: "Text formatting, TRIM, deduplication, error handling, and structured tables." },
      { name: "Lookup Functions (VLOOKUP)", level: "Intermediate", description: "Cross-table data matching, index references, and lookup lookups." },
      { name: "Pivot Tables & Pivot Charts", level: "Intermediate", description: "Rapid summarization, multi-field groupings, and dynamic charting." },
      { name: "Excel Dashboards", level: "Intermediate", description: "Interactive executive summary sheets with slicers and KPI scorecards." },
    ],
  },
  {
    title: "Statistical & Analytical Methods",
    iconName: "Activity",
    color: "#ec4899",
    skills: [
      { name: "Exploratory Data Analysis (EDA)", level: "Intermediate", description: "Univariate, bivariate, and multivariate analysis to detect trends and anomalies." },
      { name: "Descriptive Statistics", level: "Intermediate", description: "Mean, median, mode, variance, standard deviation, interquartile range." },
      { name: "Probability & Hypothesis Testing", level: "Working Knowledge", description: "Probability distributions, significance testing, and statistical validation." },
      { name: "KPI & Business Reporting", level: "Intermediate", description: "Tracking key performance indicators, revenue drivers, and operational metrics." },
      { name: "Data Aggregation & Formatting", level: "Intermediate", description: "Standardizing heterogeneous raw records into clean analytical pipelines." },
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "retail-sales-eda",
    title: "Retail Sales Exploratory Data Analysis (EDA)",
    category: "Exploratory Data Analysis & Python Analytics",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    datasetInfo: "Retail Sales transactional dataset containing ~9,800 records across Orders, Products, Customers, Shipping, and Financial metrics.",
    businessProblem:
      "A retail enterprise required deep insight into sales drivers, product profitability, customer segments, and shipping efficacy to minimize operational bottlenecks and optimize revenue generation across multiple geographic regions.",
    process: [
      "Data Cleaning & Standardization: Handled missing entries, removed redundant duplicates, and standardized date, numeric, and categorical columns across 9,800 records.",
      "Multi-dimensional Categorical Analysis: Evaluated revenue distribution across Category (Technology, Furniture, Office Supplies), Customer Segments (Consumer, Corporate, Home Office), and Shipping Modes.",
      "Top-Performer Identification: Programmatically identified the highest grossing products, top revenue customers, and leading geographical clusters (cities and states).",
      "Time-Series & Trend Analysis: Aggregated transactional timestamps to analyze month-over-month and year-over-year revenue patterns, uncovering seasonal spikes.",
      "Visualization & Reporting: Built distribution histograms, regional bar charts, and trend line charts to communicate actionable findings to decision-makers.",
    ],
    keyFeatures: [
      "End-to-end data pipeline in Python & Pandas",
      "Analysis across ~9,800 transactional entries",
      "Multi-axis aggregation by Region, Category, and Segment",
      "Time-series seasonal analysis highlighting peak retail periods",
      "Visual chart suite using Matplotlib and Seaborn",
    ],
    keyInsights: [
      "Technology and Furniture generated the highest revenue share per transaction, while Office Supplies drove the highest order volume.",
      "Identified distinct seasonal sales surges in Q4 (holiday shopping period) across multiple consecutive years.",
      "Standard Class was the most frequently chosen Ship Mode, offering the steadiest revenue throughput.",
      "Top 10% of high-value customers contributed a disproportionately large percentage of total retail sales.",
    ],
    visualizations: [
      {
        title: "Sales by Category",
        type: "Bar Chart",
        description: "Comparative revenue breakdown across Technology, Furniture, and Office Supplies.",
      },
      {
        title: "Regional Performance Breakdown",
        type: "Segmented Bar Chart",
        description: "Sales distribution across West, East, Central, and South regions.",
      },
      {
        title: "Monthly Sales Seasonality",
        type: "Time-Series Line Chart",
        description: "Monthly historical trends showcasing end-of-year peak purchasing velocity.",
      },
      {
        title: "Ship Mode Volume & Revenue",
        type: "Donut / Distribution Chart",
        description: "Distribution between Standard Class, Second Class, First Class, and Same Day.",
      },
    ],
    learningOutcomes: [
      "Mastered end-to-end exploratory data analysis workflows on real-world transactional data.",
      "Gained hands-on experience structuring messy raw data into tidy analytical DataFrames.",
      "Refined skills in translating statistical summaries into practical business recommendations.",
    ],
  },
];

// Factual representative data for the Retail Sales EDA Showcase
export const retailCategoryData = [
  { category: "Technology", sales: 836154, percentage: 36.4, profitRatio: "High", orders: 2840 },
  { category: "Furniture", sales: 741999, percentage: 32.3, profitRatio: "Moderate", orders: 3120 },
  { category: "Office Supplies", sales: 719047, percentage: 31.3, profitRatio: "Consistent", orders: 3840 },
];

export const retailRegionData = [
  { region: "West", sales: 725457, orders: 3203, color: "#38bdf8" },
  { region: "East", sales: 678781, orders: 2848, color: "#818cf8" },
  { region: "Central", sales: 501239, orders: 2323, color: "#34d399" },
  { region: "South", sales: 391723, orders: 1626, color: "#f59e0b" },
];

export const retailSegmentData = [
  { segment: "Consumer", value: 51.5, revenue: 1161401, color: "#38bdf8" },
  { segment: "Corporate", value: 30.2, revenue: 681215, color: "#818cf8" },
  { segment: "Home Office", value: 18.3, revenue: 412584, color: "#34d399" },
];

export const retailMonthlyTrend = [
  { month: "Jan", sales: 94924 },
  { month: "Feb", sales: 61952 },
  { month: "Mar", sales: 118320 },
  { month: "Apr", sales: 114418 },
  { month: "May", sales: 119960 },
  { month: "Jun", sales: 152032 },
  { month: "Jul", sales: 147233 },
  { month: "Aug", sales: 159044 },
  { month: "Sep", sales: 238050 },
  { month: "Oct", sales: 200324 },
  { month: "Nov", sales: 268480 },
  { month: "Dec", sales: 280120 },
];

export const educationList: EducationItem[] = [
  {
    degree: "M.Sc. in Mathematics",
    institution: "Rajah Serfoji Govt. College",
    location: "Thanjavur, Tamil Nadu",
    duration: "2023 – 2025",
    score: "70%",
    focus: [
      "Probability Theory & Statistics",
      "Mathematical Modeling",
      "Numerical Analysis & Optimization",
      "Advanced Quantitative Methods",
    ],
    highlights: [
      "Deepened rigor in statistical reasoning and hypothesis formulation.",
      "Applied mathematical concepts to algorithmic and data analytical structures.",
    ],
  },
  {
    degree: "B.Sc. in Mathematics",
    institution: "Rajah Serfoji Govt. College",
    location: "Thanjavur, Tamil Nadu",
    duration: "2020 – 2023",
    score: "78.53%",
    focus: [
      "Calculus & Differential Equations",
      "Linear Algebra & Matrix Operations",
      "Discrete Mathematics",
      "Statistical Methods",
    ],
    highlights: [
      "Graduated with Distinction (78.53%).",
      "Built the core analytical and quantitative foundation essential for data analysis.",
    ],
  },
];

export const certificationsList: CertificationItem[] = [
  {
    title: "Course Completion Certificate in Data Analytics",
    issuer: "Login360",
    year: "2026",
    skillsCovered: [
      "SQL (Joins, Subqueries, Aggregate Functions)",
      "Python Data Analysis (Pandas, NumPy, Matplotlib)",
      "Power BI (Data Modeling, DAX, Interactive Reports)",
      "Tableau (Calculated Fields, Dashboard Development)",
      "Advanced Microsoft Excel & Pivot Tables",
      "Exploratory Data Analysis (EDA) & KPI Reporting",
    ],
    credentialStatus: "Course Completed",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Problem Framing & Objective",
    description: "Understand business questions, define target KPIs, and identify the required data dimensions.",
    tools: ["Business Context", "KPI Framework", "Documentation"],
    techniques: ["Stakeholder Requirements", "Metric Scoping", "Hypothesis Formulation"],
  },
  {
    step: 2,
    title: "Data Extraction & Querying",
    description: "Retrieve raw structured data from relational databases using optimized SQL queries and joins.",
    tools: ["MySQL", "SQL Workbench"],
    techniques: ["Multi-table Joins", "Aggregations", "Conditional Subqueries", "HAVING & Filtering"],
  },
  {
    step: 3,
    title: "Data Cleaning & Preparation",
    description: "Inspect datasets for anomalies, missing values, duplicates, and inconsistent data formats.",
    tools: ["Python (Pandas)", "Excel"],
    techniques: ["Null Imputation", "Deduplication", "Type Casting", "String Standardization"],
  },
  {
    step: 4,
    title: "Exploratory Data Analysis (EDA)",
    description: "Uncover patterns, correlations, distributions, and outliers through statistical summarization.",
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    techniques: ["Descriptive Statistics", "Segment Profiling", "Time-Series Breakdown"],
  },
  {
    step: 5,
    title: "Interactive Visualization & Dashboards",
    description: "Transform analytical findings into interactive visual dashboards for stakeholders.",
    tools: ["Power BI", "Tableau", "Plotly Express"],
    techniques: ["DAX Measures", "Interactive Slicers", "KPI Scorecards", "Visual Hierarchy"],
  },
  {
    step: 6,
    title: "Insights & Actionable Reporting",
    description: "Deliver clear data stories and executive summaries to support evidence-based business decisions.",
    tools: ["Excel Reports", "Executive Summaries"],
    techniques: ["Trend Highlighting", "Revenue Drivers", "Actionable Takeaways"],
  },
];

export const profileLinks: ProfileLink[] = [
  {
    platform: "LinkedIn",
    handle: "arunkumar-r-06aa1143b",
    url: "https://www.linkedin.com/in/arunkumar-r-06aa1143b",
    description: "Connect on LinkedIn for professional updates, analytics discussions, and career opportunities.",
    iconName: "Linkedin",
  },
  {
    platform: "Email",
    handle: "arunkumarrasik@gmail.com",
    url: "mailto:arunkumarrasik@gmail.com",
    description: "Direct email contact for job inquiries, interview invitations, and project collaboration.",
    iconName: "Mail",
  },
  {
    platform: "Phone",
    handle: "+91 6381641778",
    url: "tel:+916381641778",
    description: "Direct phone contact for immediate recruitment and interview schedules.",
    iconName: "Phone",
  },
];

export const languagesKnown = [
  { name: "Tamil", proficiency: "Native" },
  { name: "English", proficiency: "Professional Proficiency" },
];

export const sqlQueryExamples = [
  {
    title: "1. Revenue & Order Volume by Product Category",
    description: "Multi-level aggregation grouping sales and total orders to compare product categories.",
    sql: `SELECT 
    category,
    COUNT(order_id) AS total_orders,
    ROUND(SUM(sales), 2) AS total_revenue,
    ROUND(AVG(sales), 2) AS avg_order_value
FROM retail_sales
GROUP BY category
ORDER BY total_revenue DESC;`,
    output: [
      { category: "Technology", total_orders: 2840, total_revenue: "$836,154.03", avg_order_value: "$294.42" },
      { category: "Furniture", total_orders: 3120, total_revenue: "$741,999.80", avg_order_value: "$237.82" },
      { category: "Office Supplies", total_orders: 3840, total_revenue: "$719,047.03", avg_order_value: "$187.25" },
    ]
  },
  {
    title: "2. Top 5 Performing Cities by Sales Volume",
    description: "Identifying geographic revenue hot spots using SUM and GROUP BY with LIMIT.",
    sql: `SELECT 
    city,
    state,
    COUNT(DISTINCT customer_id) AS unique_customers,
    ROUND(SUM(sales), 2) AS city_sales
FROM retail_sales
GROUP BY city, state
HAVING SUM(sales) > 50000
ORDER BY city_sales DESC
LIMIT 5;`,
    output: [
      { city: "New York City", state: "New York", unique_customers: 342, city_sales: "$256,368.16" },
      { city: "Los Angeles", state: "California", unique_customers: 285, city_sales: "$175,851.34" },
      { city: "Seattle", state: "Washington", unique_customers: 148, city_sales: "$119,540.74" },
      { city: "San Francisco", state: "California", unique_customers: 193, city_sales: "$112,669.09" },
      { city: "Philadelphia", state: "Pennsylvania", unique_customers: 120, city_sales: "$109,077.01" },
    ]
  },
  {
    title: "3. Customer Segment Classification with CASE",
    description: "Using conditional CASE logic to tier customer order values for targeted campaign analytics.",
    sql: `SELECT 
    order_id,
    customer_name,
    sales,
    CASE 
        WHEN sales >= 1000 THEN 'High Value Tier'
        WHEN sales >= 250 THEN 'Mid Value Tier'
        ELSE 'Standard Value Tier'
    END AS customer_value_segment
FROM retail_sales
WHERE order_date >= '2023-01-01'
LIMIT 5;`,
    output: [
      { order_id: "CA-2023-152156", customer_name: "Claire Gute", sales: "$731.94", customer_value_segment: "Mid Value Tier" },
      { order_id: "CA-2023-138688", customer_name: "Darrin Van Huff", sales: "$1,467.50", customer_value_segment: "High Value Tier" },
      { order_id: "US-2023-108966", customer_name: "Sean O'Donnell", sales: "$95.80", customer_value_segment: "Standard Value Tier" },
      { order_id: "CA-2023-115812", customer_name: "Brosina Hoffman", sales: "$48.86", customer_value_segment: "Standard Value Tier" },
      { order_id: "CA-2023-114412", customer_name: "Andrew Allen", sales: "$1,706.18", customer_value_segment: "High Value Tier" },
    ]
  }
];
