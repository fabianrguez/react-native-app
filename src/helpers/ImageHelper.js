import {firebase} from '../config/firebaseConfig';

export default class ImageHelper {

  static setImageUrl(id, type, url) {
    const imagePath = `/${type}/${id}`;
    firebase.database().ref(imagePath).set(url);
  }
}