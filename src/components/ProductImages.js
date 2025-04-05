import { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0].med);

  const onImageClick = (i) => {
    setMainImage(images[i].med);
  };

  return (
    <Wrapper>
      <div className="image">
        <div className="main_image">
          <img src={mainImage} alt="" />
        </div>
        <div className="images">
          {images.map((item, i) => {
            return (
              <div
                key={i}
                className={`secondary_image ${item.med === mainImage ? "active" : null}`}
                onClick={() => onImageClick(i)}
              >
                <img src={item.small} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image .main_image {
    overflow: hidden;
    border-radius: var(--radius);
  }
  .image .main_image img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    display: block;
  }
  .images {
    display: flex;
    gap: 15px;
    margin-top: 17px;
    align-items: center;
  }
  .secondary_image {
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius);
  }
  .secondary_image.active {
    border: 3px var(--clr-primary-5) solid;
    box-sizing: border-box;
  }
  .secondary_image img {
    width: 100%;
    height: 50px;
    object-fit: cover;
    display: block;
  }
  @media (min-width: 576px) {
    .image .main_image img {
      height: 400px;
    }
    .secondary_image img {
      height: 70px;
    }
  }
`;

export default ProductImages;
