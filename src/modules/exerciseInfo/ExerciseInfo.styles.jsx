import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 104px;
  margin-right: 104px;

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

  #difficult {
    color: var(--clr-difficulty);
  }
  & article,
  & section {
    margin-bottom: var(--gap-32);
  }
`
