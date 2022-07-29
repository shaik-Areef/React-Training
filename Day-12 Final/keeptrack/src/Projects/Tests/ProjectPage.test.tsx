import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../State";
import ProjectPage from "../ProjectPage";

describe("<ProjectsPage />", () => {
    function renderComponent() {
        const queryClient = new QueryClient()
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <QueryClientProvider client={queryClient}>
                        <ProjectPage />
                    </QueryClientProvider>
                </MemoryRouter>
            </Provider>
        );
    }

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

    test('should display loading', () => {
        renderComponent();
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });


});