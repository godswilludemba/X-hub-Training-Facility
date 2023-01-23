import styled from "styled-components";
import { Bounce, Flip, Slide } from "react-awesome-reveal";

const ApartmentBody = () => {
  return (
    <BodyWrapper>
      <rooms>
        <Slide>
          <img
            src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="rooms"
          />
        </Slide>
        <h1>Glamour Rooms</h1>
        <p>
          Best for your programme relaxation, collaborations and facilitation
        </p>
      </rooms>

      <conference>
        <Flip>
          <img
            src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="CONFERENCE ROOM"
          />
        </Flip>
        <h1>Our conference Room</h1>
        <p>
          We Help Young Africans Start Their Careers In Technology Best areas
          are programme relaxation, collaborations and facilitation.
        </p>
      </conference>

      <training>
        <Bounce>
          <img
            src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="training"
          />{" "}
        </Bounce>
        <h1>Our Training Center</h1>
        <p>
          Best for your programme relaxation, collaborations and facilitation
          plus all aspect of digital trainings.
        </p>
      </training>
    </BodyWrapper>
  );
};

export default ApartmentBody;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 55vh;
  max-width: 1284px;
  margin: auto;
  gap: 2rem;
  background-color: #ddd;
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;

  rooms,
  conference,
  training {
    border: 0.1rem solid rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #fff;
    width: 100%;
    height: 94%;
    position: relative;

    h1 {
      text-align: center;
      color: #74c0fc;
      margin-top: 0.2rem;
      font-size: 1.4rem;
      font-weight: 600;
      text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.6);
      letter-spacing: 0.1rem;
      position: absolute;
      top: 15rem;
      left: 21%;
    }

    p {
      text-align: center;
      margin-top: 0.1rem;
      font-size: 1rem;
      font-weight: 400;
      width: 90%;
      letter-spacing: 0.1rem;
      color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 17rem;
      bottom: 0.1rem;
    }
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: contain;
    border-radius: 0.5rem;
    opacity: 0.8;
    transition: 145ms;

    &:hover {
      opacity: 1;
      transform: translate scale(1);
    }
  }
`;
