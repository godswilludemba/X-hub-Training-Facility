import React from "react";
import styled from "styled-components";
import RoomHeader from "./RoomHeader";
import Featured from "./Featured";

function HomeRoomList() {
  return (
    <RoomContainer>
      <RoomHeader />
      <Featured />
    </RoomContainer>
  );
}

export default HomeRoomList;
const RoomContainer = styled.div``;
