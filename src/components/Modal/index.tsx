import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useToast} from 'react-native-toast-notifications';
import {Button} from 'react-native-paper';
import {cameraOptions, photoLibraryOptions} from '../../constants/options';
interface IInfoModal {
  sendData: (uris: string[]) => void;
  close: () => void;
  isVisible: boolean;
}
const InfoModal = ({sendData, close, isVisible}: IInfoModal) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const choosePicture = async () => {
    setLoading(true);
    launchImageLibrary(photoLibraryOptions, response => {
      if (response.didCancel) {
        setLoading(false);
        close();
        toast.show(response.errorMessage ?? 'Error Choose Picture', {
          type: 'danger',
          placement: 'top',
          duration: 4000,
          animationType: 'zoom-in',
        });
      } else if (!response.didCancel && response.assets) {
        const responseUris = response?.assets.reduce(
          (acc: string[], el): string[] => {
            if (el.uri) {
              return [...acc, el.uri];
            } else {
              return acc;
            }
          },
          [],
        );

        setTimeout(() => {
          sendData(responseUris);
        }, 0);
        setTimeout(() => {
          toast.show(`Send ${responseUris.length} files `, {
            type: 'success',
            placement: 'top',
            duration: 4000,
            //offset: 30,
            animationType: 'zoom-in',
          });
        }, 700);
      }
      setLoading(false);
    });
  };

  const takePicture = async () => {
    close();
    launchCamera(cameraOptions)
      .then(response => {
        if (
          response &&
          !response?.errorCode &&
          !response?.didCancel &&
          response.assets?.[0].uri
        ) {
          setTimeout(() => {
            sendData([response.assets[0].uri]);
          }, 0);
          setTimeout(() => {
            toast.show('Send  file ', {
              type: 'success',
              placement: 'top',
              duration: 4000,
              //offset: 30,
              animationType: 'zoom-in',
            });
          }, 700);
        } else {
          close();
          toast.show(response.errorMessage ?? 'Error take Photo', {
            type: 'danger',
            placement: 'top',
            duration: 4000,
            animationType: 'zoom-in',
          });
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      onRequestClose={close}
      visible={isVisible}>
      <View style={[styles.container]}>
        <Text style={styles.text}>Choose Media</Text>
        <Button
          style={styles.btn}
          mode="elevated"
          onPress={takePicture}
          textColor={Colors.orange}>
          Take photo
        </Button>

        <Button
          loading={loading}
          buttonColor={Colors.orange}
          style={styles.btn}
          mode="elevated"
          onPress={choosePicture}
          textColor={Colors.backgroundColor}>
          Choose from library
        </Button>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  mainBlock: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    gap: 60,
  },
  text: {
    fontSize: 24,
    color: Colors.textBrownColor,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 300,
  },
  btn: {
    width: 350,
  },
});
