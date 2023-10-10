import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  serverTimestamp,
} from "firebase/firestore";

export type QiitaRecordJson = {
  id: string;
  date: string;
  good: number;
  follower: number;
  contribution: number;
};

export const QiitaConverter: FirestoreDataConverter<QiitaRecordJson> = {
  /**
   * Book オブジェクトを Firestore ドキュメントデータへ変換します。
   */
  toFirestore(record: QiitaRecordJson): DocumentData {
    return {
      date: record.date,
      good: record.good,
      follower: record.follower,
      contribution: record.contribution,
      updatedAt: serverTimestamp(),
    };
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): QiitaRecordJson {
    const data = snapshot.data(options);
    // Book オブジェクトの id プロパティには Firestore ドキュメントの id を入れる。
    return {
      id: snapshot.id,
      date: data.date,
      good: data.good,
      follower: data.follower,
      contribution: data.contribution,
    };
  },
};
