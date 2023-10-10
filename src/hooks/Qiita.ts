import { useEffect, useState } from "react";
import { QiitaDriver } from "../driver/QiitaDriver";
import { Qiita } from "../domain/Qiita";
import { QiitaRecordJson } from "../lib/QiitaConverter";

function toQiitaUnit(records: QiitaRecordJson[]): Qiita[] {
  return records.map((record) => {
    return new Qiita(
      record.id,
      record.date,
      record.good,
      record.follower,
      record.contribution
    );
  });
}

export function useQiita() {
  const [allQiitaRecords, setAllRecords] = useState<Qiita[]>([]);
  useEffect(() => {
    const driver = new QiitaDriver("records");
    driver.fetchAll().then((records) => {
      setAllRecords(toQiitaUnit(records));
    });
  }, []);

  return { allQiitaRecords };
}

export function createQiita(
  date: string,
  good: number,
  follower: number,
  contribution: number
) {
  const driver = new QiitaDriver("records");
  const createQiita = async () => {
    await driver.create(date, good, follower, contribution);
  };
  createQiita();
  return { createQiita };
}
