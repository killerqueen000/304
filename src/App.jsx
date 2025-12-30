import MainPage from "./MainPage";
import AbousUs from "./components/main/AbousUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AbousUs />} />
    </Routes>
  );
}

export default App;
