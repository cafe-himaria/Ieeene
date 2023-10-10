import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { QiitaConverter, QiitaRecordJson } from "../lib/QiitaConverter";

export class QiitaDriver {
  constructor(private collectionName: string) {}

  async fetchAll(): Promise<QiitaRecordJson[]> {
    const querySnapshot = await getDocs(
      collection(db, this.collectionName).withConverter(QiitaConverter)
    );
    return querySnapshot.docs.map((doc) => doc.data());
  }

  async create(
    date: string,
    good: number,
    follower: number,
    contribution: number
  ): Promise<void> {
    console.log("=======-!!!!!!!!!!!");
    try {
      const docRef = await addDoc(collection(db, "records"), {
        date: date,
        good: good,
        follower: follower,
        contribution: contribution,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
