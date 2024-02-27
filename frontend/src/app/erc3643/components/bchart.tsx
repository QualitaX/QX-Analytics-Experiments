import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "../constants/network-types";

interface PChartProps {
  xaxis: string;
  yaxis: string[];
  data: {
    [key: string]: string | number;
  }[];
}

export default function BChart({ xaxis, yaxis, data }: PChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xaxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        {yaxis.map((value) => (
          <Bar
            key={`bar-${value}`}
            dataKey={value}
            stackId="a"
            fill={
              COLORS[value] ||
              `#${Math.floor(Math.random() * 16777215).toString(16)}`
            }
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
