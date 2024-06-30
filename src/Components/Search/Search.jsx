import React, { useState } from "react";

//! imported icon -----------
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

 
import { Button, Flex, Radio, Select, Space } from 'antd';
import metro from "../../assets/metro.png";
import suha from "../../assets/suha.png";
 

// import { RxCalendar } from "react-icons/rx";
// date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
    {value: "Rangpur", label: "Rangpur"},
{value: "Dhaka", label: "Dhaka"},
{value: "Rajshahi", label: "Rajshahi"},
{value: "Mymensingh", label: "Mymensingh"},
{value: "Khulna", label: "Khulna"},
{value: "Chittagong", label: "Chittagong"},
{value: "Barisal", label: "Barisal"},
{value: "Sylhet", label: "Sylhet"}
];


const searchBus = (from,to,date ) => {
  console.log(`clicked ${from} ${to} ${date}`);
};

 function Search() {
  // dropdown section 
  const [searched, setSearched] = useState(false);

  const [date, setDate] = useState(new Date());
  const [selectedStartLocation, setSelectedStartLocation] = useState('Rangpur');
 
  const startLocationHandleChange = (event) => {
    console.log(event);
    setSelectedStartLocation(event);
  };
  const [selectedDestinationLocation, setDestinationStartLocation] = useState('Mymensingh');
 
  const destinationLocationHandleChange = (event) => {
    console.log(event);
    setDestinationStartLocation(event);
  };

  return (
    <div>
      <div className="search container section ">
        <div className="sectionContainer grid">
          <div className="btns flex">
            <div className="singleBtn">
              <span>Business Class Trip</span>
            </div>

            <div className="singleBtn">
              <span>Air Conditioning supported</span>
            </div>

            <div className="singleBtn">
              <span>Non-AC</span>
            </div>
          </div>

          <div className="searchInputs flex ">
            {/* signle input section one  */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
              </div>
              <div className="texts">
                <h5>From</h5>
                {/* <input type="text " placeholder="Enter City" /> */}
                <form> 
                    <Select size="large" 
                    name="start_location"
                    placeholder="Select start location"                 
                    value={selectedStartLocation}
                    onChange={startLocationHandleChange} 
                    options={options}
                    style={{width: 200,}} 
                    />
                </form>
              </div>
            </div>
            {/* signle input section Two */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
              </div>
              <div className="texts">
                <h5>To</h5>
                
                <form>
                <Select size="large" 
                  name="destination"                              
                  placeholder="Select destination location"                 
                  value={selectedDestinationLocation}
                  onChange={destinationLocationHandleChange}                 
                  style={{width: 200,}}
                  options={options}
                />
                  
                </form>

                {/* dropdown second section end  here  */}
              </div>
            </div>
            {/* signle input section Three */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <SlCalender className="icon"></SlCalender>
              </div>
              <div className="texts">
                <h5>Date of Journey</h5>
                {/* <input type="text " placeholder="Pick a date" /> */}

                {/* <div>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div> */}
                <div>
                  <DatePicker
                    showTimeSelect
                    minTime={new Date(0, 0, 0, 12, 30)}
                    maxTime={new Date(0, 0, 0, 19, 0)}
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
              </div>
            </div>
            {/* signle input section Four */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <SlCalender className="icon"></SlCalender>
              </div>
              <div className="texts">
                <h5>Date of Return (Optional) </h5>
                {/* <input type="text " placeholder="Pick a date" /> */}

                {/* <div>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div> */}
                <div>
                  <DatePicker
                    showTimeSelect
                    minTime={new Date(0, 0, 0, 12, 30)}
                    maxTime={new Date(0, 0, 0, 19, 0)}
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
              </div>
            </div>

            {/* btn section  */}
          </div>
          <div>
            <div className="btns">
            <Button className="btn btnBlock flex" type="primary" onClick={
              () =>{
                 searchBus(selectedStartLocation,selectedDestinationLocation,date);
                 console.log("button clicked");
                 setSearched(true);
              }              
              }>Find Specific Bus Info</Button>

          
            </div>
          </div>
        </div>
      { 
        searched&&          
            <img class="logo" src={metro} alt="Metro Turizm"
            width={25} height={25} /> 
        }
      </div>
    </div>
  );
}

export default Search;
