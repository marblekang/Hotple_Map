import React from "react";
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
import { CardBox, FlexBox } from "./style";
export const PlaceCard = () => {
  return (
    <></>
    // <FlexBox>
    //   {val.placeList.map((val) => (
    //     <CardBox>
    //       <Card sx={{ maxWidth: 345, minWidth: 345 }}>
    //         <CardActionArea>
    //           <CardMedia
    //             component="img"
    //             height="300"
    //             image={val.image}
    //             alt="green iguana"
    //           />
    //           <CardContent>
    //             <Typography
    //               gutterBottom
    //               variant="h5"
    //               component="div"
    //               onClick={showCongestion}
    //               data-id={val.poiId}
    //             >
    //               {val.poiName}
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //               {/* 혼잡도:{val.congestion} */}
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //       </Card>
    //     </CardBox>
    //   ))}
    // </FlexBox>
  );
};
