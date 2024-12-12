import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
    const { id } = useParams();
    return (
        <div>ProjectDetail.Project id is {id}</div>
    )
}

export default ProjectDetail