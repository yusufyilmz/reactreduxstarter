import * as actionTypes from 'constants/actionTypes'

export const fetchUsers = (id) => (dispatch, getState) => {
    let users = [{
        name : "ysuuf",
        company: "yusuf2",
        website: "yusuf3"
    }]
    dispatch(fetchUserFrom(users));
};


const fetchUserFrom = user => ({
    type: actionTypes.FETCH_USERS,
    user
})


