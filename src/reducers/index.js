import { combineReducers } from 'redux'
import MedicineReducer from './MedicineReducer'
import MedReducer from './MedReducer'
import MedsReducer from './MedsReducer'
import SelectionReducer from './selectionReducer'
import ModalReducer from './modalReducer'

export default combineReducers({
    modal: ModalReducer,
    medicines: MedicineReducer,
    med: MedReducer,
    meds: MedsReducer,
    selectedMedicineId: SelectionReducer
})