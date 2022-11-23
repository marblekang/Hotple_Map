import { createProxyMiddleware } from "http-proxy-middleware";
const { VITE_PLACE_URL } = import.meta.env;
import {} from "";
module.exports = function (app) {
  app.use(
    createProxyMiddleware(VITE_PLACE_URL, {
      target: "http://127.0.0.1:5173/",
      changeOrigin: true,
    })
  );
};
