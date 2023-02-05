//Platform image import
import enterprise from "../../assets/images/logo-enterprise-search-32-color.svg";
import observability from "../../assets/images/logo-observability-32-color.svg";
import security from "../../assets/images/logo-security-32-color.svg";
import elastic from "../../assets/images/logo-cloud-32-color.svg";
import stack from "../../assets/images/logo-stack-32-color.svg";

// Customers Image import
import jaguar from '../../assets/images/logo-nav-dropdown-48x48-jaguar.png'
import emirates from '../../assets/images/logo-nav-dropdown-48x48-emirates-nbd.png'
import zurich from '../../assets/images/logo-nav-dropdown-48x48-zurich.png'

// Resources Image import
import document from '../../assets/images/icon-blog-pencil-32-color.svg'
import demand from '../../assets/images/icon-training-on-demand-32-color.svg'
import award from '../../assets/images/icon-certificate-award-32-color.svg'

// Platform Data
export const Links = [
  {
    name: "Platform",
    submenu: true,
    sublinks: [
      {
        // Head: ["ELASTIC CLOUD"],
        sublink: [
          {
            heading: "Maximize value and optimize your experience",
            des: "Deploy everything Elastic has to offer across any cloud, in minutes.",
            learn: "Learn more",
            additional: "ADDITIONAL RESOURCES",
            pricing: "View pricing",
            downloads: "Free trial and downloads",
            integrations: "View all integrations",
            link: "/maximize",
          },
        ],
      },

      {
        // Head: "USE ELASTIC FOR",
        sublink: [
          {
            img: enterprise,
            heading: "Enterprise Search",
            des: "Search and discovery experiences",
            link: "/digitalMarketingService",
          },
          {
            img: observability,
            heading: "Observability",
            des: "Unified logs, metrics, and traces",
            link: "/digitalMarketingService",
          },
          {
            img: security,
            heading: "Security",
            des: "SIEM, endpoint, cloud XDR",
            link: "/digitalMarketingService",
          },
          {
            img: elastic,
            heading: "Elastic Cloud",
            des: "Deploy and scale in any cloud",
            link: "/digitalMarketingService",
          },
          {
            img: stack,
            heading: "Elastic (ELK) Stack",
            des: "Elasticsearch, Kibana, and integrations",
            link: "/digitalMarketingService",
          },
        ],
      },

      {
        // Head: "WHAT'S NEW",
        sublink: [
          {
            heading: "Elastic 8.6 released",
            des: "See the latest enhancements",
            link: "/digitalMarketingService",
          },
          {
            heading: "Upgrade the Elastic Stack",
            des: "Expert tips when upgrading",
            link: "/digitalMarketingService",
          },
          {
            heading: "Documentation",
            des: "Read latest product guides",
            link: "/digitalMarketingService",
          },
          {
            heading: "ElasticON Global 2023",
            des: "Register now for free",
            link: "/digitalMarketingService",
          },
          {
            heading: "We're hiring",
            des: "Join a global, distributed team",
            link: "/digitalMarketingService",
          },
        ],
      },
    ],
  },
];

// useCases Data
export const useCaseData = [
  {
    name: "useCase",
    submenu: true,
    sublinks: [
      // By Topic
      {
        sublink: [
          {
            heading: "Power of Elastic",
            link: "/maximize",
          },
          {
            heading: "Improving digital customer experiences",
            link: "/maximize",
          },
          {
            heading: "Evolving the DevOps lifecycle ",
            link: "/maximize",
          },
          {
            heading: "Security without limits",
            link: "/maximize",
          },
        ],
      },

      // By Industry
      {
        sublink: [
          {
            heading: "Public Sector",
            link: "/digitalMarketingService",
          },
          {
            heading: "Financial Services",
            link: "/digitalMarketingService",
          },
          {
            heading: "Telecommunications",
            link: "/digitalMarketingService",
          },
          {
            heading: "Healthcare",
            link: "/digitalMarketingService",
          },
          {
            heading: "Technology",
            link: "/digitalMarketingService",
          },
          {
            heading: "Retail and Ecommerce",
            link: "/digitalMarketingService",
          },
          {
            heading: "Media and Entertainment",
            link: "/digitalMarketingService",
          },
          {
            heading: "Manufacturing and Automotive",
            link: "/digitalMarketingService",
          },
        ],
      },
    ],
  },
];

// Customers Data
export const CustomersData = [
  {
    name: "Customers",
    submenu: true,
    sublinks: [
      {
        sublink: [
          {
            heading: "Enterprise Search",
            des: "Search applications of all kinds",
            link: "/maximize",
          },
          {
            heading: "Observability",
            des: "Logs, metrics, APM, and more",
            link: "/maximize",
          },
          {
            heading: "Security",
            des: "SIEM, endpoint, cloud, and XDR",
            link: "/maximize",
          },
        ],
      },

      {
        // Head: "WHAT'S NEW",
        sublink: [
          {
            heading: "Getting started",
            des: "Guidance to get started",
            link: "/digitalMarketingService",
          },
          {
            heading: "Support",
            des: "Get help and customer resources",
            link: "/digitalMarketingService",
          },
          {
            heading: "Contact us",
            des: "Have questions? Get in touch",
            link: "/digitalMarketingService",
          },
        ],
      },
      {
        // Head: "USE ELASTIC FOR",
        sublink: [
          {
            img: jaguar,
            heading: "Jaguar Land Rover",
            des: "Vehicle intelligence",
            link: "/digitalMarketingService",
          },
          {
            img: emirates,
            heading: "Emirates NBD",
            des: "Secured billions in assets",
            link: "/digitalMarketingService",
          },
          {
            img: zurich,
            heading: "Zurich Insurance",
            des: "Increased customer trust",
            link: "/digitalMarketingService",
          },
        ],
      },
    ],
  },
];

// Resources Data
export const ResourcesData = [
  {
    name: "Customers",
    submenu: true,
    sublinks: [
      {
        sublink: [
          {
            heading: "Documentation",
            des: "Product guides",
            link: "/maximize",
          },
          {
            heading: "Blogs",
            des: "Tech topics, innovation, news",
            link: "/maximize",
          },
          {
            heading: "Training",
            des: "Skill building and certification",
            link: "/maximize",
          },
        ],
      },

      {
        // Head: "WHAT'S NEW",
        sublink: [
          {
            heading: "Events",
            des: "ElasticON, meetups, virtual events",
            link: "/digitalMarketingService",
          },
          {
            heading: "Community",
            des: "Groups, forums, code",
            link: "/digitalMarketingService",
          },
          {
            heading: "Consulting",
            des: "Outcome-based services",
            link: "/digitalMarketingService",
          },
        ],
      },
      {
        // Head: "USE ELASTIC FOR",
        sublink: [
          {
            img: document,
            heading:
              "Driving quantified success with Elastic Enterprise Search",
            link: "/digitalMarketingService",
          },
          {
            img: demand,
            heading: "Get started with Elasticsearch",
            link: "/digitalMarketingService",
          },
          {
            img: award,
            heading: "Observability Engineer training",
            link: "/digitalMarketingService",
          },
        ],
      },
    ],
  },
];
