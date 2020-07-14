import { MED_CLEAN, MED_DELETE, MED_SAVE, MED_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    id : null,
    Name: '',
    ContainerAmount: '',
    ContainerUnit: '',
    ExpirationDate: '',
    InitialDate: '',
    InitialHour: '',
    Frequency: '',
    DurationOfTreatmentType: '',
    DurationOfTreatmentNum: '',
    DosageQuantity: '',
    DosageUnit: '',
    Instructions: '',
    Obs: '',
    Complete: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MED_CLEAN:
      return INITIAL_STATE;

    case MED_DELETE:
      return INITIAL_STATE;

    case MED_SAVE:
      return INITIAL_STATE;

    case MED_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    default:
      return state;
  }
};
