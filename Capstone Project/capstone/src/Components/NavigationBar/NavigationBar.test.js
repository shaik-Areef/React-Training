import Navigationbar from "./Navigationbar";
import { render, screen } from "@testing-library/react";
import {  HashRouter as Router } from 'react-router-dom'

describe("<NavigationBar />", () => {
    function renderComponent() {
        render(
            <Router>
                <Navigationbar />
            </Router>
        );
    }

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
});