import styled from "styled-components"

export const GridContainer3 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto; /* drei Spalten */
  grid-gap: 0px 48px; /* Zeilenabstand Spaltenabstand */
  margin-left: 104px;
  margin-right: 104px;
  margin-bottom: 64px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
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
