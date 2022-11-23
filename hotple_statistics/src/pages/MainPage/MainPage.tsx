import { useState } from "react";
import { useEffect } from "react";
import { placeList, PlaceList } from "../../data";
import { requestCongestion, requestPlace } from "../../api/request";
import { PlaceCard } from "./component/card/PlaceCard";
import { Tab, Tabs } from "@mui/material";
import { Container, TitleBox } from "./style";

import { Place } from "@mui/icons-material";

export const MainPage = () => {
  // api요청해서 데이터 받아와주고 , 정렬해야함 (지금은 로컬 js파일에서 가져옴)
  const [hotPlace, setHotPlace] = useState<any>();

  // placeList.sort()

  // const [placeList, setPlaceList] = useState("");
  const [congestion, setCongestion] = useState<string>("");
  const [congestionLevel, setCongestionLevel] = useState<string>("");
  // const setCongestionFunc = () => {
  //   hotPlace.map((arg) => arg.placeList.map((val) => (val.congestion = "asd")));
  // };
  const showPlace = async () => {
    let response: any = await requestPlace();
    setHotPlace(
      response.data.sort(
        (a: any, b: any) => b.placeList.length - a.placeList.length
      )
    );
  };
  // const showCongestion = async (e: any) => {
  //   let id = e.target.dataset.id;
  //   let response = await request("CONGESTION", id);
  //   let congestion = (response as any).data.contents.rltm.congestion;
  //   let congestionLevel = (response as any).data.contents.rltm.congestionLevel;
  //   setCongestion(congestion);
  //   setCongestionLevel(congestionLevel);
  // };

  console.log(hotPlace);

  useEffect(() => {
    showPlace();
  }, []);

  return (
    <Container>
      <Tabs value={0}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      {hotPlace?.map((val: any) => (
        <>
          <TitleBox>{val.district}</TitleBox>
          <PlaceCard /* val={val} */ />
        </>
      ))}
    </Container>
  );
};
