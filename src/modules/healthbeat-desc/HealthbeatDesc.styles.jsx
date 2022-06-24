import styled, { css } from "styled-components"

export const Content = styled.div`
  display: inline-block;
  background-color: var(--clr-background);
  border-radius: 5px;
  padding: 16px;
  color: var(--clr-test);
  font-weight: bold;
  width: 403px;
  height: 177px;
  text-align: left;

  h2 {
    margin: 0;
    margin-bottom: 8px;
    text-align: left;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  & svg {
    width: 100%;
    height: 100%;
    min-width: 150px;
    min-height: 150px;
    max-width: 150px;
    max-height: 150px;
    margin-right: 48px;
  }

  ${props =>
    props.right
      ? css`
          svg {
            order: 1;
            margin-left: 48px;
            margin-right: 0px;
          }
        `
      : ""}
`
