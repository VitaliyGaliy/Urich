export const login = (l) => dispatch => {

    dispatch({
        type: 'LOG_IN',
        payload: l
    })
}

export const logout = (l) => dispatch => {
    console.log('logout');

    dispatch({
        type: 'LOG_OUT',
        payload: l
    })
}