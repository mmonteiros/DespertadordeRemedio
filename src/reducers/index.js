import { combineReducers } from 'redux'
import MedicineReducer from './medicineReducer'
import SelectionReducer from './selectionReducer'
import ModalReducer from './modalReducer'

export default combineReducers({
    modal: ModalReducer,
    medicines: MedicineReducer,
    selectedMedicineId: SelectionReducer
})