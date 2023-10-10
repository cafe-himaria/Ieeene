import {
  Card,
  DonutChart,
  Metric,
  LineChart,
  Text,
  Title,
} from "@tremor/react";
import { createQiita, useQiita } from "../../hooks/Qiita";
import { useState } from "react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

export const QiitaPage = () => {
  const { allQiitaRecords } = useQiita();
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [good, setGood] = useState(0);
  const [follower, setFollower] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [contributionError, setContributionError] = useState("");

  const changeDate = (value: string) => {
    setDate(value);
    if (value === "") {
      setDateError("日付を入力してください");
    } else {
      setDateError("");
    }
  };

  const changeContribution = (value: string) => {
    setContribution(Number(value));
    if (value === "") {
      setContributionError("Contribution数を入力してください");
      return;
    }
    if (isNaN(Number(value))) {
      setContributionError("数字を入力してください");
      return;
    }

    setContributionError("");
  };

  const clickCancel = () => {
    setDate("");
    setDateError("");
    setGood(0);
    setFollower(0);
    setContribution(0);

    const createRecordModal = document.getElementById(
      "create_record_modal"
    ) as HTMLDialogElement;
    createRecordModal.close();
  };

  const createRecord = () => {
    createQiita(date, good, follower, contribution);

    setDate("");
    setDateError("");
    setGood(0);
    setFollower(0);
    setContribution(0);

    const createRecordModal = document.getElementById(
      "create_record_modal"
    ) as HTMLDialogElement;
    createRecordModal.close();
  };

  return (
    <>
      <div className="h-14 flex items-center justify-between">
        <div className="font-bold text-2xl">Overview Qiita Analytics</div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const createRecordModal = document.getElementById(
              "create_record_modal"
            );
            if (createRecordModal instanceof HTMLDialogElement) {
              createRecordModal.showModal();
            }
          }}
        >
          新規登録
        </button>
      </div>
      <div className="mb-2 mt-2 flex">
        <div className="w-1/4">
          <Card className="mx-auto">
            <Title>Sales</Title>
            <DonutChart
              className="mt-6"
              data={cities}
              category="sales"
              index="name"
              colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
            />
          </Card>
        </div>
        <div className="w-3/4 grid grid-cols-4 grid-rows-2 gap-2 ml-2">
          {[...Array(8).keys()].map(() => (
            <Card
              className="max-w-xs mx-auto"
              decoration="top"
              decorationColor="indigo"
            >
              <Text>Sales</Text>
              <Metric>$ 34,743</Metric>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Card>
          <Title></Title>
          <LineChart
            data={allQiitaRecords}
            index="date"
            categories={["good", "follower"]}
            colors={["indigo", "emerald"]}
            yAxisWidth={40}
          />
        </Card>
        <Card>
          <Title></Title>
          <LineChart
            data={allQiitaRecords}
            index="date"
            categories={["contribution"]}
            colors={["gray"]}
            yAxisWidth={40}
          />
        </Card>
      </div>

      <dialog id="create_record_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">本日の記録を登録</h3>
          <div className="mb-2">
            <div className="font-bold mb-2">日付</div>
            <input
              type="date"
              className="input w-full"
              onChange={(e) => changeDate(e.target.value)}
              value={date}
            />
            <div className="text-red-500">{dateError}</div>
          </div>
          <div className="mb-2">
            <div className="font-bold mb-2">いいね数 : {good}</div>
            <input
              type="range"
              min={0}
              max="100"
              value={good}
              className="range"
              onChange={(e) => {
                setGood(Number(e.target.value));
              }}
            />
          </div>
          <div className="mb-2">
            <div className="font-bold mb-2">フォロワー数 : {follower}</div>
            <input
              type="range"
              min={0}
              max="50"
              value={follower}
              className="range"
              onChange={(e) => {
                setFollower(Number(e.target.value));
              }}
            />
          </div>
          <div className="mb-2">
            <div className="font-bold mb-2">Contribution数</div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => changeContribution(e.target.value)}
              value={contribution}
            />
            <div className="text-red-500">{contributionError}</div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-primary mr-2"
                onClick={() => createRecord()}
                disabled={
                  dateError !== "" ||
                  contributionError !== "" ||
                  date === "" ||
                  contribution === 0
                }
              >
                登録
              </button>
              <button className="btn" onClick={() => clickCancel()}>
                キャンセル
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
