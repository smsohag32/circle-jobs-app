import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// VerticalComposedChart data and my assignments
let assignmentMarks = [
  { id: 1, name: "Assignment 1", marks: 60 },
  { id: 2, name: "Assignment 2", marks: 60 },
  { id: 3, name: "Assignment 3", marks: 59 },
  { id: 4, name: "Assignment 4", marks: 59 },
  { id: 5, name: "Assignment 5", marks: 57 },
  { id: 6, name: "Assignment 6", marks: 60 },
  { id: 7, name: "Assignment 7", marks: 60 },
  { id: 8, name: "Assignment 8", marks: 60 },
];

const Statistic = () => {
  return (
    <div className="default-container mb-16 border-2 p-10 bg-gray-100">
      <div className="text-xs max-w-[940px] mx-auto w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            width={1000}
            height={400}
            data={assignmentMarks}
            margin={{
              top: 80,
              right: 20,
              bottom: 20,
              left: 80,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis
              name="Assignment"
              dataKey="name"
              type="category"
              scale="band"
            />
            <Tooltip />
            <Legend />
            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
            <Bar
              dataKey="marks"
              name="Assignment"
              barSize={20}
              fill="#413ea0"
            />
            <Line dataKey="marks" name="Marks" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
