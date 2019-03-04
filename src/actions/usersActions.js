//defined switch statement actions
export const GET_USERS = 'GET_USERS'
export const POST_USERS = 'POST_USERS'
export const PUT_USERS = 'PUT_USERS'
export const PATCH_USERS = 'PATCH_USERS'
export const DELETE_USERS = 'DELETE_USERS'

//defined actions
export const getUsers = () => { 
    return {
        type: 'GET_USERS',
        payload: [{ fname : 'Ron' }, { fname : 'Tsendayush' }, { fname: 'Noah' }]
    }
}

export const postUsers = () => { 
    return {
        type: 'POST_USERS',
        payload:  [{ fname : 'Ron1' }, { fname : 'Tsendayush1' }, { fname: 'Noah1' }]
    }
}

export const putUsers = () => { 
    return {
        type: 'PUT_USERS',
        payload: []
    }
}

export const patchUsers = () => { 
    return {
        type: 'PATCH_USERS',
        payload: []
    }
}

export const deleteUsers = () => { 
    return {
        type: 'DELETE_USERS',
        payload: []
    }
}