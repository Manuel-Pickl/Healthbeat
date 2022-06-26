import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: calc(${props => props.top}px - var(--gap-16));
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  max-width: 500px;

  section {
    display: flex;
    flex-direction: column;
    align-items: left;
    background: var(--clr-popup);
    padding: var(--gap-16);
    margin-bottom: var(--gap-16);
    border-radius: 5px;

    &:last-child {
      margin-bottom: 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: var(--gap-16);
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    input {
      z-index: 1;
      width: 25px;
      height: 25px;
    }

    label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    span {
      padding: 0 var(--gap-16);
    }
  }
`
