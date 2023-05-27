export const userState = {
    users : null,
}
export const userReducer = (state,action) =>{
    switch (action.type) {
        case "fetchUserAndChangeState":
            return  {
                ...state,
                users: action.payload
            }
        case "loading":
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}