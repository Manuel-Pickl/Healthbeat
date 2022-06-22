import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 104px;
  margin-right: 104px;
  margin-top: 64px;
  margin-bottom: 64px;

  .grid-container {
    display: grid;
    grid-template-columns: 16% auto;
    width: 854px;
    border-radius: 5px;
    align-items: center;
    //justify-content: left;
    gap: 10px;
    background-color: var(--clr-background);
    padding: 16px;
  }

  .grid-container > div {
    text-align: left;
    padding: 8px;
  }

  #finish {
    //text-align: center;
    margin-top: 32px;
    padding-left: 200px;
  }
`
