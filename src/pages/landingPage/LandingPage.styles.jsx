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
