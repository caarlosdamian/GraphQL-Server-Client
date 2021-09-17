import { useQuery, gql } from "@apollo/client";

import {
  Container,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@material-ui/core";
import React from "react";

const query = gql`
  query {
    getMetrics
  }
`;
interface Props {
  setGlobalMetric: (val: string) => void;
  globalMetric: string;
}
const SelectMetric: React.FC<Props> = ({ setGlobalMetric, globalMetric }) => {
  const { loading, error, data } = useQuery(query);
  if (loading) {
    return <LinearProgress />;
  }
  if (data) {
    console.log("");
  }
  if (error) {
    console.log(error);
  }
  const handlechange = (event: SelectChangeEvent) => {
    setGlobalMetric(event.target.value as string);
  };
  return (
    <Container>
      <FormControl sx={{ m: 2, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">Metric</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={globalMetric}
          label="Metric"
          onChange={handlechange}
        >
          {data.getMetrics.map((metric: string, index: number) => (
            <MenuItem key={index} value={metric}>
              {metric}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default SelectMetric;
