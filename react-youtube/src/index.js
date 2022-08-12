import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Youtube from "./service/youtube";
import api from "./service/api";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const httpClient = api(key);
const youtube = new Youtube(httpClient);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App youtube={youtube} />);
