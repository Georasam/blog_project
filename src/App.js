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
import Album from "./Components/Album"
import ContactForm from "./Components/ContactForm"
import AboutUs from "./Components/AboutUs"
import {
  getBoardGames,
  addBoardGames,
  gameEdit,
  deleteBoardGames,
  //getSingleBoardGame
} from "./Controllers/api";



function App() {
  const [data, setData] = useState();
  //const [singleGame, setSingleGame] = useState();
  const [searchQuery, setSearchQuery] = useState(); //searchquery
  const [searchResults, setSearchResults] = useState(); //searchresults

  /* const [loadingA, setLoadingA] = useState(true);
  const [errorA, setErrorA] = useState(null); */


  async function getGames() {
    const games = await getBoardGames();
    setData(games);
    /* setData((prev) => {
      return { ...prev, games };
    }); */
  }

 /*  async function getSingleGame(){
    const singleGame = await getSingleBoardGame();
    setSingleGame(singleGame)
  } */

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



  async function search() {
    const url = `https://cdn.contentful.com//spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&query=${searchQuery}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setSearchResults(result.items); //rich test
  }


  if (!data) {
    return <div>Data is Loading...</div>;
  }


  return (
    <div className="App">
      <h1 className="title_name">FANTASIA</h1>
      <h4 className="title_description">The Board Game Blog</h4>
      <NavScroll
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        search={search}
      />
      <Routes>
        {/* <Route path="/" element={<RenderData entries={entries} assets={assets}/>}></Route> */}
        <Route exact path="/blog_project/:gameSlug" element={<GameDetails/>}></Route>
        {/* <Route exact path="/search" element={<Search search={search} entries={entries} searchResults={searchResults} />} /> */}
        <Route
          exact
          path="/blog_project"
          element={<RenderData data={data}/>}
        ></Route>
        <Route
          path="/blog_project/test"
          element={<Album data={data}  />}
        />
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
        {/* <Route
        exact
          path="/blog_project/:singleGameTitle"
          element={<GameDetails assets={assets} entries={entries} name="" />}
        ></Route> */}
        <Route
          exact
          path="/blog_project/search"
          element={
            <Search
              search={search}
              data={data}
              searchQuery={searchQuery}
              searchResults={searchResults}
            />
          }
        />
        <Route
          exact
          path="/blog_project/contactform"
          element={<ContactForm/>}
        ></Route>
        <Route
          exact
          path="/blog_project/aboutus"
          element={<AboutUs/>}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
