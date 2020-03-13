import firebase from 'react-native-firebase';


class firebaseConfig {

  async setData(nameMed, DataMed){
    firebase
    .firestore()
    .collection("Users")
    .doc(`${firebase.auth().currentUser.uid}`)
    .collection("Medicines")
    .doc(`${nameMed}`)
    .set(DataMed)
    .then( (ref) => { 
        console.log(ref) 
    });
  }

  async updateData(nameMed, DataMed){
    firebase
    .firestore()
    .collection("Users")
    .doc(`${firebase.auth().currentUser.uid}`)
    .collection("Medicines")
    .doc(`${nameMed}`)
    .update(DataMed)
    .then((ref) => {
        console.log(ref) 
    });

  }





}

export default new firebaseConfig;
