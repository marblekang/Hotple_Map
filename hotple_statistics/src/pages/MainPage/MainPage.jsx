import React from "react";
import { Container } from "./style";
import { placeList } from "../../data";
import { useState } from "react";
import { useEffect } from "react";

export const MainPage = () => {
  const [hotPlace, setHotPlace] = useState(
    placeList.sort((a, b) =>
      a.district < b.district ? -1 : a.district > b.district ? 1 : 0
    )
  );

  const showHotPlace = (e) => {
    return;
  };

  return (
    <Container>
      {hotPlace?.map((val) => (
        <>
          <h1>{val.district}</h1>
          {val.placeList.map((val) => (
            <div>{val.poiName}</div>
          ))}
        </>
      ))}
    </Container>
  );
};
