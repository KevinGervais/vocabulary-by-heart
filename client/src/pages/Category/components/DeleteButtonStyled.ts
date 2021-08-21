import { getOS } from "@/functions"
import { getColor } from "@/styles/getColor"
import { center, clickable, shadeEffect } from "@/styles/mixins"
import styled, { css } from "styled-components"

export const DeleteButtonStyled = styled.div<{}>`
  display: flex;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.3);
  overflow: hidden;
  border-radius: 25px;
  background: ${() => window.theme.isDark ? window.theme.grey900 : "white"};
  .left-content {
    ${center};
    ${clickable};
    width: 50px;
    height: 50px;
    border-radius: 25px;
    ${() => shadeEffect(window.theme.isDark ? "secondary300" : "secondary500", "background")}
    svg {
      color: ${() => window.theme.isDark ? window.theme.primary50 : "white"};
      height: 20px;
    }
  }
  .right-content {
    ${center};
    padding: 0 20px;
    div {
      ${center};
      ${clickable};
      padding: 0 10px;
      height: 25px;
      border-radius: 12.5px;
      border: 2px solid ${() => getColor("red", "secondary").secondary500};
      color: ${() => getColor("red", "secondary").secondary500};
      margin-left: 20px;
      ${() => ["mac", "windows"].includes(getOS()) && css`
      &:hover {
        background: ${() => getColor("red", "secondary").secondary50};
      }
    `}
    &:active {
      background: ${() => getColor("red", "secondary").secondary100};
    }
    }
  }
`