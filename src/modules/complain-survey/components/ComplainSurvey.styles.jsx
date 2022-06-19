import styled from "styled-components"

export const SVGContainer = styled.div`
  height: 321px;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const GridContainer = styled.div`
  background: var(--clr-background);
  margin: auto;
  width:500px;
  height:650px;
`

export const NewInput = styled.input`
z-index: 1;
cursor: pointer;
width: 25px;
height: 25px;
margin-right: 10px;
&:hover,
&:focus {
  background: var(--clr-hover);
  border-color: var(--clr-hover);
  color: var(--clr-hover);
}
`

export const SurveyHeader = styled.div`
  text-align: center;

`
