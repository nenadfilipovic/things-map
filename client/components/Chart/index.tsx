import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  {
    field1: 33,
    field2: 1032,
    field3: 12,
    field4: 99,
    field5: 'ok',
  },
];

const Chart = () => {
  const chartContent = (
    <ResponsiveContainer height={400}>
      <LineChart data={data}>
        <CartesianGrid stroke="#EBEBEB" />
        <XAxis dataKey="time" />
        <YAxis width={35} />
        <Tooltip />
        <Legend iconSize={10} iconType="circle" />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="relative w-full pb-60">
      <div className="absolute top-0 right-0 bottom-0 left-0 ">
        {chartContent}
      </div>
    </div>
  );
};

export default Chart;
