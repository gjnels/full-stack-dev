export const companyLogo =
  "https://img.icons8.com/color/96/null/interior-accesories.png";

export const companyName = "Comfy";

export const description = "Quality and affordable design furniture.";

export const headerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products",
  },
  {
    label: "Black Friday",
    href: "/black-friday",
  },
];

export const footerLinkLists = [
  {
    groupLabel: "Categories",
    links: [
      {
        label: "Dining tables",
        href: "/categories/dining-tables",
      },
      {
        label: "Desks",
        href: "/categories/desks",
      },
      {
        label: "Office chairs",
        href: "/categories/office-chairs",
      },
      {
        label: "Beds",
        href: "/categories/beds",
      },
      {
        label: "Nighstands",
        href: "/categories/nighstands",
      },
      {
        label: "Sofas & couches",
        href: "/categories/sofas-and-couches",
      },
    ],
  },
  {
    groupLabel: "About us",
    links: [
      {
        label: `About ${companyName}`,
        href: "/about",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Careers",
        href: "/careers",
      },
    ],
  },
  {
    groupLabel: "Help",
    links: [
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Track orders",
        href: "/orders",
      },
      {
        label: "Contact us",
        href: "/contact",
      },
    ],
  },
];

export const getCopyrightText = () =>
  `© ${new Date().getFullYear()} Comfort, Inc. All rights reserved. Powered by The Modern Dev.`;
