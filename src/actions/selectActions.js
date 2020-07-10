export const selectMedicine = (medicineId) => {
    return {
        type: 'select_medicine',
        payload: medicineId
    }
}