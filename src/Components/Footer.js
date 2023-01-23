import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <FirstFooter>
      <address>
        <b>Visit us at:</b> <br /> Enugu
        <br />
        no 1 Court Road GRA Nsukka, <br /> NIGERIA
      </address>
      <course>
        <b>Training :</b>
        <br />
        Front-End wed-Dev <br />
        Back-End Wed-Dev
        <br />
        Smart-Contract Dev
      </course>

      <handle1>
        <img src="./images/logo-linkedin.svg" alt="linked-in" />
      </handle1>
      <handle1>
        <img src="./images/logo-github.svg" alt="git" />
      </handle1>
      <handle1>
        <img src="./images/logo-twitter.svg" alt="twitter" />
      </handle1>
    </FirstFooter>
  );
}

export default Footer;

const FirstFooter = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  font-size: 1.1rem;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 6rem;
  overflow-x: hidden;
  color: black;

  handle1 {
    img {
      width: 2rem;
      height: 4rem;
      justify-items: center;
      margin-top: 0.92rem;
      background-color: white;
      border-radius: 100%;
      padding: 0 0.5rem;
    }
  }
`;
