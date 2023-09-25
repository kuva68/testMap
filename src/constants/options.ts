import {ImageLibraryOptions} from 'react-native-image-picker';

export const photoLibraryOptions: ImageLibraryOptions = {
  title: 'Оберіть фото',
  saveToPhotos: false,
  presentationStyle: 'fullScreen',
  mediaType: 'photo',
  selectionLimit: 5,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export const cameraOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  title: 'Оберіть фото',
  saveToPhotos: false,
  presentationStyle: 'fullScreen',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
