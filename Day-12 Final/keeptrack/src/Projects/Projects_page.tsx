import React, { useState, Fragment, useEffect } from 'react';
// import { MOCK_PROJECTS } from './MockProject';
import ProjectList from './ProjectList';
import { Project } from './Project';
import { projectAPI } from './ProjectAPI';

const ProjectsPage = () => {
    // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const saveProject = (project: Project) => {
        // console.log('Saving project: ', project);
        // let updatedProjects = projects.map((p: Project) => {
        //     return p.id === project.id ? project : p;
        // });
        // setProjects(updatedProjects);
        projectAPI
            .put(project)
            .then((updatedProject) => {
                let updatedProjects = projects.map((p: Project) => {
                    return p.id === project.id ? new Project(updatedProject) : p;
                });
                setProjects(updatedProjects);
            })
            .catch((e) => {
                if (e instanceof Error) {
                    setError(e.message);
                }
            });
    };
    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectAPI.get(1);
                setError('');
                setProjects(data);
            }
            catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, []);
    return (
        <Fragment>
            <h1>Projects</h1>
            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}

            <ProjectList onSave={saveProject} projects={projects} />
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
        </Fragment>

    );

}

export default ProjectsPage;