export const createProject = (project) =>{
    return(dispatch, getState, {getfirebase, getFirestore})=>{
        //make asyncrounos call to database
        dispatch({type: 'CREATE_PROJECT', project})
    }
}