import { render, screen, within } from "@testing-library/react";
import StoreLayout from "../../layouts/Store";
import {
  companyLogo,
  companyName,
  description,
  footerLinkLists,
  getCopyrightText,
  headerLinks,
} from "../../lib/constants";

describe("layouts/Store", () => {
  it("should render its children", () => {
    // Render component with children
    const title = "Can you see me?";
    render(
      <StoreLayout>
        <h1>{title}</h1>
      </StoreLayout>
    );

    // Check the result has children
    const mainEl = screen.getByRole("main");
    const headingEl = within(mainEl).getByRole("heading", {
      level: 1,
    });
    expect(headingEl).toHaveTextContent(title);
  });

  it("should render a header with some navigation links", () => {
    // Render the component
    render(<StoreLayout />);

    // Assert a header node is present
    const headerEl = screen.getByRole("banner");
    const navEl = within(headerEl).getByRole("navigation");
    const links = within(navEl).getAllByRole<HTMLLinkElement>("link");

    // Assert the right number of links are present
    expect(links).toHaveLength(headerLinks.length);

    // Assert each link is correct
    headerLinks.forEach((link, i) => {
      const linkEl = links[i];
      expect(linkEl).toHaveProperty("href", window.location.origin + link.href);
      expect(linkEl).toHaveTextContent(link.label);
      expect(linkEl).toBeEnabled();
      expect(linkEl).toBeVisible();
    });
  });

  it("should render the logo within the header", () => {
    // Render the component
    render(<StoreLayout />);

    // Assert there is an image within the header
    const headerEl = screen.getByRole("banner");
    const imgEl = within(headerEl).getByRole("img");

    // Assert the image has the correct src
    expect(imgEl).toHaveProperty("src", companyLogo);
  });

  it("should render a footer with some navigation links", () => {
    // Render the component
    render(<StoreLayout />);

    // Assert there is a footer with navigation links
    const footerEl = screen.getByRole("contentinfo");
    const lists = within(footerEl).getAllByRole("list");
    const headings = within(footerEl).getAllByRole("heading", { level: 3 });

    // Assert the right number of links are present
    expect(lists).toHaveLength(footerLinkLists.length);

    // Assert each link is correct
    footerLinkLists.forEach((group, i) => {
      const headingEl = headings[i];
      expect(headingEl).toHaveTextContent(group.groupLabel);

      const links = within(lists[i]).getAllByRole<HTMLLinkElement>("link");
      group.links.forEach((link, i) => {
        const linkEl = links[i];
        expect(linkEl).toHaveProperty(
          "href",
          window.location.origin + link.href
        );
        expect(linkEl).toHaveTextContent(link.label);
        expect(linkEl).toBeEnabled();
        expect(linkEl).toBeVisible();
      });
    });
  });

  it("should render the logo and company info within the footer", () => {
    // 1. Render the component
    render(<StoreLayout />);

    // 2. Get the footer node
    const footerEl = screen.getByRole("contentinfo");
    // 3. Assert that the footer contain an image
    const imageEl = within(footerEl).getByRole<HTMLImageElement>("img");
    // 4. Retrieve the closest link ancestor
    const linkEl = imageEl.closest("a");

    // 5. Assert that the description text is present
    screen.getByText(description);

    // 6. Assert that the image element is visible and contains the correct attributes values
    expect(imageEl).toBeVisible();
    expect(imageEl.alt).toBe(`${companyName} logo`);
    expect(imageEl.src).toBe(companyLogo);

    // 7. Assert that the link element is correct
    expect(linkEl).toBeVisible();
    expect(linkEl).toBeEnabled();
    expect(linkEl).toHaveProperty("href", window.location.origin + "/");
    expect(linkEl).toHaveTextContent(companyName);
  });

  it("should render the copyright information with the footer", () => {
    render(<StoreLayout />);

    const footerEl = screen.getByRole("contentinfo");
    within(footerEl).getByText(getCopyrightText());
  });

  it("should dynamically set the page title via props", () => {
    const props = { title: "HomePage | Comfort" };
    render(<StoreLayout {...props} />);

    expect(document.title).toBe(props.title);
  });
});
