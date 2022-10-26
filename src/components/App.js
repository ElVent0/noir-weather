import Content from "./Content/Content";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />}></Route>
    </Routes>
  );
};

export default App;
