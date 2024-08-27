import ProfileSummery from "./pages/EMP/ProfileSummery";
import ProfileView from "./pages/EMP/ProfileView";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/emp">
          <Route path="profilesummery" element={<ProfileSummery />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
