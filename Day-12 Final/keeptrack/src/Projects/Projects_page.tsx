// // import React, { Fragment, useEffect } from 'react';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppState } from '../State';
// // import { MOCK_PROJECTS } from './MockProject';
// import ProjectList from './ProjectList';
// import { loadProjects } from './state/projectActions';
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { ProjectState } from './state/projectTypes';
// import { useProjects } from './ProjectHooks';
// //  import { Project } from './Project';
// // import { projectAPI } from './ProjectAPI';

// const ProjectsPage = () => {
//     // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
//     // const [projects, setProjects] = useState<Project[]>([]);
//     // const [loading, setLoading] = useState(false);
//     // const [error, setError] = useState<string | undefined>(undefined);
//     const loading = useSelector(
//         (appState: AppState) => appState.projectState.loading
//     );
//     const projects = useSelector(
//         (appState: AppState) => appState.projectState.projects
//     );
//     const error = useSelector(
//         (appState: AppState) => appState.projectState.error
//     );
//     const currentPage = useSelector(
//         (appState: AppState) => appState.projectState.page
//     );
//     const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

//     const {
//         projects,
//         loading,
//         error,
//         setCurrentPage,
//         saveProject,
//         saving,
//         savingError,
//     } = useProjects();

//     // const saveProject = (project: Project) => {
//     // console.log('Saving project: ', project);
//     // let updatedProjects = projects.map((p: Project) => {
//     //     return p.id === project.id ? project : p;
//     // });
//     // setProjects(updatedProjects);
//     // projectAPI
//     //     .put(project)
//     //     .then((updatedProject) => {
//     //         let updatedProjects = projects.map((p: Project) => {
//     //             return p.id === project.id ? new Project(updatedProject) : p;
//     //         });
//     //         setProjects(updatedProjects);
//     //     })
//     //     .catch((e) => {
//     //         if (e instanceof Error) {
//     //             setError(e.message);
//     //         }
//     //     });
//     // };
//     // useEffect(() => {
//     //     async function loadProjects() {
//     //         setLoading(true);
//     //         try {
//     //             const data = await projectAPI.get(1);
//     //             setError('');
//     //             setProjects(data);
//     //         }
//     //         catch (e) {
//     //             if (e instanceof Error) {
//     //                 setError(e.message);
//     //             }
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     }
//     //     loadProjects();
//     // }, []);

//     useEffect(() => {
//         dispatch(loadProjects(1));
//     }, [dispatch]);

//     const handleMoreClick = () => {
//         dispatch(loadProjects(currentPage + 1));
//     };

//     return (
//         <>
//             <h1>Projects</h1>
//             {saving && <span className="toast">Saving...</span>}
//             {(error || savingError) && (
//                 <div className="row">
//                     <div className="card large error">
//                         <section>
//                             <p>
//                                 <span className="icon-alert inverse "></span>
//                                 {error} {savingError}
//                             </p>
//                         </section>
//                     </div>
//                 </div>
//             )}

//             {/* <ProjectList onSave={saveProject} projects={projects} /> */}
//             <ProjectList projects={projects} />

//             {loading && (
//                 <div className="center-page">
//                     <span className="spinner primary"></span>
//                     <p>Loading...</p>
//                 </div>
//             )}
//         </>

//     );

// }

// export default ProjectsPage;
import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectHooks';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    page,
    setPage,
    isPreviousData,
  } = useProjects();

  return (
    <>
      <h1>Projects</h1>

      {data ? (
        <>
          {isFetching && <span className="toast">Refreshing...</span>}
          <ProjectList projects={data} />
          <div className="row">
            <div className="col-sm-4">Current page: {page + 1}</div>
            <div className="col-sm-4">
              <div className="button-group right">
                <button
                  className="button "
                  onClick={() => setPage((oldPage) => oldPage - 1)}
                  disabled={page === 0}
                >
                  Previous
                </button>
                <button
                  className="button"
                  onClick={() => {
                    if (!isPreviousData) {
                      setPage((oldPage) => oldPage + 1);
                    }
                  }}
                  disabled={data.length != 10}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : isLoading ? (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      ) : isError && error instanceof Error ? (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error.message}
              </p>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectsPage;

// return (
//   <>
//     <h1>Header</h1>
//     {data ? (
//       <p>data</p>
//     ) : isLoading ? (
//       <p>Loading...</p>
//     ) : isError ? (
//       <p>Error Message</p>
//     ) : null}
//   </>
// );