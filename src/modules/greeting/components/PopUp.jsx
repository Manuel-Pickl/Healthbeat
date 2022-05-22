import React, { useState } from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  border: 10px solid black;
  ${props => console.log(props)}
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 10px solid black;
`

export default function PopUp({ content }) {
  const [show, setShow] = useState(false)

  return !show ? (
    <button onClick={() => setShow(!show)}>Show</button>
  ) : (
    <>
      <Container
        show={show}
        className="unsichtbar"
        onClick={() => setShow(false)}
      >
        <Content className="popup">
          <p className="text">{content}</p>
          <button className="okay" onClick={() => setShow(false)}>
            Okay
          </button>
        </Content>
      </Container>

      <button onClick={() => setShow(!show)}>Show</button>
    </>
  )
}
