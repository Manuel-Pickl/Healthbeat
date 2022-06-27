import styled from "styled-components"

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: var(--gap-64);
  width: 100%;

  & h1 {
    text-align: center;
    margin-bottom: var(--gap-40);
    margin-top: var(--gap-40);
  }
  & h2 {
    text-align: center;
  }

  #exName {
    color: var(--clr-primary);
  }

  #startvideo {
    background-color: transparent;
    border: 0;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  #difficult {
    color: var(--clr-difficulty);
  }

  #skipbutton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border: 2px solid var(--clr-primary);
    border-radius: 5px;
    color: var(--clr-primary);
    background: white;
    font-weight: bold;
    min-width: 120px;
    height: 48px;
    padding: 0 8px;
    cursor: pointer;
    text-decoration: none;

    &:disabled {
      border: none;
      color: var(--clr-disabledText);
      background: var(--clr-disabled);
      cursor: auto;
    }
  }

  ul {
    text-align: left;
  }

  #uebungsbesch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    min-width: 120px;
    height: 50px;
    padding: 0 8px;
    cursor: pointer;
    background: var(--clr-primary);
    color: white;

    & svg {
      margin-top: 5px;
      margin-right: 8px;
      margin-left: 10px;
    }
  }

  & article,
  & section {
    margin-bottom: var(--gap-32);
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% + 64px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
`

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  ${Background} {
    z-index: 0;
  }

  & > * {
    z-index: 1;
  }
`

export const TimerButton = styled.button`
  div {
    z-index: 0;
  }
  background: none;
  border: none;
`
