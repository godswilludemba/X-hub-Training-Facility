import React from "react";
import styled from "styled-components";

const Featured = () => {
  return (
    <Container>
      <ContentImg>
        <featuredItem>
          <img
            src="https://images.pexels.com/photos/7601116/pexels-photo-7601116.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="title">
            <h1>Masters </h1>
            <h2>Better place for efficiency</h2>
          </div>
        </featuredItem>

        <featuredItem>
          <img
            src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="title">
            <h1>Masters </h1>
            <h2>Better place for efficiency</h2>
          </div>
        </featuredItem>

        <featuredItem>
          <img
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="title">
            <h1>Masters </h1>
            <h2>Better place for efficiency</h2>
          </div>
        </featuredItem>
        <featuredItem>
          <img
            src="https://images.pexels.com/photos/7601116/pexels-photo-7601116.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="title">
            <h1>Masters </h1>
            <h2>Better place for efficiency</h2>
          </div>
        </featuredItem>

        <featuredItem>
          <img
            src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="title">
            <h1>Masters </h1>
            <h2>Better place for efficiency</h2>
          </div>
        </featuredItem>

        <featuredItem>
          <img
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="title">
            <h1>Masters </h1>
            <h2>Better place for efficiency</h2>
          </div>
        </featuredItem>
      </ContentImg>
    </Container>
  );
};

export default Featured;
const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ContentImg = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 4fr) minmax(100px, 4fr) minmax(
      100px,
      4fr
    );
  gap: 1rem;
  width: 100%;
  max-width: 1024px;

  .featuredImg {
    width: 100%;
    max-width: 1024px;
    object-fit: cover;
  }
`;
