import React, { useEffect, useState } from "react";

// import axios from "../../Axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../styles/horizontal.css";
// import "../../../styles/navigation.css";

export default function HorizontCards(props) {
  
 
  return (
    <>
      <div class="row flex-nowrap overflow d-flex justify-content-center mb-5">
        {props.categories
          ? props.categories.map((card, index) => {
              return (
                <>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <div className="card p-1 shadow rounded " >
                      <div className="name-box d-flex justify-content-center">
                    <p class="card-text pt-2" >{card.catnameeng}</p>
                    </div>
                    <a class="link" href="#list-item-1">
                 
              <img  style={{ "width":"70px", "height":"70px" }} className="card-img-top horizontal-image mt-4" src={card.cat_image} alt="Card image cap" />
                    
                    </a>
                    </div>
                  </div>
                 
                </>
               );
            })
          : ""} 
      </div>
    </>
  );
}
