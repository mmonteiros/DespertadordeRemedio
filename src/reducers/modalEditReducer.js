const INITIAL_STATE = {
    modalEditIsOpen: false
}

export default  (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case 'OPEN_MODAL_EDIT':
            return { modalEditIsOpen: actions.payload };
        case 'CLOSE_MODAL_EDIT':
            return { modalEditIsOpen: actions.payload };
        default:
            return state;
    }
}