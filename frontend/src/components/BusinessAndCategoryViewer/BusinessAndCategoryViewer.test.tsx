import { render, screen, fireEvent } from "@testing-library/react";
import { BusinessAndCategoryViewer } from "./BusinessAndCategoryViewer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BUSINESS_QUERY_KEY } from "src/api/queryKeys";

jest.mock("../Categories/Categories", () => ({
  Categories: () => <div data-testid="categories" />,
}));

jest.mock("../GridBusinessCard/GridBusinessCard", () => ({
  GridBusinessCard: ({ filteredItems }: { filteredItems: unknown }) => (
    <div data-testid="grid-business-card">{JSON.stringify(filteredItems)}</div>
  ),
}));

jest.mock("./BusinessAndCategoryViewer.module.scss", () => ({
  searchCategoryContainer: "searchCategoryContainer",
  categoryContainer: "categoryContainer",
  paginationContainer: "paginationContainer",
}));

const queryClient = new QueryClient();

const businessesMock = [
  { id: 1, category: "Food", name: "Restaurant 1" },
  { id: 2, category: "Tech", name: "Tech Shop 1" },
  { id: 3, category: "Food", name: "Restaurant 2" },
];

describe("BusinessAndCategoryViewer", () => {
  beforeEach(() => {
    queryClient.setQueryData([BUSINESS_QUERY_KEY], businessesMock);
  });

  const renderComponent = (category = "") =>
    render(
      <QueryClientProvider client={queryClient}>
        <BusinessAndCategoryViewer category={category} />
      </QueryClientProvider>,
    );

  test("renders correctly with initial state", () => {
    renderComponent();

    expect(screen.getByTestId("categories")).toBeInTheDocument();
    expect(screen.getByTestId("grid-business-card")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("filters businesses by category", () => {
    renderComponent("Food");

    const filteredItems = screen.getByTestId("grid-business-card").textContent;
    expect(filteredItems).toContain("Restaurant 1");
    expect(filteredItems).toContain("Restaurant 2");
    expect(filteredItems).not.toContain("Tech Shop 1");
  });

  test("paginates through businesses", () => {
    renderComponent();

    const pagination = screen.getByRole("button", { name: /2/i });
    fireEvent.click(pagination);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("resets page when category changes", () => {
    const { rerender } = renderComponent("Food");

    rerender(
      <QueryClientProvider client={queryClient}>
        <BusinessAndCategoryViewer category="Tech" />
      </QueryClientProvider>,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
