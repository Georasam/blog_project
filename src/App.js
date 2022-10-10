import "./App.css";

import { useEffect, useState } from "react";
import RenderData from "./Components/RenderData";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import GameDetails from "./Components/GameDetails";
import NavScroll from "./Components/NavScroll";
import Search from "./Components/Search";
import AddGame from "./Components/AddGame";
import EditPosts from "./Components/EditPosts";
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

 



//REGISTER USERNAME FUNCTION 
 /*  async function registerUsername(element) {
    const games = await registerControl(element);
    setData(games);
  } */

  //CHANGE PASSWORD (NOT)
  async function changePassElement(element) {
    const games = await changePassControl(element);
    setData(games);
  }

  /* async function loginUsername(element) {
    const games = await loginControl(element);
    setData(games);
  } */

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

  /*   async function getGames() {
    try {
      setLoadingA(true);
      const games = await getBoardGames();
      setData(games);
    } catch (e) {
      setErrorA(e);
    } finally {
      setLoadingA(false);
    }
    if (errorA) return "Failed to load resource A";
  return loadingA ? "Loading..." : games;
  }
   */

  useEffect(() => {
    getGames();
  }, []);
  const logout = useLogout();


  

  async function search() {
    const url = `https://cdn.contentful.com//spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&query=${searchQuery}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setSearchResults(result.items); //rich test
  }

  const signOut = async () => {
    await logout();
    /* navigate() */
  };
  if (!data) {
    return <div>Data is Loading...</div>;
  }

  return (
    <div className="App">
      <div>
        <button onClick={signOut}>Signout</button>
      </div>
      <h1 className="title_name">FANTASIA</h1>
      <h4 className="title_description">The Board Game Blog</h4>
      <NavScroll
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        search={search}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            exact
            path="/blog_project"
            element={
              <RenderData data={data}  />
            }
          />

          <Route path="/blog_project/test" element={<Album data={data} />} />

          <Route
            path="/blog_project/login"
            element={<Login /* data={data} loginUsername={loginUsername} */ />}
          />

          <Route
            exact
            path="/blog_project/search"
            element={
              <Search
                search={search}
                
                searchQuery={searchQuery}
                searchResults={searchResults}
              />
            }
          />
          <Route
            path="/blog_project/register"
            element={
              <Register /* data={data} registerUsername={registerUsername} */ />
            }
          />
          <Route path="/blog_project/unauthorized" element={<Unauthorized />} />
          {/* <Route
        exact
          path="/blog_project/:singleGameTitle"
          element={<GameDetails assets={assets} entries={entries} name="" />}
        ></Route> */}
          <Route element={<PersistLogin />}>
            <Route
              element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}
            >
              <Route
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
            </Route>
          </Route>
        </Route>
        <Route
          path="/blog_project/change-password"
          element={
            <ChangePass data={data} changePassElement={changePassElement} />
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
