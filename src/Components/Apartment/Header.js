import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLaptop,
  faPeopleGroup,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeadWrapper>
      <HeaderList>
        <HeaderContainer>
          <HeaderListItems>
            <a href="/login">
              <FontAwesomeIcon icon={faBed} />
              <p>Check-In</p>
            </a>
          </HeaderListItems>
          <HeaderListItems>
            <a href="/login">
              <FontAwesomeIcon icon={faLaptop} />
              <p>Training</p>
            </a>
          </HeaderListItems>
          <HeaderListItems>
            <a href="/login">
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>Conference</p>
            </a>
          </HeaderListItems>
          <HeaderListItems>
            <a href="/login">
              <FontAwesomeIcon icon={faPersonChalkboard} />{" "}
              <p>Hire-A-Facilitator</p>
            </a>
          </HeaderListItems>
        </HeaderContainer>

        <h1>unlock your tech skill | is genuine</h1>
        <p className="span">
          Welcome to tech Solution and training environment
        </p>

        <button className="header-button">Login/SignIn</button>
      </HeaderList>
    </HeadWrapper>
  );
};

export default Header;

const HeadWrapper = styled.div`
  background-color: #74c0fc;
  color: white;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0.7rem 3rem 1rem 0rem;
  display: flex;
  gap: 4rem;
`;

const HeaderList = styled.div`
  h1 {
    font-size: 2rem;
    color: black;
    letter-spacing: 0.1rem;
    margin-top: 0.2rem;
  }
  & > .span {
    font-size: 1rem;
    font-weight: 300;
    position: relative;
    top: -0.8rem;
    margin-top: 0.5rem;
  }

  .header-button {
    border: none;
    padding: 1rem 1.5rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    background-color: #74d1fc;
    border-radius: 2.5rem;
    position: relative;
    top: -0.8rem;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: all 99ms;

    &:hover {
      box-shadow: 0.1rem 0 0.2rem rgba(0, 0, 0, 0.9),
        0 0.2rem 0.1rem rgba(0, 0, 0, 0.6);
      color: #000;
    }
  }
`;

const HeaderListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
  }

  &:nth-child(1) {
    border: 0.1rem solid #fff;
    padding: 0.5rem 1.8rem;
    border-radius: 2.5rem;

    &:hover {
      color: #000;
      test-decoration: none;
      box-shadow: 0.1rem 0 0.2rem rgba(0, 0, 0, 0.9),
        0 0.2rem 0.1rem rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  }
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
