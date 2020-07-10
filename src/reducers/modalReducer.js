const INITIAL_STATE = {
    modalIsOpen: false
}

export default  (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case 'OPEN_MODAL':
            return { modalIsOpen: actions.payload };
        case 'CLOSE_MODAL':
            return { modalIsOpen: actions.payload };
        default:
            return state;
    }
}