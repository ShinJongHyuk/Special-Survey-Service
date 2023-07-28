
import styled, { css } from "styled-components";


const StyledList = styled.div`
  display: grid;
  margin: 10px 50px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  justify-content: start;
  grid-gap: 2rem;
`
const StyledSortingMethodList = styled.div`
    display: flex;
    width: 100%;
    padding: 18px;
    justify-content: center;
    align-items: center;
    gap: 65px;
`
export { StyledList, StyledSortingMethodList }