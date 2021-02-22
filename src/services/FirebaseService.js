import React from 'react';
import md5 from 'md5';
import DeviceInfo from 'react-native-device-info';
import firebase, { firestore } from 'react-native-firebase';

class FirebaseService extends React.Component {

  state = {
    nameMed: '',
    imageUrl: '',
    initialHour: null,
    fileData: null,
  }

  setImageUrl(url){
    this.state.imageUrl = url;
  }

  setfileData(data) {
    this.state.fileData = data;
  }

  cleanState() {
    this.state.nameMed = '';
    this.state.imageUrl = '';
    this.state.initialHour = null;
    this.state.fileData = null;
  }

  async setData(nameMed, DataMed){
    this.state.nameMed = nameMed;

    DataMed = {
      ...DataMed,
      imageUrl: this.state.imageUrl,
    }

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
    
    if(this.state.fileData) {
      this.uploadImage(this.state.fileData);
    }

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

    this.cleanState();

  }

  async editData(nameMed, DataMed){
    if(DataMed.InitialHour) DataMed.InitialHour = this.state.initialHour;
    
    if(this.state.fileData) {
      this.uploadImage(this.state.fileData);
    }

    if(DataMed.ContainerAmount){
    firebase
    .firestore()
    .collection("Users")
    .doc(`${firebase.auth().currentUser.uid}`)
    .collection("Medicines")
    .doc(`${nameMed}`)
    .update({ContainerAmount: DataMed.ContainerAmount})
    .then((ref) => {
        console.log(ref) 
    });
    }

    if(DataMed.ContainerUnit.text){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({ContainerUnit: DataMed.ContainerUnit})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.ExpirationDate){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({ExpirationDate: DataMed.ExpirationDate})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.Color){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({Color: DataMed.Color})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.InitialDate){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({InitialDate: DataMed.InitialDate})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.InitialHour){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({InitialHour: DataMed.InitialHour})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.Frequency.text){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({Frequency: DataMed.Frequency})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.DurationOfTreatmentType.text){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({DurationOfTreatmentType: DataMed.DurationOfTreatmentType})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.DurationOfTreatmentNum){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({DurationOfTreatmentNum: DataMed.DurationOfTreatmentNum})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.DosageQuantity){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({DosageQuantity: DataMed.DosageQuantity})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.DosageUnit.text){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({DosageUnit: DataMed.DosageUnit})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.Instructions.text){
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({Instructions: DataMed.Instructions})
      .then((ref) => {
          console.log(ref) 
      });
    }

    if(DataMed.Obs) {
      firebase
      .firestore()
      .collection("Users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("Medicines")
      .doc(`${nameMed}`)
      .update({Obs: DataMed.Obs})
      .then((ref) => {
          console.log(ref) 
      });
    }

    this.cleanState();

  }

  updateInitialHour(hour){
    this.state.initialHour = hour;
  }

  medsCollection() {
    return firebase.firestore().collection("Users").doc(`${firebase.auth().currentUser.uid}`).collection("Medicines");
  }

  deleteMed(id) {
    return firebase.firestore().collection("Users").doc(`${firebase.auth().currentUser.uid}`).collection("Medicines").doc(id).delete();
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
    if(this.state.initialHour != null) return true;
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

  uploadImage(path) {
    const id = imageId();
    const metadata = { cacheControl: 'public,max-age=604800', contentType: 'image of med' };
    return firebase.storage().ref(`/meds/${firebase.auth().currentUser.uid}/images/${id}.jpg`).putFile(path, metadata);
  }

}

function imageId() {
  const uniqueID = DeviceInfo.getUniqueId();
  const date = Date.parse(Date());
  return md5(`${uniqueID}-${date}`);
}

export default new FirebaseService;
