import Experience from "../components/Experience.svelte";

export const experiencesDB = [
    {
        page: {
            title: "SAFAC",
            coordinates: {
                top: 150,
                left: 600,
                width: 750,
                height: 650,
                zIndex: 0,
            },
            visible: false,
            component: Experience,
        },
        fullTitle: "SAF Ammunnition Command",
        logo: "/src/public/assets/logos/gsabLogo.webp",
        duration: "Nov 2021 - June 2023",
        department: "IT Team",
        role: "Full Stack Engineer",
        responsibilities: [
            "Develop web applications to increase productivity of day to day operations",
            "System setups & maintenance across LAN",
        ],
        contributions: [
            "Redesign & rebuild UI/UX & databases for legacy systems",
            "Migrated legacy infrastructure from PHP to NodeJS",
            "Introduced and implemented ODM & relational data",
            "Advocate maintainability standards and best practices within team",
        ],
        technology: [""],
        projects: [
            {
                title: "MLPS",
                fullTitle: "Mobile Lightning Protection System",
                purpose: [
                    "Ensure operators have 24hrs of guided practice with trainers and lesser than 2yrs since last operation",
                    "Manage operating days, approve and reject operations, shift manpower from one depot to another",
                ],
            },
            {
                title: "POS",
                fullTitle: "Ammunition Point of Sale",
                purpose: [
                    "Allows packing team to CRUD (create, read, update & delete) stock for tracking of current inventory",
                    "CRUD vouchers for external units to draw ammunition",
                ],
            },
            {
                title: "EHR",
                fullTitle: "Electronic Human Resources",
                purpose: [
                    "Book-in and book-out system for depot personnels when entering depot",
                    "Printing of current day & forecasting of future statuses",
                    "Analyse statuses of individual or group of depot personnels over a certain period of time",
                ],
            },
        ],
    },
    {
        page: {
            title: "Accenture",
            coordinates: {
                top: 200,
                left: 700,
                width: 750,
                height: 650,
                zIndex: 0,
            },
            visible: false,
            component: Experience,
        },
        fullTitle: "Accenture",
        logo: "/src/public/assets/logos/accenture.webp",
        duration: "Jul 2023 - Dec 2023",
        department: "Health and Public Services Integration",
        role: "Business Analyst Intern",
        responsibilities: [
            "Develop automations to reduce manual hours with tickets",
            "Bug fixing for Workday platform",
        ],
        contributions: [
            "Improved automated ticketing process on ServiceNow, reducing manual work of consultants by 30% and reduced ticket completion hours from weeks to days",
            "Developed interactive Service Level Agreement (SLA) dashboards for team lead, ensuring team members adhere to 98% SLA standards",
        ],
        technology: [
            "Excel Visual Basic",
            "ServiceNow ITMS",
            "Workday Extend",
            "JavaScript",
        ],
        projects: [
            {
                title: "Watchlist",
                fullTitle: "Watchlist",
                purpose: [
                    "Built a feature to add external personnels into a watchlist, ensuring 100% accountability",
                    "Customized and automated watchlist according to stakeholders, removing any chance of data entry error",
                ],
            },
        ],
    },
    {
        page: {
            title: "GovTech",
            coordinates: {
                top: 250,
                left: 800,
                width: 750,
                height: 450,
                zIndex: 0,
            },
            visible: false,
            component: Experience,
        },
        fullTitle: "GovTech",
        logo: "/src/public/assets/logos/govtech.webp",
        duration: "Jan 2024 - Mar 2024",
        department: "Strategic Partnership and Engagement",
        role: "Business Analyst Intern",
        responsibilities: [
            "Engage strategic partners to build lasting beneficial projects",
            "Propose ideas and concepts shared during partnership engagements",
        ],
        contributions: [
            "Designed and proposed a Salesforce CRM to manage strategic partner engagements, reducing pending workflow by 80%",
            "Automated meeting prep processes, cutting admin time by 5hours/week and improving tracking accuracy",
        ],
        technology: [
            "Excel Visual Basic",
            "ServiceNow ITMS",
            "Workday Extend",
            "JavaScript",
        ],
    },
    {
        page: {
            title: "AWM",
            coordinates: {
                top: 300,
                left: 900,
                width: 750,
                height: 500,
                zIndex: 0,
            },
            visible: false,
            component: Experience,
        },
        fullTitle: "Ascendance Wealth Management",
        logo: "/src/public/assets/logos/AWMGroup.webp",
        duration: "Apr 2024 - Present",
        department: "Estate Planning",
        role: "Financial Consultant",
        responsibilities: [
            "Engage strategic partners to build lasting beneficial projects",
            "Propose ideas and concepts shared during partnership engagements",
        ],
        contributions: [
            "Drove outbound sales for estate planning solution, advising SME owners and families on succession strategies and closing 50 client cases worth over $200k in AUM",
            "Built long term client relationships through needs analysis and tailored financial planning, strengthening trust and ensuring sustainable business growth",
        ],
        technology: [
            "Excel Visual Basic",
            "ServiceNow ITMS",
            "Workday Extend",
            "JavaScript",
        ],
    },
];
