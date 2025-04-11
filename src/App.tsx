import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import RobotPage from "./pages/robot-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/robot/:id" element={<RobotPage />} />
    </Routes>
  );
}

export default App;
