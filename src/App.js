import "./App.css";
import React from "react";

import { useEffect, useState } from "react";
import RenderData from "./Components/RenderData";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import GameDetails from "./Components/GameDetails";
import NavScroll from "./Components/NavScroll";
import Search from "./Components/Search";
import AddGame from "./Components/AddGame";
import EditPosts from "./Components/EditPosts";
import ContactForm from "./Components/ContactForm";
import AboutUs from "./Components/AboutUs";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Album from "./Components/Album";
import ChangePass from "./Components/Changepass";
import Layout from "./Components/Layout";
import Missing from "./Components/Missing";
import RequireAuth from "./Components/RequireAuth";
import PersistLogin from "./Components/PersistLogin";
import Unauthorized from "./Components/Unauthorized";
import useLogout from "./hooks/useLogout";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

import {
  getBoardGames,
  addBoardGames,
  gameEdit,
  deleteBoardGames,
  /* registerControl, */
  /* loginControl, */
  changePassControl,
} from "./Controllers/api";

const ROLES = {
  User: 2001,
  Admin: 5150,
};

function App() {
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState(); //searchquery
  const [searchResults, setSearchResults] = useState(); //searchresults
  const { auth } = useAuth();
  const navigate = useNavigate();

  

  //CHANGE PASSWORD (NOT)
  async function changePassElement(element) {
    const games = await changePassControl(element);
    setData(games);
  }

  

  async function getGames() {
    const games = await getBoardGames();
    setData(games);

    /* setData((prev) => {
      return { ...prev, games };
    }); */
  }

  async function updateGame(element) {
    const games = await gameEdit(element);
    setData(games);
  }

  async function addGames(game) {
    const games = await addBoardGames(game);

    setData(games);
  }

  async function deleteGames(game) {
    const games = await deleteBoardGames(game);

    setData(games);
  }

 

  useEffect(() => {
    getGames();
  }, []);
  console.log("beforlog");
  const logout = useLogout();
  console.log(logout); 

 

  const signOut = async () => {
    await logout();
  };
  const handleLogButton = async (e) => {
    console.log(auth.accessToken);
    if (!auth.accessToken) {
      console.log("AAAAAA");
      navigate("/blog_project/login");
    } else {
      console.log("bbbbbbbbb");
      await logout();
      /* navigate("/blog_project") */
    }
  };
  if (!data) {
    return <div>Data is Loading...</div>;
  }

  return (
    <div className="App">
     
      <h1 className="title_name" /* onClick={onClickHome} */>
        FANTASIA
      </h1>
      <h4 className="title_description" /* onClick={onClickHome} */>
        The Board Game Blog
      </h4>
      <div>
        <a href="" onClick={handleLogButton}>
          {!auth.username ? <>Sign in</> : <>Sign out</>}
        </a>
      </div>

      <NavScroll
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
       
      />

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          exact
          path="/blog_project"
          element={<RenderData data={data} />}
        />
        <Route
          exact
          path="/blog_project/test"
          element={<Album data={data} />}
        />
        <Route
          exact
          path="/blog_project/view/:gameSlug"
          element={<GameDetails />}
        />

          

         

          <Route
            path="/blog_project/login"
            element={<Login /* data={data} loginUsername={loginUsername} */ />}
          />

          <Route
            exact
            path="/blog_project/search"
            element={
              <Search
                
                searchQuery={searchQuery}
                searchResults={searchResults}
              />
            }
          />

          <Route
            exact
            path="/blog_project/unauthorized"
            element={<Unauthorized />}
          />

          <Route element={<PersistLogin />}>


            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
              
              <Route
                exact
                path="/blog_project/register"
                element={
                  <Register /* data={data} registerUsername={registerUsername} */
                  />
                }
              />

              <Route
                exact
                path="/blog_project/add"
                element={<AddGame data={data} addGames={addGames} />}
              />

              <Route
                exact
                path="/blog_project/edit/:gameid"
                element={
                  <EditPosts
                    data={data}
                    updateGame={updateGame}
                    deleteGames={deleteGames}
                  />
                }
              />
              <Route
                exact
                path="/blog_project/change-password"
                element={
                  <ChangePass />
                }
              />
            </Route>
          </Route>
        </Route>

        <Route
          exact
          path="/blog_project/contactform"
          element={<ContactForm />}
        />
        <Route exact path="/blog_project/aboutus" element={<AboutUs />} />
        

        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
