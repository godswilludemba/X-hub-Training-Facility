import React from "react";
import ApartmentNav from "../Apartment/ApartmentNav";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const RoomHeader = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Hotels>
      <ApartmentNav />
      <Input>
        <div className="headerSearchItem">
          <image>
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
          </image>{" "}
          <input
            type="text"
            placeholder="room needed"
            className="headerSearchInput"
          />
        </div>
        <div className="headerSearchItem">
          <image>
            <img src="../images/calendar.svg" alt="" />
          </image>
          <p className="headerSearchText">date to date</p>
          {/* <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          /> */}
        </div>
        <div className="headerSearchItem">
          <image>
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          </image>
          <p className="headerSearchText">
            1 frond-end dev, 1 server-side dev, 1 smart-contract dev, 1
            facilitator
          </p>
        </div>
        <button>Search</button>
      </Input>
    </Hotels>
  );
};

export default RoomHeader;

const Hotels = styled.div``;

const Input = styled.div`
  height: 3rem;
  background-color: white;
  border: 0.2rem solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1026px;
  margin: auto;
  border-radius: 0.5rem;

  img {
    width: 25px;
    height: 25px;
  }
  .headerSearchItem {
    display: flex;
    text-align: center;
    justify-content: space-around;
    gap: 0.1rem;
  }
  .date {
    position: absolute;
    top: 130px;
    background-color: black;
  }
  .headerSearchText {
    color: gray;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
  }

  button {
    border: none;
    padding: 0.7rem 1.5rem;
    font-size: 1.15rem;
    font-weight: 400;
    color: grey;
    transition: all 200ms;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
      border: 0.1rem solid #febb02;
      border-radius: 0.6rem;
    }
  }
`;
