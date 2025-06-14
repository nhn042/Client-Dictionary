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
import DropdownItemDescriptionExample from "./component/Courses/Learn/Watch/video";
import HomeLearn from "./component/Courses";
import ContentWord from "./component/Courses/content";
import CoursesVideo from "./component/Courses/video";
import ContentDictionary from "./component/Courses/Dictionary";
import Introduce from "./component/Introduce";
import Character from "./component/Introduce/introduce";
import SearchHome from "./component/Home/SearchHome";
import RequireAuth from "./component/common/RequireAuth.js";
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
          path="/login"
          element={
            <WrapperComponent>
              <Login />
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
          path="/forgotPassword"
          element={
            <WrapperComponent>
              <ForgotPassword />
            </WrapperComponent>
          }
        />

        <Route path="/home/search" element={<SearchHome />} />
        <Route element={<RequireAuth />}>
          <Route
            path="/test"
            element={
              <WrapperComponent>
                <DropdownItemDescriptionExample />
              </WrapperComponent>
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
            path="/introduce"
            element={
              <HomeMain>
                <Introduce />
              </HomeMain>
            }
          />

          <Route
            path="/courses"
            element={
              <HomeMain>
                <HomeLearn />
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
            path="/courses/note"
            element={
              <HomeMain>
                <Courses />
              </HomeMain>
            }
          />
          <Route
            path="/courses/dictionary"
            element={
              <HomeMain>
                <ContentDictionary />
              </HomeMain>
            }
          />
          <Route
            path="/courses/content"
            element={
              <HomeMain>
                <ContentWord />
              </HomeMain>
            }
          />
          <Route
            path="/courses/video"
            element={
              <HomeMain>
                <CoursesVideo />
              </HomeMain>
            }
          />
          <Route
            path="/introduce/culture"
            element={
              <HomeMain>
                <Character />
              </HomeMain>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
