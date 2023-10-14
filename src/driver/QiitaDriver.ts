import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { QiitaConverter, QiitaRecordJson } from "../lib/QiitaConverter";

export class QiitaDriver {
  constructor(private collectionName: string) {}

  async fetchAll(): Promise<QiitaRecordJson[]> {
    const colRef = collection(db, this.collectionName);
    const sortedQuery = query(colRef, orderBy("date", "asc"));

    const querySnapshot = await getDocs(
      sortedQuery.withConverter(QiitaConverter)
    );
    return querySnapshot.docs.map((doc) => doc.data());
  }

  async create(
    date: string,
    good: number,
    follower: number,
    contribution: number
  ): Promise<void> {
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
