import { useState } from "react";
import { useEffect } from "react";
import { placeList } from "../../data";
import { request } from "../../api/request";
import { PlaceCard } from "./component/card/PlaceCard";
import { Tab, Tabs } from "@mui/material";
import { Container, TitleBox } from "./style";
import { Place } from "@mui/icons-material";

export const MainPage = () => {
  // api요청해서 데이터 받아와주고 , 정렬해야함 (지금은 로컬 js파일에서 가져옴)
  const [hotPlace, setHotPlace] = useState(
    placeList.sort((a, b) => b.placeList.length - a.placeList.length)
  );

  // const [placeList, setPlaceList] = useState("");
  const [congestion, setCongestion] = useState("");
  const [congestionLevel, setCongestionLevel] = useState("");
  // const setCongestionFunc = () => {
  //   hotPlace.map((arg) => arg.placeList.map((val) => (val.congestion = "asd")));
  // };
  const showPlace = async () => {
    let response = await request("PLACE");
    setHotPlace((response as any).data.contents);
  };
  const showCongestion = async (e: any) => {
    let id = e.target.dataset.id;
    let response = await request("CONGESTION", id);
    let congestion = (response as any).data.contents.rltm.congestion;
    let congestionLevel = (response as any).data.contents.rltm.congestionLevel;
    setCongestion(congestion);
    setCongestionLevel(congestionLevel);
  };

  console.log(hotPlace);

  useEffect(() => {}, []);

  return (
    <Container>
      <Tabs value={0}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      {hotPlace?.map((val) => (
        <>
          <TitleBox>{val.district}</TitleBox>
          <PlaceCard /* val={val} */ />
        </>
      ))}
    </Container>
  );
};
