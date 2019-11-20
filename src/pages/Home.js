import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";
import Banner from "../components/banner/Banner";
export default function Home() {
    return (
        <div className="" style={{ textAlign: "center" }}>
          <Banner/>
            <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
            <h1 style={{ fontSize: 28, margin: "2em" }} className="ta-c p-h200 t--intro">Popular Strategies</h1>
            <CardList />
        </div>
    );
}
