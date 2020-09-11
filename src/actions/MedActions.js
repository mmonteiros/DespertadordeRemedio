import FirebaseService from '../services/FirebaseService';
import { MEDS_DELETE, MEDS_FETCH, MEDS_FETCH_SUCCESS } from './types';

export const productClean = () => {
    return {
      type: PRODUCT_CLEAN
    };
};

export const productUpdate = ({ prop, value }) => {
    return {
      type: PRODUCT_UPDATE,
      payload: { prop, value }
    };
};

const productSave = (dispatch, { id = null, imageUrl, name, price, color, size }) => {
    let result;
  
    if (id === null) {
      result = FirebaseService.addProduct(imageUrl, name, price, color, size);
    } else {
      result = FirebaseService.setProduct(id, imageUrl, name, price, color, size);
    }
  
    result
      .then(() => {
        dispatch({ type: PRODUCT_SAVE });
      })
      .catch(() => {
        Alert.alert(
          'app.attention',
          'product.save.failureMessage',
          [{ text: 'app.ok' }],
          { cancelable: true }
        );
      });
  };