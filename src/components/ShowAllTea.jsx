import { Popup } from "@jennystarkfrk/components";
import { useState } from "react";

const ShowAllTea = () => {

    const [showPopup, setShowPopup] = useState(false);

    const exitBtnHandler = () => {
        setShowPopup(false)
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
            {showPopup && <Popup productData={productsData} exitBtnHandler={exitBtnHandler}/>}
        </div>
    )
}

export default ShowAllTea;