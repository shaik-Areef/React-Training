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
        setProjectBeingEdited(project);
    };

    const cancelEditing = () => {
        setProjectBeingEdited({});
    };

    const items = projects.map((Project) => (
        <div className='cols-sm' key={Project.id}>
            {Project === projectBeingEdited ? (
                <ProjectForm project={Project} onCancel={cancelEditing} />
            ) : (
                <ProjectCard project={Project} onEdit={handleEdit} />
            )}
        </div>
    ))
    return <div className="row">{items}</div>;
}

export default ProjectList;