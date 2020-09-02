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
                imageUrl, 
                Color,
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
                Obs,
                Complete
                } = doc.data();
          meds.push({ id: doc.id, 
                Name, 
                imageUrl,
                Color,
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
                Obs,
                Complete
                });
        });

        dispatch({
          type: MEDS_FETCH_SUCCESS,
          payload: { meds, unsubscribe }
        });
      });
  };
};

export const medsDelete = ({ item }) => {
  return (dispatch) => {
    Alert.alert(
       'Você excluirá o medicamento?',
       item,
       [
         { text: 'Sim ,tenho certeza', onPress: () => onPressMedsDelete(dispatch, item) },
         { text: 'Cancelar', style: 'cancel' }
       ],
       { cancelable: true }
     );
  };
};


// Private

const onPressMedsDelete = (dispatch, id) => {
  firebaseConfig.deleteMed(id)
    .then(() => {
      dispatch({ type: MEDS_DELETE });
    })
    .catch(() => {
      Alert.alert(
        'app.attention',
        'app.deleteFailureMessage',
        [{ text: 'app.ok' }],
        { cancelable: true }
      );
    });
};
