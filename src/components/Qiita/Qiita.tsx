import {
  Card,
  DonutChart,
  Metric,
  LineChart,
  Text,
  Title,
} from "@tremor/react";

const chartdata = [
  {
    date: "2023/10/06",
    good: 10,
    contribution: 100,
    followers: 50,
  },
  {
    date: "2023/10/07",
    good: 10,
    contribution: 110,
    followers: 55,
  },
  {
    date: "2023/10/08",
    good: 10,
    contribution: 115,
    followers: 58,
  },
  {
    date: "2023/10/09",
    good: 10,
    contribution: 98,
    followers: 67,
  },
  {
    date: "2023/10/10",
    good: 10,
    contribution: 100,
    followers: 70,
  },
  {
    date: "2023/10/11",
    good: 10,
    contribution: 105,
    followers: 75,
  },
];

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

export const Qiita = () => {
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
            data={chartdata}
            index="date"
            categories={["good", "contribution", "followers"]}
            colors={["indigo", "emerald", "gray"]}
            yAxisWidth={40}
          />
        </Card>
        <Card>
          <Title></Title>
          <LineChart
            data={chartdata}
            index="date"
            categories={["contribution", "followers"]}
            colors={["emerald", "gray"]}
            yAxisWidth={40}
          />
        </Card>
      </div>

      <dialog id="create_record_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
