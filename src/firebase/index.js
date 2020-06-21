import React from 'react';
import firebase, { firestore } from 'react-native-firebase';

class firebaseConfig extends React.Component {

  state = {
    nameMed: '',
    initialHour: null,
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

  getMedicineUserDataFirestore() {

    const [DataMed, setDataMed] = React.useState([]);

    firebase.firestore()
    .collection("Users")
    .doc(`${firebase.auth().currentUser.uid}`)
    .collection("Medicines")
    .orderBy('Name')
    .get()
    .then( querySnapshot =>
        querySnapshot.docs.map(doc => {
            let data = doc.data();
            
            return {
              id: doc.id,
              Name: data.Name,
              ContainerAmount: data.ContainerAmount,
              ContainerUnit: data.ContainerUnit,
              ExpirationDate: data.ExpirationDate,
              InitialDate: data.InitialDate,
              InitialHour: data.InitialHour,
              Frequency: data.Frequency.text,
              DurationOfTreatmentType: data.DurationOfTreatmentType,
              DurationOfTreatmentNum: data.DurationOfTreatmentNum,
              DosageQuantity: data.DosageQuantity,
              DosageUnit: data.DosageUnit.text,
              Instructions: data.Instructions.text,
              Obs: data.Obs,
              Complete: data.Complete,
            } 
        })
      )
      .then(medicines => setDataMed(medicines));

      return DataMed;
  }

  getInitialHourValidated(){
    if(this.state.initialHour != "23:15") return true;
    return false;
  }

  deleteMedicine(name) {

    var docRef = firestore()
    .collection("Users")
    .doc(`${firebase.auth().currentUser.uid}`)
    .collection("Medicines")
    .doc(`${name}`);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            docRef.update({
              Complete: false,
            })
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
  }

}

export default new firebaseConfig;
