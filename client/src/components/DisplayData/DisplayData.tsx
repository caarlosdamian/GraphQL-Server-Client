import { useQuery, gql } from "@apollo/client";
import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCollection } from "../../redux/user/userSlice";
const query = gql`
  query ($latLong: WeatherQuery!) {
    getWeatherForLocation(latLong: $latLong) {
      description
      locationName
      temperatureinCelsius
    }
  }
`;
export interface UserInterface {
  user: {};
}

type userResponse = {
  id: string;
  name: string;
  age: number;
  username: string;
};
const DisplayData: FC = () => {
  // Default to houston
  const latLong = {
    latitude: 23.7604,
    longitude: -95.3698,
  };
  const { loading, error, data } = useQuery(query, {
    variables: {
      latLong,
    },
  });

  if (loading) {
    return <h1>Data Loading</h1>;
  }
  if (data) {
    console.log(data.getWeatherForLocation);
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {/* {data &&
        data.users.map((item: userResponse) => (
          <div className="" key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.age}</span>
          </div>
        ))} */}
    </div>
  );
};

export default DisplayData;
