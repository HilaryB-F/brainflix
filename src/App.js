import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/videoplayer/:videoId" element={<HomePage />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
