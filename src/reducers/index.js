import { combineReducers } from 'redux'
import MedicineReducer from './MedicineReducer'

export default combineReducers({
    medicines: MedicineReducer
})