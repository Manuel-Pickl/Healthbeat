import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  ${props =>
    props.show
      ? css`
          display: flex;
          align-items: center;
        `
      : css`
          display: hidden;
        `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1%;
  border: 2px solid #e27832;
  background-color: #dfdfdf;
  border-radius: 10px;
`
export const Schließen = styled.button`
  border: 2px solid #e27832;
  border-radius: 10px;
  color: #e27832;
`
