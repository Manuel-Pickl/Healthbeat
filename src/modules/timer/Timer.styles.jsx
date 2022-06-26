import styled, { css } from "styled-components"

export const TimerContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  z-index: -1;

  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: var(--clr-disabled);
  }

  p {
    position: absolute;
    width: 300px;
    height: 275px;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & span:first-child {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      margin-bottom: var(--gap-8);
      svg {
        width: 35px;
        margin-top: -8px;
        margin-right: var(--gap-16);
      }
    }

    & span:last-child {
      font-size: 60px;
    }
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
