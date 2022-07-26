import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../State';
// import { MOCK_PROJECTS } from './MockProject';
import ProjectList from './ProjectList';
import { loadProjects } from './state/projectActions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';
 import { Project } from './Project';
// import { projectAPI } from './ProjectAPI';

const ProjectsPage = () => {
    // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    // const [projects, setProjects] = useState<Project[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | undefined>(undefined);
    const loading = useSelector(
        (appState: AppState) => appState.projectState.loading
    );
    const projects = useSelector(
        (appState: AppState) => appState.projectState.projects
    );
    const error = useSelector(
        (appState: AppState) => appState.projectState.error
    );
    const currentPage = useSelector(
        (appState: AppState) => appState.projectState.page
    );
    const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

    // const saveProject = (project: Project) => {
        // console.log('Saving project: ', project);
        // let updatedProjects = projects.map((p: Project) => {
        //     return p.id === project.id ? project : p;
        // });
        // setProjects(updatedProjects);
        // projectAPI
        //     .put(project)
        //     .then((updatedProject) => {
        //         let updatedProjects = projects.map((p: Project) => {
        //             return p.id === project.id ? new Project(updatedProject) : p;
        //         });
        //         setProjects(updatedProjects);
        //     })
        //     .catch((e) => {
        //         if (e instanceof Error) {
        //             setError(e.message);
        //         }
        //     });
    // };
    // useEffect(() => {
    //     async function loadProjects() {
    //         setLoading(true);
    //         try {
    //             const data = await projectAPI.get(1);
    //             setError('');
    //             setProjects(data);
    //         }
    //         catch (e) {
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     loadProjects();
    // }, []);

    useEffect(() => {
        dispatch(loadProjects(1));
    }, [dispatch]);

    const handleMoreClick = () => {
            dispatch(loadProjects(currentPage + 1));
          };

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

            {/* <ProjectList onSave={saveProject} projects={projects} /> */}
            <ProjectList projects={projects}  />
            
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