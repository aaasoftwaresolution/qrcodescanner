import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from 'react-use-cart';
import "../styles/horizontal.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

export default function DeliveryScreen() {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    metadata,
    setCartMetadata,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(true);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const [dispatchTime, setDispatchTime] = React.useState(moment());

  const handleValueChange = value => {
    setDispatchTime(value);
    console.log("value" + value);
    
      setCartMetadata({"Pickup Time":value})
  };

  return (
    <div>
      <div className="container2">
        <h5 class="font-color p-3 text-center">Order Type</h5>
        <div className="container2">
          <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div class="card-body ">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              disabled
                              
                            />
                            <label
                            class="form-check-label p-1 font-color"
                            for="flexCheckDefault "
                            style={{fontSize:"13px",fontWeight:"700"}}
                            >
                              Delivery
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between p-3">
                          <div className="text-center font-color" style={{fontSize:"15px"}}>To get order delivered to your location</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve2 shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              onClick={() => setShow((prev) => !prev)} 
                              style={{padding:"10px"}}

                            />
                            <label
                              class="form-check-label p-1 font-color"
                              for="flexCheckDefault "
                              style={{fontSize:"13px",fontWeight:"700"}}
                            >
                              Pickup
                            </label>
                          </div>
                          
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div className="text-center font-color" style={{fontSize:"15px"}}>To get your order ready before you arrive</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <h5 class="font-color1 p-3 text-left">Select pickup time :</h5>
        )}

        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height">
              {/* horizontal time card  */}

              {show && (
                <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                  <div
                    class="row flex-nowrap overflow d-flex justify-content-center mb-5"
                    onClick={handleClick}
                  >
                    {/* <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text" id="10" onClick={(e)=>{
      setCartMetadata({"Pickup Time":e.target.id})}}>pizzadfsdfsdf</p>
                    </div>
                    <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text">Burger</p>
                    </div>

                    <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text">Drinks</p>
                    </div>
                    <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text">pizza</p>
                    </div>
                    <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text">Drinks</p>
                    </div>
                    <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text">pizza</p>
                    </div>
                    <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                      <p class="card-text">pizza</p>
                    </div> */}
                    <TimePicker
        value={dispatchTime}
        onChange={handleValueChange}
        showSecond={false}
        allowEmpty
      />
                  </div>
                </div>
              )}

              {/* horizontal time card end  */}
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div className="d-flex justify-content-between p-3">
                <div className="">Net Total</div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1"></div>
        {/* <div className="container2">
        <form>
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
  </div>
</form>
        
      </div> */}
        <div className="container2">
          <div className=" fixed-bottom p-3">
            <div className="d-flex justify-content-center">
            <a href="https://wa.me/+918606783324/?text=urlencodedtext"  className=" content-footer"
                style={{
                  backgroundColor: isActive ? "green" : "rgb(83, 94, 121)",
                  color: isActive ? "white" : "white",
                }}>
             
                {" "} 
                Send Order to Whatsapp
             </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
