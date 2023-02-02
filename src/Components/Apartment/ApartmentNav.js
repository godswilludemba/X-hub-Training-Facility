import styled from "styled-components";

const ApartmentNav = () => {
  return (
    <NavWrapper>
      <Nav>
        <logo>
          <p>X-Hub-Bookings</p>
        </logo>
        <NavItems>
          <a href="/room">
            <button>Register</button>
          </a>

          <a href="/login">
            <button>Login</button>
          </a>
        </NavItems>
      </Nav>
    </NavWrapper>
  );
};
export default ApartmentNav;

const NavWrapper = styled.div`
  height: 4rem;
  background-color: #74c0fc;
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  logo {
    font-weight: 700;
    font-size: 1.3rem;
  }
`;

const NavItems = styled.div`
  button {
    margin-left: 2rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: #003580;
  }
`;
