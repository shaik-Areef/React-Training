import { render, screen, } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Project } from "../Project";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import ProjectDetail from "../ProjectDetails";


describe("<ProjectDetails />", () => {
    let project: Project;

    const setup = () =>
        render(
            <MemoryRouter>
                <ProjectDetail project={project} />
            </MemoryRouter>
        );

    beforeEach(() => {
        project = new Project({
            id: 1,
            name: "Mission Impossible",
            description: "This is really difficult",
            budget: 100,
            isActive: false
        });
    });


    it("should initially render", () => {
        setup();
    });

    test('should display details', async () => {
        setup();
        screen.getByText(project.name);
        screen.getByText(project.description);
        screen.getByText("Inactive");
    });

    test('should display details  when isactive is true', () => {
        project.isActive = true;
        setup();
        screen.getByText("Active");
    });
});
