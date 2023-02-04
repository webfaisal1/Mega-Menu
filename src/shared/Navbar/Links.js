// image import
import enterprise from '../../assets/images/logo-enterprise-search-32-color.svg'
import observability from '../../assets/images/logo-observability-32-color.svg'
import security from '../../assets/images/logo-security-32-color.svg'
import elastic from '../../assets/images/logo-cloud-32-color.svg'
import stack from '../../assets/images/logo-stack-32-color.svg'
import cloud from '../../assets/images/logo-cloud-32-color (1).svg'

// Link
export const Links = [
  {
    name: "Platform",
    submenu: true,
    sublinks: [
      {
        Head: ["ELASTIC CLOUD"],
        sublink: [{ 
          name: "Maximize value and optimize your experience", 
          des: "Deploy everything Elastic has to offer across any cloud, in minutes.",
          learn: "Learn more",
          additional: "ADDITIONAL RESOURCES",
          pricing: "View pricing",
          downloads: "Free trial and downloads",
          integrations: "View all integrations",
          link: "/seoServices" 
        }],
      },


      {
        Head: "USE ELASTIC FOR",
        sublink: [
          {
            img: enterprise,
            heading: "Digital Marketing Service",
            des: "Search and discovery experiences",
            link: "/digitalMarketingService",
          },
          {
            img: observability,
            heading: "Digital Marketing Service",
            des: "Unified logs, metrics, and traces",
            link: "/digitalMarketingService",
          },
          {
            img: security,
            heading: "Digital Marketing Service",
            des: "SIEM, endpoint, cloud XDR",
            link: "/digitalMarketingService",
          },
          {
            img: elastic,
            heading: "Digital Marketing Service",
            des: "Deploy and scale in any cloud",
            link: "/digitalMarketingService",
          },
          {
            img: stack,
            heading: "Digital Marketing Service",
            des: "Elasticsearch, Kibana, and integrations",
            link: "/digitalMarketingService",
          },
        ],
      },


      {
        Head: "WHAT'S NEW",
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
