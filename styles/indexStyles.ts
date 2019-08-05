import styled from "styled-components";
import media from "styled-media-query";

/* {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
} */

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #4d4d55;

  .home-content{
    width: 250px;
    min-height: 600px;
    margin: 50px auto;
    font-family: "Trebuchet MS";

    .name{
      width: 100%;
      padding: 5px;
      text-align: center;
      font-size: 25px;
      font-style: italic;
      color: #e5e5e5; 
      position: absolute;
      top: 170px;
      left: 0;
    }

    .contact{
      width: 100%;
      padding: 5px;
      text-align: center;
      font-size: 14px;
      color: #e5e5e5; 
      position: absolute;
      top: 220px;
      left: 0;
    }
    .social-title{
      width: 100%;
      padding: 5px;
      text-align: center;
      font-size: 14px;
      color: #e5e5e5; 
      position: absolute;
      top: 260px;
      left: 0;
    }
    .social-access{ 
      width: 100%;
      text-align: center;
      position: absolute;
      top: 300px;
      left: 0;
    }
    .social-buttons{
      width: 40px;
      height: 40px;
      opacity: 0.6;
      margin: 5px 10px;

      :hover {
        opacity: 1;
      }
    }

    .alert{
      width: 100%;
      text-align: center;
      position: absolute;
      top: 450px;
      color: #e5e5e5; 
      left: 0;
      font-style: italic;
    }
  }

  /* background: url('/static/images/metal-texture-bg.jpg') no-repeat;  */

  /* screen width is less than 768px (medium) */
  /* ${media.lessThan("medium")`
  `} */

  /* screen width is between 768px (medium) and 1170px (large) */
  /* ${media.between("medium", "large")`
  `} */

  /* screen width is greater than 1170px (large) */
  /* ${media.greaterThan("large")`
    min-width: 1170px;
    min-height: 400px;
    margin: 20px auto;
    background: blue;
  `} */
  
`;
