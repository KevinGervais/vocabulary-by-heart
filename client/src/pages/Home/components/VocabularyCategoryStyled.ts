import { shadeEffect } from "@/styles/mixins"
import styled from "styled-components"

export const VocabularyCategoryStyled = styled.div<{}>`
  display: flex;
  align-items: center;
  padding:10px;
  border-radius: 10px;
  margin: 15px 0;
  width: 23%;
  max-width: 500px;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.3);
  background: ${() => window.theme.isDark ? window.theme.grey900 : "white"};
  ${() => shadeEffect(window.theme.isDark ? "grey800" : "grey50", "background", !window.theme.isDark ? { incrementation: [50, 150] } : undefined)}
  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
    & > svg {
      margin-left: 10px;
       height: 20px;
       color: ${() => window.theme.isDark ? window.theme.secondary300 : window.theme.secondary500};
     }
  }
  .vertical-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .card-list {
    display: flex;
  }
  .card-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 40px;
    width: 60px;
    font-size: 24px;
    background: ${() => window.theme.isDark ? window.theme.grey800 : window.theme.grey200}55;
    backdrop-filter: blur(2px);
    border-radius: 5px;
    border:  1px solid ${() => window.theme.isDark ? "black" : window.theme.secondary100};
    &:first-child {
      z-index: 3;
      transform: scale(1.15);
    }
    &:nth-child(2) {
      margin-left: -15px;
      z-index: 2;
      transform: scale(1.1);

    }
    &:nth-child(3) {
      margin-left: -15px;
      transform: scale(1.05);
      z-index: 1;
    }
    &:last-child {
      font-size: 18px;
      margin-left: -15px;
      z-index: 0;
      background: ${() => window.theme.isDark ? window.theme.grey800 : window.theme.secondary50};
      color: ${() => window.theme.isDark ? window.theme.grey800 : window.theme.secondary200};
    }
  }

  @media screen and (max-width: 1500px) {
    width: 30%;
  }
  @media screen and (max-width: 950px) {
    width: 45%;
  }
  @media screen and (max-width: 650px) {
    max-width: none;
    width: 95%;
  }

`