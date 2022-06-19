import styled from "styled-components"

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  min-width: 120px;
  height: 48px;
  padding: 0 8px;
  cursor: pointer;
  background: var(--clr-primary);
  color: white;

  & svg {
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background: var(--clr-hover);
    color: white;
    border-color: var(--clr-hover);

    svg > * {
      fill: white;
    }
  }
`
