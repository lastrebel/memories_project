const initialState = { posts: [], currentPostId: undefined};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
        case 'FETCH_ALL':
            return {...state, posts: action.payload};
        case 'CREATE':
            return {...state, posts: [...state.posts, action.payload]};
        case 'SET_CURRENT_POST_ID':
            return {...state, currentPostId: action.payload};
        default:
            return state;
    }
}

export default postsReducer;