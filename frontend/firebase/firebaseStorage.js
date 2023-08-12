import "firebase/firestore";
import firebasedb from "./firebasedb";
import { getStorage } from "firebase/storage";

const imgStorage = getStorage(firebasedb.firebaseApp);

export default imgStorage;
