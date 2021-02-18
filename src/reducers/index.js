import { combineReducers } from 'redux'
import MedicineReducer from './MedicineReducer'
import MedReducer from './MedReducer'
import MedsReducer from './MedsReducer'
import SelectionReducer from './selectionReducer'
import ModalReducer from './modalReducer'
import ModalEditReducer from './modalEditReducer'

export default combineReducers({
    modal: ModalReducer,
    modalEdit: ModalEditReducer,
    medicines: MedicineReducer,
    med: MedReducer,
    meds: MedsReducer,
    selectedMedicineId: SelectionReducer
})