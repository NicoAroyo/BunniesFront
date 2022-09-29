import React from "react";
import { Login } from "./views/login/Login";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/navbar/Navbar";
import { Home } from "./views/home/Home";
import { FileUpload } from "./views/test/FileUpload";
import { Buns } from "./views/buns/Buns";
import { SignUp } from "./views/login/SignUp";
import { MapWithPosts } from "./components/map-with-posts/MapWithPosts";
import { Profile } from "./views/profile/Profile";
import { BlockedBuns } from "./views/buns/BlockedBuns";
import { EditProfile } from "./views/profile/EditProfile";
import { LoadScript } from "@react-google-maps/api";
import {Chats} from "./views/chats/chats"

export const App = () => {
  return (
    <>
      <LoadScript
        loadingElement={<></>}
        googleMapsApiKey="AIzaSyCRznr_S5ccK9D4I0FBaAUWkpZ7H9TX1-M"
      ></LoadScript>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/file" element={<FileUpload />}></Route>
        <Route path="/buns" element={<Buns />}></Route>
        <Route path="/blockedBuns" element={<BlockedBuns />}></Route>
        <Route path="/map" element={<MapWithPosts />}></Route>
        <Route path="/map-start-view" element={<mapAllPosts />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
<<<<<<< HEAD
        <Route path="/chats" element={<Chats/>}></Route>
=======
        <Route path= "/requests" element= {<Requests/>}></Route>
>>>>>>> 4175627a61193d03721aca243c2bf452d69b54d4
      </Routes>
      
    </>
  );
};
