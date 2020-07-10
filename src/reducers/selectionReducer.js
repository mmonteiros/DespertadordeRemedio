export default  (state = null, actions) => {
    switch (actions.type) {
        case 'select_medicine':
            console.log(actions);
            return actions.payload;
        default:
            return state;
    }
}