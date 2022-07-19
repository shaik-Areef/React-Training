import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {

    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        // console.log(project);
        setProjectBeingEdited(project);
    };

    const items = projects.map((Project) => (
        <div className='cols-sm' key={Project.id}>


            {/* <ProjectCard project={Project} onEdit={handleEdit}></ProjectCard>
            <ProjectForm></ProjectForm> */}
            {Project === projectBeingEdited ? (
                <ProjectForm />
            ) : (
                <ProjectCard project={Project} onEdit={handleEdit} />
            )}
        </div>
    ))


    return <div className="row">{items}</div>;
}

export default ProjectList;