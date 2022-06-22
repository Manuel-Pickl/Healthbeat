//import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-radius: 5px;
  color: var(--clr-test);
  background-color: var(--clr-background);
  font-weight: bold;
  padding: 32px 8px;
  width: 100vw;
  min-width: 300px;
  max-width: 400px;

  ul {
    list-style: none;
    padding: 0;
    margin: var(--gap-32) 0;

    li {
      border-bottom: 1px solid var(--clr-disabled);
      padding: var(--gap-16);
      margin-bottom: var(--gap--16);
      width: 150px;
      font-weight: normal;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`
