import React from 'react';
import md5 from 'md5';
import DeviceInfo from 'react-native-device-info';
import firebase, { firestore } from 'react-native-firebase';

class firebaseConfig extends React.Component {

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

export default new firebaseConfig;
