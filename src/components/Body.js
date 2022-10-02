import React from "react";
import Heading from "./Heading";
import Text from "./Text";
import NavBarItem from "./NavBarItem";
import PersonCard from "./PersonCard";
import '../css/Body.css';

const Body = () => {
    return (
        <div className="body">
            <div className="left-cont">
                <Heading text="Modern interior" />
                <Text
                    style="large"
                    text="A full-Service residental & commercial interior design and staging company offering professional organizing & exo-services."
                />
                <Text
                    style="bold"
                    text="Read more"
                />
            </div>

            <div className="right-cont">
                <img className="illustration" src={require("../res/photo1.png")} />
                <PersonCard 
                    imgSrc={require("../res/photo2.png")}
                    personName="Aliza Webber"
                    personJob="Interior designer"
                    cardText="Designed in 2020 by Aliza Webber"
                />
            </div>
           
        </div>
    );
}

export default Body;