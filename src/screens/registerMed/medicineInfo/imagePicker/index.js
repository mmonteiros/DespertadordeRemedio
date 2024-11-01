import React, { Fragment, Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import FirebaseService from '../../../../services/FirebaseService'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Card,
  CardHeader,
  TopNavigation,
  Layout,
  Divider,
} from '@ui-kitten/components';

import styles from './styles';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class ImagePickerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: null,
      fileUri: ''
    }
  }

  Header = () => (
    <CardHeader
      titleStyle={styles.headerCard}
      title="              Verifique sua imagem abaixo"
    />
  );

  cleanState() {
    this.state.filepath.data = '';
    this.state.filepath.uri = '';
    this.state.fileData = null;
    this.state.fileUri = '';
  }

  navigateImagePicker = () => {

    FirebaseService.setImageUrl(this.state.fileUri);
    FirebaseService.setfileData(this.state.fileData);
    
    this.cleanState();

    this.props.navigation.navigate('Register');
  }

  chooseImage = () => {
    let options = {
      title: 'Selecionar Imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    if(this.state.fileData == null){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.path,
          fileUri: response.uri
        });
      }
    });
  }
  
    return (
    <Fragment>
       <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
        <TopNavigation
          title="                   Escolha da imagem do medicamento"
          titleStyle={{fontWeight: "bold"}}
          alignment="start"
          backgroundColor="white"
        />
      </Layout>
      <Divider />
      <Layout style={styles.body}>
      <Card style={styles.cardMain} header={this.Header}>
           
            
              <View>
                
                <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} ></Text>
                <View style={styles.ImageSections}>
                  <View>
                    {this.renderFileUri()}
                  </View>
                </View>

                <View style={styles.btnParentSection}>
                  <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                    <Text style={styles.btnText}>Alterar imagem</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.navigateImagePicker} style={styles.btnSection}  >
                    <Text style={styles.btnText}>Voltar ao cadastramento do remédio</Text>
                  </TouchableOpacity>
                </View>

              </View>
             
           
            </Card>
          </Layout>
          </SafeAreaView>
          </Fragment>
    )
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.path,
          fileUri: response.uri
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.path,
          fileUri: response.uri
        });
      }
    });

  }

  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./dummy.png')}
        style={styles.images}
      />
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('./dummy.png')}
        style={styles.images}
      />
    }
  }
  render() {
    return (
      this.chooseImage()
    );
  }
};

export default ImagePickerPage;