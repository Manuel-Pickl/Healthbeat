import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 104px;
  margin-right: 104px;

  .grid-container {
    display: grid;
    grid-template-columns: 40% 3% 35% 3% auto;
    width: 854px;
    align-items: center;
    //justify-content: left;
    gap: 10px;
    //background-color: #2196f3;
    //padding: 10px;
  }

  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    align-items: center;
    //justify-content: center;
    text-align: left;
    //padding: 20px 0;
  }

  & h1 {
    text-align: center;
    margin-bottom: var(--gap-40);
    margin-top: var(--gap-40);
  }
  & h2 {
    text-align: center;
  }

  #VideoBackground {
    width: 854px;
    height: 360px;
    border-radius: 5px;
    text-align: center;
    background-color: var(--clr-backgroundPic);
    margin-bottom: 32px;
  }

  .uebungsbeschreibung {
    width: 854px;
    height: 154px;
  }

  #desc {
    margin-top: 16px;

    width: 854px;
    height: 154px;
    background-color: var(--clr-background);
    border-radius: 5px;
  }

  #exName {
    color: var(--clr-primary);
  }

  #difficult {
    color: var(--clr-difficulty);
  }

  #uebungsbesch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    //width: 246px;
    min-width: 120px;
    height: 50px;

    cursor: pointer;
    background: var(--clr-primary);
    color: white;
  }
`
