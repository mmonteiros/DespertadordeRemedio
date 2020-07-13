import { Alert } from 'react-native';
import firebaseConfig from '../firebase';
import { MEDS_DELETE, MEDS_FETCH, MEDS_FETCH_SUCCESS } from './types';

// Public

export const medsFetch = () => {
  return (dispatch) => {
    dispatch({ type: MEDS_FETCH });

    const unsubscribe = firebaseConfig.medsCollection()
      .onSnapshot((querySnapshot) => {
        const meds = [];

        querySnapshot.forEach((doc) => {
          const { 
                Name, 
                ContainerAmount,
                ContainerUnit,
                ExpirationDate,
                InitialDate,
                InitialHour,
                Frequency,
                DurationOfTreatmentType,
                DurationOfTreatmentNum,
                DosageQuantity,
                DosageUnit,
                Instructions,
                Obs
                } = doc.data();
          meds.push({ id: doc.id, 
                Name, 
                ContainerAmount,
                ContainerUnit,
                ExpirationDate,
                InitialDate,
                InitialHour,
                Frequency,
                DurationOfTreatmentType,
                DurationOfTreatmentNum,
                DosageQuantity,
                DosageUnit,
                Instructions,
                Obs });
        });

        dispatch({
          type: MEDS_FETCH_SUCCESS,
          payload: { meds, unsubscribe }
        });
      });
  };
};