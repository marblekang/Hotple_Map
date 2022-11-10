import { useState } from "react";
import { useEffect } from "react";
import { placeList } from "../../data";
import { request } from "../../api/request";
import {
  AppBar,
  Tab,
  Tabs,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Container, TitleBox, FlexBox, CardBox } from "./style";
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
          <FlexBox>
            {val.placeList.map((val) => (
              <CardBox>
                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={val.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        onClick={showCongestion}
                        data-id={val.poiId}
                      >
                        {val.poiName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* 혼잡도:{val.congestion} */}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </CardBox>
            ))}
          </FlexBox>
        </>
      ))}
    </Container>
  );
};
