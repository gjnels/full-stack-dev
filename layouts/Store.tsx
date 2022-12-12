import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import {
  companyLogo,
  companyName,
  description,
  footerLinkLists,
  getCopyrightText,
  headerLinks,
} from "../lib/constants";

export interface StoreLayoutProps {
  title?: String;
}

const StoreLayout = ({
  children,
  title,
}: PropsWithChildren<StoreLayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <header>
          <Link href="/">
            <Image
              src={companyLogo}
              alt={`${companyName} logo`}
              width={40}
              height={40}
            />{" "}
            {companyName}
          </Link>

          <nav>
            {headerLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <Link href="/">
            <Image
              src={companyLogo}
              alt={`${companyName} logo`}
              width={40}
              height={40}
            />{" "}
            {companyName}
          </Link>

          <p>{description}</p>

          {footerLinkLists.map((group) => (
            <ul key={group.groupLabel}>
              <h3>{group.groupLabel}</h3>
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          ))}

          <span>{getCopyrightText()}</span>
        </footer>
      </div>
    </>
  );
};

export default StoreLayout;
