import { combineReducers } from 'redux'
import MedicineReducer from './MedicineReducer'
import MedReducer from './MedReducer'
import MedsReducer from './MedsReducer'
import SelectionReducer from './SelectionReducer'
import ModalReducer from './ModalReducer'

export default combineReducers({
    modal: ModalReducer,
    medicines: MedicineReducer,
    med: MedReducer,
    meds: MedsReducer,
    selectedMedicineId: SelectionReducer
})