import DoughnutChart from "@/components/atoms/DoughnutChart/DoughnutChart";

export function SingleClientHeader() {

  const chartData = {
    labels: ['Red', 'white'],
    datasets: [
      {
        label: '# of Votes',
        data: [50],
        backgroundColor: [
          '#FFBE00',
          '#E9F0F5',
        ],
        borderColor: [
          '#FFBE00',
          '#E9F0F5',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="py-10 bg-white">
      <div className="md:flex gap-5 md:w-[70%] px-5 md:px-0 mx-auto justify-between">       
        <div className="flex gap-5">
          <img src="/img/akasa_logo.png" alt="" className="rounded-lg w-16 h-16"/>
          <div>
            <h1 className="text-sm font-semibold">Akasa Air</h1>
            <h2 className="text-xl font-bold">Website<br /> health scorecard</h2>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <DoughnutChart data={chartData} />
          <div>
            <p>Overall<br/>Performance</p>
            <p>As on 09 Oct 23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
