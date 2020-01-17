import React from 'react'

const ProjectDetails = (props) =>{
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi quasi debitis maiores, facere neque inventore ea suscipit aliquid ad consectetur delectus quidem asperiores officia voluptate tenetur praesentium similique eius!</p> 
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by hisoka</div>
                    <div>1st January 9:36 am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails