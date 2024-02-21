import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "uwear-8e9cb.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "uwear-8e9cb.appspot.com",
  messagingSenderId: "656177025123",
  appId: "1:656177025123:web:b55f9b4a4daddcb583e856"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);


async function getData(){
  const productsRef =  collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({...item.data(), id: item.id}));
  return docsData;
}



async function getProductData(id){
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot.exists()) {
      return {...docSnapshot.data(), id: docSnapshot.id}
    } else {
      throw new Error ("No encontramos ese producto")
    }
}

async function getCategoryData(categoryId){
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categoryId));
    const documentsSnapshot = await getDocs(q);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map((item) => ({...item.data(), id: item.id}));
    return docsData;
  
}

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)
    return(docCreated.id)
}

async function getOrder(id){
    const docRef = doc(db, "orders", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()){
        return {...docSnapshot.data(), id: docSnapshot.id};
    } else {
        throw new Error ("We couldn't find your product")
    }
}


export {getData, getProductData, getCategoryData, createOrder, getOrder};