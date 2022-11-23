import { rest } from "msw";
import { placeList } from "../data";

export const handlers = [
  rest.get("https://apis.openapi.sk.com/puzzle/pois", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(placeList));
  }),
];
