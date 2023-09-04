import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const upload = async (file) => {

    try {
        //console.log('upload / file : ' , file) ;

        //création de la réference
        const imageRef = ref(storage, `images/${file.name}`);
        //console.log(imageRef) ;

        //Enregistrement du fichier sur fireStorage
        const snapShot = await uploadBytes(imageRef, file);
        //console.log('snapShot :' , snapShot)

        //récupération de l'URL du fichier
        const url = await getDownloadURL(snapShot.ref);
        //console.log('URL :' , url)
        return url;

    } catch (error) {
        return null ;
    }
};
