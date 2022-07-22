import React,{ useState, Fragment } from 'react';
import { MOCK_PROJECTS } from './MockProject';
import ProjectList from './ProjectList';
import { Project } from './Project';

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        // console.log('Saving project: ', project);
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
    };
    return (
        <Fragment>
            <h1>Projects</h1>
            {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
            {/* <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} /> */}
            <ProjectList onSave={saveProject} projects={projects} />
        </Fragment>

    );

}

export default ProjectsPage;