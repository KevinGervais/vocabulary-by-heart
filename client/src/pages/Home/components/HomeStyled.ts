import { center, clickable, shadeEffect } from "@/styles/mixins"
import styled from "styled-components"

export const HomeStyled = styled.div<{}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  .add-button {
    ${center};
    ${clickable};
    position: absolute;
    left: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.3);
    ${() => shadeEffect(window.theme.isDark ? "secondary300" : "secondary500", "background")}
    svg {
      color: ${() => window.theme.isDark ? window.theme.primary50 : "white"};
      height: 20px;
    }
  }
  .toggle {
    margin-left: 0px;
  }
  .input {
    position: absolute;
    left: 30px;
    bottom: 30px;
    display: flex;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.3);
    border-radius: 9999px;
    flex-shrink: 0;
    overflow: hidden;
    input {
      width: 200px;
      height: 50px;
      padding: 0 20px;
      background: ${() => window.theme.grey100};
      transition: 0.3s all ease-in-out;
      &::placeholder {
        color: ${() => window.theme.grey400};
      }
      &:nth-child(2) {
        width: 70px;
        background: ${() => window.theme.grey200};
      }
    }
    svg {
      ${clickable};
      height: 20px;
      padding: 15px 20px;
      color: white;
      ${() => shadeEffect(window.theme.isDark ? "secondary300" : "secondary500", "background")}
    }
  }

  .category-list {
    display: flex;
    justify-content: space-evenly;
    overflow: scroll;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 100px;
  }
  .right-icon {
    ${center};
    ${clickable};
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.3);
    color: white;
    ${() => shadeEffect(window.theme.isDark ? "secondary300" : "secondary500", "background")}
    svg {
      margin-left: 5px;
      color: ${() => window.theme.isDark ? window.theme.primary50 : "white"};
      height: 20px;
    }
  }
`