import styled from "styled-components"

export const SVGContainer = styled.div`
  height: 100%;
  max-height: 321px;
  margin: var(--gap-16) 0;
  background: white;

  & > * {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-background);
  margin: auto;
  width: 100%;
  max-width: 500px;
  padding: var(--gap-16);
  border-radius: 5px;

  ul {
    list-style: none;
    align-self: flex-start;
    padding-left: var(--gap-32);

    li {
      margin-bottom: var(--gap-16);

      &:last-child {
        margin-bottom: 0;
      }

      label {
        display: flex;
        align-items: center;
        text-align: left;
        cursor: pointer;
      }
    }
  }
`

export const Input = styled.input`
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover,
  &:focus {
    background: var(--clr-hover);
    border-color: var(--clr-hover);
    color: var(--clr-hover);
  }
`

export const Content = styled.div`
  text-align: center;
  border-radius: 5px;

  h1 {
    margin: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--gap-32);
  margin-top: var(--gap-16);

  & button:nth-child(2) {
    margin-left: auto;
    margin-right: auto;
  }

  & button:first-child {
    margin-right: var(--gap-8);
    background: transparent;
    border: 2px solid var(--clr-primary);
    display: inline-flex;
    justify-content: center;
    align-content: center;
    min-width: 50px;
    margin-right: calc(var(--gap-8) * -1);

    &:hover,
    &:focus {
      background: var(--clr-hover);
      border-color: var(--clr-hover);
      & i {
        border-color: white;
      }
    }
  }

  button i {
    border: solid var(--clr-primary);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    margin-left: var(--gap-8);
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  margin: auto;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`
