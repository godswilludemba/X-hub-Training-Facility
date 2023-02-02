import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Apartment from "./Components/Apartment/Apartments";
import HomeRoomList from "./Components/Rooms/HomeRoomList";
import Login from "./Components/AllocationLogin/Login";
import AllocationTable from "./Components/Table/AllocationTable";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Apartment />} />
          <Route path="/login" element={<Home />} />
          <Route path="/submit" element={<HomeRoomList />} />
          <Route path="/room" element={<Login />} />
          <Route path="/allocate" element={<AllocationTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
