const initState = {
    projects: [
        {id:'1', title:'first project', content:'I am the first project'},
        {id:'2', title:'second project', content:'I am the second project'},
        {id:'3', title:'third project', content:'I am the third project'}
]
};

const ProjectReducer = (state= initState, action) =>{
    switch (action.type){
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
    }

    return state
}

export default ProjectReducer