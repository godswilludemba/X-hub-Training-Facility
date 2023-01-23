import styled from "styled-components";
import ApartmentNav from "./ApartmentNav";
import Header from "./Header";
import ApartmentBody from "./ApartmentB";

const Apartment = () => {
  return (
    <Container>
      <ApartmentNav />
      <Header />
      <ApartmentBody />
    </Container>
  );
};
export default Apartment;

const Container = styled.div``;
