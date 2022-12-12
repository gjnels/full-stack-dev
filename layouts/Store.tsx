import { PropsWithChildren } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  companyLogo,
  companyName,
  description,
  footerLinkLists,
  getCopyrightText,
  headerLinks,
} from "../lib/constants";

export interface StoreLayoutProps {
  title?: string;
}

const Logo = () => (
  <Image alt={`${companyName} logo`} src={companyLogo} width={40} height={40} />
);

const StoreLayout = ({
  title = "",
  children = null,
}: PropsWithChildren<StoreLayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <Link href="/">
                <Logo />
              </Link>

              <nav className="hidden space-x-8 sm:block">
                {headerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-medium transition hover:text-red-500 hover:underline hover:underline-offset-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12 pt-12 pb-16 lg:flex-row">
              <div className="space-y-2 lg:max-w-sm lg:flex-1">
                <Link
                  href="/"
                  className="flex flex-col items-center gap-2 lg:flex-row"
                >
                  <Logo />
                  <span className="text-xl font-semibold tracking-wide text-red-600">
                    {companyName}
                  </span>
                </Link>

                <p className="mx-auto max-w-[210px] text-center font-light lg:max-w-none lg:text-left">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left lg:flex-1">
                {footerLinkLists.map((linkList) => (
                  <ul key={linkList.groupLabel} className="space-y-6">
                    <h3 className="relative text-xl font-semibold after:absolute after:left-1/2 after:mt-2 after:block after:h-px after:w-8 after:-translate-x-1/2 after:bg-black after:content-[''] md:after:static md:after:translate-x-0">
                      {linkList.groupLabel}
                    </h3>
                    <li className="flex flex-col space-y-2">
                      {linkList.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="transition hover:text-red-500 hover:underline hover:underline-offset-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="border-t py-6">
              <p className="text-center text-sm text-gray-500">
                {getCopyrightText()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StoreLayout;
