import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const data = [
    { id: 1, name: "John", math: 85, chemistry: 78, physics: 90 },
    { id: 2, name: "Alice", math: 92, chemistry: 85, physics: 88 },
    { id: 3, name: "Bob", math: 78, chemistry: 80, physics: 82 },
    { id: 4, name: "Emily", math: 90, chemistry: 88, physics: 94 },
    { id: 5, name: "Michael", math: 86, chemistry: 84, physics: 89 },
    { id: 6, name: "Sophia", math: 94, chemistry: 91, physics: 95 },
    { id: 7, name: "David", math: 81, chemistry: 79, physics: 83 },
    { id: 8, name: "Emma", math: 88, chemistry: 87, physics: 91 },
    { id: 9, name: "James", math: 79, chemistry: 82, physics: 85 },
    { id: 10, name: "Olivia", math: 93, chemistry: 90, physics: 92 },
  ];
  return (
    <div>
      <LChart width={800} height={500} data={data}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
