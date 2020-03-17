import React from 'react';
import firebase from 'react-native-firebase';


class firebaseConfig extends React.Component {

  state = {
    nameMed: '',
    initialHour: ''
  }

  async setData(nameMed, DataMed){
    this.state.nameMed = nameMed;
    
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

  async updateData(DataMed){
    DataMed.InitialHour = this.state.initialHour;
    
    firebase
    .firestore()
    .collection("Users")
    .doc(`${firebase.auth().currentUser.uid}`)
    .collection("Medicines")
    .doc(`${this.state.nameMed}`)
    .update(DataMed)
    .then((ref) => {
        console.log(ref) 
    });

  }

  updateInitialHour(hour){
    this.state.initialHour = hour;
  }

}

export default new firebaseConfig;
