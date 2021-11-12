import React from "react";
import { Route, Routes } from "react-router-dom";
import { DcScreen } from "../Components/Dc/DcScreen";
import { HeroesScreen } from "../Components/Heroes/HeroesScreen";
import { MarvelScreen } from "../Components/Marvel/MarvelScreen";
import { SearchScreen } from "../Components/Search/SearchScreen";
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
            <Route path="/dc" element={<DcScreen />} />
             <Route path="/marvel" element={<MarvelScreen />} />
             <Route path="/hero/:heroeId" element={<HeroesScreen />} />
             <Route path="/search" element={<SearchScreen />} />
            <Route path="*" element={<HomeComponet />} />
            <Route path="/" element={<HomeComponet />} />
          </Routes>
       
      </div>
      <FooterComponent/>
      </div>

    </>
  );
};
