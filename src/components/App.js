import Content from "./Content/Content";
import { Routes, Route } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const App = () => {
  Notify.info(
    "API stopped distributing data for Ukraine. Do not try to search this region, it will break the site"
  );
  return (
    <Routes>
      <Route path="/" element={<Content />}></Route>
    </Routes>
  );
};

export default App;
