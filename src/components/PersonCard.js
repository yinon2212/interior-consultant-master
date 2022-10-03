import React from "react";
import Text from "./Text";
import '../css/PersonCard.css';


const PersonCard = (props) => {
    return (
        <div className="person-card">
            <div className="person-details">
                <img className="person-img" src={props.imgSrc} />
                <div className="person-self-info">
                    <Text 
                        style="person-name small"
                        text={props.personName}
                    />
                    <Text 
                        style="person-job very-small gray"
                        text={props.personJob}
                    />

                      
                </div>

            </div>
            <Text 
                        style="card-text bold large ff2"
                        text={props.cardText}
                    />
        </div>
    );
}

export default PersonCard;