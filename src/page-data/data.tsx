import { DataDto } from "../models/dataDto";
import { ProjectDto } from "../models/projectDto";

export const data: DataDto = {
  markdownRemark: {
    frontmatter: {
      title: "Home",
      projects: [
        {
          id: 1,
          title: "Karst Stone Paper",
          tagline: "What matters today shapes tomorrow.",
          website: "https://www.karststonepaper.com",
          attributes: [
            "BST  Brand Strategy",
            "CRD  Creative Direction",
            "TOV  Tone of Voice",
            "DES  Website Design",
            "DEV  Custom HTML/CSS/JS",
            "ECO  Shopify Integration",
            "MOT  Motion Design",
          ],
          media: [
            {
              imageSource: null,
              imageMobileSource: null,
              videoSource:
                "https://player.vimeo.com/external/452432775.hd.mp4?s=66675bf1d0acd5d9465d58124c66b806ba27b640&profile_id=174",
            },
          ],
        },
        {
          id: 2,
          title: "Fluff Casual Cosmetics",
          tagline: "The future of beauty is more than makeup.",
          website: "https://www.itsallfluff.com",
          attributes: [
            "BUS  Business Strategy",
            "BST  Brand Strategy",
            "CRD  Creative Direction",
            "PRD  Product Design ",
            "DES  Website Design",
            "DEV  Custom HTML/CSS/JS",
            "ECO  Shopify Integration",
            "ART  Art Direction",
            "MOT  Motion Design",
            "ILL  3D Illustration",
            "CON  Content Strategy",
          ],
          media: [
            {
              imageSource: "../uploads/fluff-desktop.jpg",
              imageMobileSource: "../uploads/fluff-mobile.jpg",
              videoSource: null,
            },
          ],
        },
        {
          id: 3,
          title: "Flip",
          tagline: "Turn your day around.",
          website: null,
          attributes: [
            "BST  Brand Strategy",
            "CRD  Creative Direction",
            "TOV  Tone of Voice ",
            "DES  Website Design",
            "APP  App Development",
            "ILL  Illustration",
            "MOT  Motion Design",
          ],
          media: [
            {
              imageSource: "../uploads/flip-desktop.jpg",
              imageMobileSource: "../uploads/flip-mobile.jpg",
              videoSource: null,
            },
          ],
        },
        {
          id: 4,
          title: "Apostrophe",
          tagline: "A brand agency that doesn’t do pictures.",
          website: null,
          attributes: [
            "CRD  Creative Direction",
            "DES  Website Design",
            "DEV  Custom HTML/CSS/JS",
            "MOT  Motion Design",
          ],
          media: [
            {
              imageSource: "../uploads/apostrophe-desktop.jpg",
              imageMobileSource: "../uploads/apostrophe-mobile.jpg",
              videoSource: null,
            },
          ],
        },
        {
          id: 5,
          title: "Bread Beauty Supply",
          tagline: "Do you. Whoever that is.",
          website: "https://www.breadbeautysupply.com",
          attributes: [
            "BST  Brand Strategy",
            "CRD  Creative Direction",
            "DES  Website Design",
            "DEV  Custom HTML/CSS/JS",
            "ECO  Shopify Integration",
            "MOT  Motion Design",
            "ILL  3D Illustration",
          ],
          media: [
            {
              imageSource: null,
              imageMobileSource: null,
              videoSource:
                "https://player.vimeo.com/external/452482307.hd.mp4?s=b187397e6a877fd71ca10a4cbdfc4cfbd380b2fc&profile_id=174",
            },
          ],
        },
        {
          id: 6,
          title: "Abrand",
          tagline: null,
          website: null,
          attributes: [
            "BST  Brand Strategy",
            "CRD  Creative Direction",
            "TOV  Tone of Voice ",
            "MOT  Motion Design",
          ],
          media: [
            {
              imageSource: null,
              imageMobileSource: null,
              videoSource:
                "https://player.vimeo.com/external/452433455.hd.mp4?s=dbf802fc05e045d0e214e50eb95d7a4d56984fcf&profile_id=174",
            },
          ],
        },
        {
          id: 7,
          title: "Payphone",
          tagline: null,
          website: null,
          attributes: [
            "BST  Brand Strategy",
            "CRD  Creative Direction",
            "TOV  Tone of Voice",
            "MOT  Motion Design",
            "ILL  2D Illustration",
          ],
          media: [
            {
              imageSource: "../uploads/payphone-desktop.jpg",
              imageMobileSource: "../uploads/payphone-mobile.jpg",
              videoSource: null,
            },
          ],
        },
      ],
      clients: [
        {
          id: 1,
          title: "Pepsico",
          logo: "../uploads/clients/pepsico.svg",
        },
        {
          id: 2,
          title: "Polaroid",
          logo: "../uploads/clients/polaroid.svg",
        },
        {
          id: 3,
          title: "Abrand Jeans",
          logo: "../uploads/clients/abrand-jeans.svg",
        },
        {
          id: 4,
          title: "Karst Stone Paper",
          logo: "../uploads/clients/karst-stone-paper.svg",
        },
        {
          id: 5,
          title: "CMC Markets",
          logo: "../uploads/clients/cmc-markets.svg",
        },
        {
          id: 6,
          title: "Brewbike",
          logo: "../uploads/clients/brewbike.svg",
        },
        {
          id: 7,
          title: "Hereafter",
          logo: "../uploads/clients/hereafter.svg",
        },
        {
          id: 8,
          title: "DIRTT",
          logo: "../uploads/clients/dirtt.svg",
        },
        {
          id: 9,
          title: "Frank Darling",
          logo: "../uploads/clients/frank-darling.svg",
        },
        {
          id: 10,
          title: "Fluff Casual Cosmetics",
          logo: "../uploads/clients/fluff-casual-cosmetics.svg",
        },
        {
          id: 11,
          title: "Nopeet",
          logo: "../uploads/clients/nopeet.svg",
        },
        {
          id: 12,
          title: "Denada",
          logo: "../uploads/clients/denada.svg",
        },
        {
          id: 13,
          title: "OEG Australia",
          logo: "../uploads/clients/oeg-australia.svg",
        },
        {
          id: 14,
          title: "Mindset Health",
          logo: "../uploads/clients/mindset-health.svg",
        },
        {
          id: 15,
          title: "Relish Works",
          logo: "../uploads/clients/relish-works.svg",
        },
        {
          id: 16,
          title: "Tileyard London",
          logo: "../uploads/clients/tileyard-london.svg",
        },
      ],
      seoDescription: null,
      seoKeywords: null,
    },
  },
};
