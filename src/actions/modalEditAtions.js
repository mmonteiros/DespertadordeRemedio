export const openModalEdit = () => {
    return {
        type: 'OPEN_MODAL_EDIT',
        payload: true
    }
}

export const closeModalEdit = () => {
    return {
        type: 'CLOSE_MODAL_EDIT',
        payload: false
    }
}
