export const articleState = {
    articles : [],
}
export const articleReducer = (state,action) =>{
    switch (action.type) {
        case "addArticle":
            return  {
                ...state,
                articles: action.payload
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