import styled from "styled-components"

export const Abos = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto; /* drei Spalten */
  grid-gap: 0px 48px; /* Zeilenabstand Spaltenabstand */

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 64px;

  & > div:first-of-type {
    max-width: 710px;
    margin-bottom: 48px;
  }

  & > div {
    display: flex;

    & > :first-child {
      margin-right: 48px;
    }
  }
`

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

  & article,
  & section {
    margin-bottom: var(--gap-32);
  }
`
