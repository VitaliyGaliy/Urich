const initialState = { isAuthenticated: false }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            localStorage.setItem("isAuthenticated", true);
            return {
                isAuthenticated: true
            }
        case 'LOG_OUT':
            localStorage.removeItem('isAuthenticated');
            return {
                isAuthenticated: false
            }
        default:
            return state
    }
}