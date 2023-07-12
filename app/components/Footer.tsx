import React from "react";
import Image from "next/image";
import Link from "next/link";

export const footerLinks = [
  {
    title: "For developers",
    links: [
      "Go Pro!",
      "Explore development work",
      "Development blog",
      "Code podcast",
      "Open-source projects",
      "Refer a Friend",
      "Code of conduct",
    ],
  },
  {
    title: "Hire developers",
    links: [
      "Post a job opening",
      "Post a freelance project",
      "Search for developers",
    ],
  },
  {
    title: "Brands",
    links: ["Advertise with us"],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Support",
      "Media kit",
      "Testimonials",
      "API",
      "Terms of service",
      "Privacy policy",
      "Cookie policy",
    ],
  },
  {
    title: "Directories",
    links: [
      "Development jobs",
      "Developers for hire",
      "Freelance developers for hire",
      "Tags",
      "Places",
    ],
  },
  {
    title: "Development assets",
    links: [
      "Code Marketplace",
      "GitHub Marketplace",
      "NPM Registry",
      "Packagephobia",
    ],
  },
  {
    title: "Development Resources",
    links: [
      "Freelancing",
      "Development Hiring",
      "Development Portfolio",
      "Development Education",
      "Creative Process",
      "Development Industry Trends",
    ],
  },
];

type ColumnsProps = {
  title: string;
  links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumnsProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="./" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer
      className="flexStart
    footer
    "
    >
      <div className="flex flex-col gap-12 w-full">
        <div className="items-start flex-col">
          <h3 className="cursive">Flexify</h3>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexify is a worlds's leading community for creatives to
            share,grow, and get hired
          </p>

          <div className="flex flex-wrap gap-12">
            <FooterColumn
              title={footerLinks[0].title}
              links={footerLinks[0].links}
            />
            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn
                title={footerLinks[1].title}
                links={footerLinks[1].links}
              />
              <FooterColumn
                title={footerLinks[2].title}
                links={footerLinks[2].links}
              />
            </div>
            <FooterColumn
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            />
            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn
                title={footerLinks[4].title}
                links={footerLinks[4].links}
              />
              <FooterColumn
                title={footerLinks[5].title}
                links={footerLinks[5].links}
              />
            </div>
            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
          </div>
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@2023 Flexify.All rights reserved</p>
        <p>
          <span className="text-gray font-semiBold ">10,214 </span>projects
          submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
