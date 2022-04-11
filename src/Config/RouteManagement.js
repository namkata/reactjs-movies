import React from "react";
import {
    Routes, // instead of Switch
    Route,
} from 'react-router-dom';

import Home from "../pages/Home";
import Catalogues from "../pages/Catalogues";
import Detail from "../pages/Detail";

function RouteManagement() {
    console.log("RouteManagement");
  return (
    <Routes>
        <Route
            path="/:category/search/:keyword"
            element={<Catalogues/>}
        />
        <Route
            path="/:category/:id"
            element={<Detail/>}
        />
        <Route
            path="/:category"
            element={<Catalogues/>}
        />
        <Route
            exact
            path="/"
            element={<Home/>}
        />
    </Routes>
  );
}

export default RouteManagement;