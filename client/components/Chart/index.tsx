import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from 'recharts';

const dataOptions = [
  {
    name: 'field1',
    color: '#A2FAA3',
  },
  {
    name: 'field2',
    color: '#92C9B1',
  },
  {
    name: 'field3',
    color: '#4F759B',
  },
  {
    name: 'field4',
    color: '#5D5179',
  },
  {
    name: 'field5',
    color: '#571F4E',
  },
];

const data = [
  {
    time: new Date(Date.now()),
    field1: 33,
    field2: 1032,
    field3: 12,
    field4: 99,
    field5: 45,
  },
  {
    time: new Date(Date.now() + 1),
    field1: 35,
    field2: 122,
    field3: 212,
    field4: 159,
    field5: 145,
  },
];

const Chart = (): JSX.Element => {
  const renderLines = dataOptions.map((item) => (
    <Line
      key={item.name}
      type="monotone"
      dataKey={item.name}
      stroke={item.color}
    />
  ));

  const chartContent = (
    <ResponsiveContainer height={400}>
      <LineChart data={data}>
        <CartesianGrid stroke="#EBEBEB" />
        <XAxis dataKey="time" />
        <YAxis width={35} />
        {renderLines}
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
