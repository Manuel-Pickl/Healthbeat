import styled from "styled-components"

export const Abos = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto; /* drei Spalten */
  grid-gap: 0px 48px; /* Zeilenabstand Spaltenabstand */
  margin-left: 104px;
  margin-right: 104px;

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

export const GridContainer4 = styled.div`
  display: grid;
  //align-items: center;
  grid-template-columns: auto auto auto auto; /* drei Spalten */
  grid-gap: 0px 48px; /* Zeilenabstand Spaltenabstand */
  margin-top: 40px;
  margin-bottom: 64px;
  margin-left: 104px;
  margin-right: 104px;

  @media only screen and (max-width: 834px) {
    grid-template-columns: 100%;
  }

  @media only screen and (max-width: 360px) {
    grid-template-columns: 100%;
  }
`

export const GridContainer2 = styled.div`
  display: grid;
  //align-items: center;
  grid-template-columns: 25% auto auto 25%; /* drei Spalten */
  grid-gap: 0px 48px; /* Zeilenabstand Spaltenabstand */
  margin-top: 40px;
  margin-bottom: 64px;
  margin-left: 104px;
  margin-right: 104px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const AboHeader = styled.div`
  text-align: center;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1,
  & h2 {
    text-align: center;
  }

  & article,
  & section {
    margin-bottom: var(--gap-64);
  }
`

export const Kontakt = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    background-color: var(--clr-background);
    padding: var(--gap-16);
    max-width: 500px;
    border-radius: 5px;
    margin-bottom: var(--gap-40);
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      width: 100vw;
      max-width: 500px;
      min-height: 150px;
      resize: none;
      margin-bottom: var(--gap-8);
      border-radius: 5px;
      padding-left: var(--gap-8);
    }

    input {
      margin-bottom: var(--gap-8);
      border-radius: 5px;
      padding-left: var(--gap-8);
    }

    input:focus,
    textarea:focus {
      border: 3px solid var(--clr-hover);
    }
  }
`
