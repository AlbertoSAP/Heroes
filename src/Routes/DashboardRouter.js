import React from "react";
import { Route, Routes } from "react-router-dom";
import { DcScreen } from "../Component/Dc/DcScreen";
import { HeroesScreen } from "../Component/Heroes/HeroesScreen";
import { MarvelScreen } from "../Component/Marvel/MarvelScreen";
import { SearchScreen } from "../Component/Search/SearchScreen";
import { HomeComponet } from "../HomeComponet";
import { FooterComponent } from "../Shared/FooterComponent";
import { NavBar } from "../Shared/NavBar";

export const DashboardRouter = () => {
  return (
    <>
    <div>      <NavBar />
      <div>
      
          <Routes>
          <Route path="/home" element={<HomeComponet />} />
            <Route path="/Dc" element={<DcScreen />} />
             <Route path="/Marvel" element={<MarvelScreen />} />
             <Route path="/hero/:heroeId" element={<HeroesScreen />} />
             <Route path="/search" element={<SearchScreen />} />
            <Route path="*" element={<MarvelScreen />} />
            <Route path="/" element={<MarvelScreen />} />
          </Routes>
       
      </div>
      <FooterComponent/>
      </div>

    </>
  );
};
