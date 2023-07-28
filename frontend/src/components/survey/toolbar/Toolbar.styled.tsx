import styled, {css} from 'styled-components';

type ToolbarType = {
    height : any
}

const ToolbarBox = styled.div.attrs<ToolbarType>((props) => ({
    height : props.height,
  }))`
  
    display: flex;
    flex-direction: column;
    width: 56px;
    height: 200px;
    margin-left: 20px;
    margin-top: 100px;
    border-radius: 100px;
    background-color: black;
    position: absolute;
    left: 70%;
    top: ${({ height }) => (height - 500 >= 0 ? height - 500 : -100)}px;
  `;
  
  const Toolbar_InnerBox = styled.div.attrs({})`
    display: flex;
    width: 56px;
    height: 56px;
    border: none;
    padding: 30px 18px;
  `;
  
  export { ToolbarBox, Toolbar_InnerBox };