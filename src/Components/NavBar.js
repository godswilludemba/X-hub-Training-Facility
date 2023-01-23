import styled from "styled-components";

const NavBar = (props) => {
  return (
    <NavRaper>
      <Nav>
        <Logo />
        <menu>
          <a href="/bookings" alt="Bookings">
            Bookings
          </a>
          <a href="/login" alt="conference">
            Conference
          </a>
          <a href="/login" alt="Apartment">
            Apartment
          </a>
          <a href="." alt="About us">
            About-us
          </a>

          <button href="" alt="Contact">
            Contact
          </button>
        </menu>
      </Nav>
    </NavRaper>
  );
};

export default NavBar;

const NavRaper = styled.div`
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #74c0fc;
  position: fixed;
  width: 100%;
  min-width: 768px;
  height: 10vh;

  menu {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;

    & > a {
      margin: 0 3rem;
      text-decoration: none;
      color: white;
      transition: all 200ms;

      &:hover {
        box-shadow: 0.2rem 0.1rem 0.05rem rgba(0, 0, 0, 0.8),
          0.3rem 0.1rem 0 white;
        padding: 0.25rem 0.7rem;
        border-radius: 0.2rem;
        color: black;
      }
    }

    button {
      padding: 0.5rem 2rem;
      background-color: white;
      color: black;
      font-size: 1rem;
      margin: 0 5rem 0 5rem;
      border: none;
      border-radius: 0.2rem;
      transition: all 500ms;

      &:hover {
        color: white;
        background-color: black;
        box-shadow: 0.2rem 0.1rem 0.05rem white,
          0.3rem 0.1rem 0 rgba(2, 0, 2, 0.6);
      }
    }

    @media (max-width: 760px) {
      font-size: 0.8rem;
      ${"" /* flex-wrap: wrap; */}
      button {
        margin-left: 1rem;
      }
    }
  }
`;
const Logo = styled.div`
  box-shadow: none;
  background-image: url("./images/logo.png");
  width: 7rem;
  height: 3.1rem;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 6rem;
  background-repeat: no-repeat;
  border: 1px solid #1aa7ec;
  ${"" /* margin: -38px auto 12px; */}
  border-radius: 42%;
  float-left: 1.5rem;
  margin: 0.6rem 2rem 1rem 2rem;
`;
