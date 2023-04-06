import React from "react";
import styled from "styled-components";

const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <div>
        <a
          class="main-button"
          href="https://discord.com/invite/VKmS2bVsmh"
          target="_blank"
          rel="noreferrer"
        >
          SISENE
        </a>
      </div>
    </SocialMediaStyled>
  );
};

const SocialMediaStyled = styled.div`

 
  }
  .main-button {
    background-color: rgb(247, 223, 30);;
    border: 1px solid rgb(247, 223, 30);;
    color: #000;
    font-weight: 700;
    width: -webkit-max-content;
    width: max-content;
    padding: 13px 22px;
    margin-right: 50px;
    text-transform: uppercase;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    font-size: 30px;
    cursor: pointer;
    transition: all .3s ease-in-out 0s;
}
`;

export default SocialMedia;
