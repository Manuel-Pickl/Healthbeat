import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 104px;
  margin-right: 104px;
  margin-bottom: 64px;

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
