const gameMiddleware = ({ dispatch, getState }) => next => {
    return action => {
        next(action);
        switch (action.type) {
            default:
            break;
        }
    };
};

export default gameMiddleware;