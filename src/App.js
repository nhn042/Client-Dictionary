import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./component/Search/Search.js";
import Login from "./component/Home/Login.js";
import ForgotPassword from "./component/Home/ForgotPassword.js";
import Register from "./component/Home/signUp";
import "./translations/i18n";
import WrapperComponent from "./component/Home/WrapperComponent.js";
import Checkout from "./component/checkOut/checkOut";
import Courses from "./component/Courses/courses";
import HomeScene from "./component/homeMain/home";
import HomeMain from "./component/Home/homeMain";
import DropdownItemDescriptionExample from "./component/Courses/Learn/video";
import HomeZoom from "./component/joinZoom/homeZoom";
import Room from "./component/joinZoom/Room";
import Game from "./component/Game/game";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WrapperComponent>
              <Login />
            </WrapperComponent>
          }
        />
        <Route
          path="/test"
          element={
            <WrapperComponent>
              <DropdownItemDescriptionExample />
            </WrapperComponent>
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <WrapperComponent>
              <ForgotPassword />
            </WrapperComponent>
          }
        />
        <Route
          path="/signUp"
          element={
            <WrapperComponent>
              <Register />
            </WrapperComponent>
          }
        />
        <Route
          path="/checkOut"
          element={
            <HomeMain>
              <Checkout />
            </HomeMain>
          }
        />
        <Route
          path="/home"
          element={
            <HomeMain>
              <HomeScene />
            </HomeMain>
          }
        />
        <Route
          path="/search"
          element={
            <HomeMain>
              <Search />
            </HomeMain>
          }
        />
        <Route
          path="/courses"
          element={
            <HomeMain>
              <Courses />
            </HomeMain>
          }
        />
        <Route
          path="/buyCourses"
          element={
            <HomeMain>
              <buyCourses />
            </HomeMain>
          }
        />
        <Route
          path="/homeZoom"
          element={
            <HomeMain>
              <HomeZoom />
            </HomeMain>
          }
        />
        <Route
          path="/room/:roomID"
          element={
            // <HomeMain>
            <Room />
            // </HomeMain>
          }
        />
        <Route
          path="/game"
          element={
            <HomeMain>
              <Game />
            </HomeMain>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
