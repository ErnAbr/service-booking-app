import { render, screen } from "@testing-library/react";
import { BusinessAndCategoryViewer } from "./BusinessAndCategoryViewer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BUSINESS_QUERY_KEY } from "../../api/queryKeys";
import { IBusiness } from "@/types/business";

jest.mock("../Categories/Categories", () => ({
  Categories: () => <div data-testid="categories" />,
}));

jest.mock("../GridBusinessCard/GridBusinessCard", () => ({
  GridBusinessCard: ({ filteredItems }: { filteredItems: unknown }) => (
    <div data-testid="grid-business-card">{JSON.stringify(filteredItems)}</div>
  ),
}));

const queryClient = new QueryClient();

const businessesMock: IBusiness[] = [
  {
    id: "1",
    category: "Food",
    email: "email@email.lt",
    companyName: "Restaurant 1",
    description: "A nice place to eat.",
    address: "123 Main St",
    representative: "John Doe",
    photoUrl: "http://example.com/photo1.jpg",
  },
  {
    id: "2",
    category: "Tech",
    email: "email@email.lt",
    companyName: "Tech Shop 1",
    description: "Latest tech gadgets.",
    address: "456 Tech St",
    representative: "Jane Smith",
    photoUrl: "http://example.com/photo2.jpg",
  },
  {
    id: "3",
    category: "Food",
    email: "email@email.lt",
    companyName: "Restaurant 2",
    description: "Another nice place to eat.",
    address: "789 Main St",
    representative: "Mike Johnson",
    photoUrl: "http://example.com/photo3.jpg",
  },
];

describe("BusinessAndCategoryViewer", () => {
  beforeEach(() => {
    queryClient.setQueryData([BUSINESS_QUERY_KEY], businessesMock);
  });

  const renderComponent = (category = "") =>
    render(
      <QueryClientProvider client={queryClient}>
        <BusinessAndCategoryViewer
          searchText=""
          setSearchCount={() => {}}
          searchCategoryFilter={category}
          businesses={businessesMock}
        />
      </QueryClientProvider>,
    );

  test("renders correctly with initial state", () => {
    renderComponent();

    expect(screen.getByTestId("categories")).toBeInTheDocument();
    expect(screen.getByTestId("grid-business-card")).toBeInTheDocument();
  });

  test("filters businesses by category", () => {
    renderComponent("Food");

    const filteredItems = screen.getByTestId("grid-business-card").textContent;
    expect(filteredItems).toContain("Restaurant 1");
    expect(filteredItems).toContain("Restaurant 2");
    expect(filteredItems).not.toContain("Tech Shop 1");
  });

  test("resets page when category changes", () => {
    const { rerender } = renderComponent("Food");

    rerender(
      <QueryClientProvider client={queryClient}>
        <BusinessAndCategoryViewer
          searchText=""
          setSearchCount={() => {}}
          searchCategoryFilter="Tech"
          businesses={businessesMock}
        />
      </QueryClientProvider>,
    );

    expect(screen.getByTestId("grid-business-card")).toBeInTheDocument();
  });
});
