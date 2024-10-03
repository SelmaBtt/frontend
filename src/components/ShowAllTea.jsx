import { Popup } from "@jennystarkfrk/components";
import { useState } from "react";

const ShowAllTea = () => {

    const [showPopup, setShowPopup] = useState(false);

    const exitBtnHandler = () => {
        setShowPopup(!showPopup)
    }

    // Placeholder tillsvidare!!!!!!! Ta bort
    const productsData = {
        name: "Jasmine te",
        image: "/public/Images/teaPlaceholder.png",
        effect:
          "hjälper till att lugna, förbättra mental klarhet och stärka ditt immunförsvar",
        caffeine: "Låg koffein",
        type: "Grönt, svart & vitt",
      };

    return(
        <div>
            <button onClick={() => exitBtnHandler()}>test</button> {/* Ta bort sen! För demo anledning nu tills Components är uppdaterat */}
            {showPopup && <Popup productsData={productsData} exitBtnHandler={exitBtnHandler}/>}
        </div>
    )
}

export default ShowAllTea;