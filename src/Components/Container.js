import styled from "styled-components";
import { Bounce } from "react-awesome-reveal";

const Container = (props) => {
  return (
    <Body>
      <Bounce>
        <paragraph>
          <h1>
            <i>X-HubTech, We Lead the Tech World</i>
          </h1>
          <p>
            Home for Intensive Training plus Best and timely Project execution!,
            We offer the value for your time money and other things,
          </p>
          <button>Learn-More</button>
        </paragraph>
      </Bounce>

      <Image>
        <img src="./images/I.training.jpg" alt="training environment" />
      </Image>
    </Body>
  );
};

export default Container;

const Body = styled.div`
  position: relative;
  top: 5rem;
  display: flex;
  text-align: center;
  justify-content: space-around;
  width: 100vw;
  background-color: white;

  h1 {
    font-size: 1.7rem;
    font-weight: 800;
    text-decoration: underline;
    letter-spacing: 0.1rem;
    text-shadow: 0 0.3rem 0.1rem rgba(0, 0, 0, 0.3);
  }

  p {
    width: 80%;
    margin-top: 5rem;
    margin-left: 3rem;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: #74c0fc;
    text-shadow: 0rem 0.2rem 0.1rem rgba(0, 0, 0, 0.7);
  }

  button {
    flex-direction: column;
    padding: 1rem 3.5rem;
    margin-top: 3rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    transition: all 567ms;

    &:hover {
      background-color: #74c0fc;
      box-shadow: 0.1rem 0.3em 0 rgba(0, 0, 0, 0.9);
      color: white;
    }
  }
`;

const Image = styled.div`
  display: flex;
  img {
    width: 60vw;
    height: 70vh;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    margin-right: 5rem;
    margin-top: 0.9rem;
  }
`;
