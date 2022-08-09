import { render, screen } from "@testing-library/react";
import TabProducts from "./Tabproducts";

describe("<Tabproducts />", () => {
    function renderComponent() {
        render(
           <TabProducts/>
        );
    }

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
});