import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const query = gql`
  query input($globalMetric: String!) {
    getMeasurements(input: { metricName: $globalMetric }) {
      metric
      at
      value
      unit
    }
  }
`;

interface Props {
  globalMetric: string;
}
const Chart: React.FC<Props> = ({ globalMetric }) => {
  //   const metric = globalMetric;

  const { loading, error, data } = useQuery(query, {
    variables: {
      globalMetric,
    },
  });
  const infoData = data?.getMeasurements;
  console.log(infoData);
  console.log(error);
  console.log(loading);

  return (
    <div className="chart">
      <h3 className="chartTitle">{globalMetric}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={infoData}>
          <XAxis dataKey="at" stroke="#5550bd" />
          <Line
            activeDot={{ r: 8 }}
            type="monotone"
            dataKey="value"
            stroke="#5550bd"
          />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
