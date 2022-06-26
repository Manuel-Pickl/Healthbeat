import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(109, 109, 109, 0.75);
  z-index: 999;

  button {
    height: 50px;
    width: 256px;
  }

  ${props =>
    props.show
      ? css`
          display: flex;
          align-items: center;
        `
      : css`
          display: none;
        `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 528px;
  min-height: 512px;
  flex-direction: column;
  margin: auto;
  background-color: var(--clr-white);
  border-radius: 5px;
  padding: var(--gap-16);

  svg {
    height: 100%;
    width: 100%;
    max-height: 292px;
    max-width: 528px;
  }

  & h1 {
    color: var(--clr-primary);
    text-align: center;
  }
`
