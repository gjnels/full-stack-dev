import { render, screen, within } from "@testing-library/react";
import HomePage from "../../pages";

describe("pages/Home", () => {
  it("should render a heading tag with a link", () => {
    // Render React component
    render(<HomePage />);

    // Component should have a level 1 heading
    const headingEl = screen.getByRole("heading", {
      level: 1,
      name: "Welcome to The Modern Dev",
    });

    // Heading should have a link
    const linkEl = within(headingEl).getByRole<HTMLLinkElement>("link");

    // Link should have correct href value
    const href = "https://themodern.dev";
    expect(linkEl.href).toMatch(new RegExp(`^${href}`));
  });
});
