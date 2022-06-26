import styled from "styled-components"

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 90px);
  max-width: var(--desktop-max-width);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  button {
    margin-left: var(--gap-48);
    padding: 0 var(--gap-40);
    svg {
      margin-left: var(--gap-16);
    }
  }
`
