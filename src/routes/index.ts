import React from "react";
import Home from "../pages/Home";
import CV from "../pages/CV";
import Contact from "../pages/Contact";
import TwentyThree from "../pages/TwentyThree";
import TwentyTwo from "../pages/TwentyTwo";
import TwentyOne from "../pages/TwentyOne";
import Sculpture from "../pages/Sculpture";
import Drawing from "../pages/Drawing";

interface route {
    path: string;
    Component: React.FC;
}

interface routeWrap {
    [key: string]: route;
}

export const ROUTES: routeWrap = {
    Home: {
        path: "/",
        Component: Home,
    },
    CV: {
        path: "/CV",
        Component: CV,
    },
    Contact: {
        path: "/contact",
        Component: Contact,
    },
    TwentyThree: {
        path: "year/2023",
        Component: TwentyThree,
    },
    TwentyTwo: {
        path: "year/2022",
        Component: TwentyTwo,
    },
    TwentyOne: {
        path: "year/2021",
        Component: TwentyOne,
    },
    Sculpture: {
        path: "media/sculpture",
        Component: Sculpture,
    },
    Drawing: {
        path: "media/Drawing",
        Component: Drawing,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
