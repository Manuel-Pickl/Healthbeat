import styled from "styled-components"

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
