import styled, { css } from "styled-components"

export const TimerContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;

  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: var(--clr-disabled);
  }

  .base-timer__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }

  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    stroke: var(--clr-primary);
  }

  .base-timer__svg {
    transform: scaleX(-1);
  }

  ${props => css`
    .base-timer__path-remaining {
      stroke-dasharray: ${props.d} 283;
    }
  `};
`
