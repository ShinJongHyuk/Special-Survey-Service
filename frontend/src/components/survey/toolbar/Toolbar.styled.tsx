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
    border-radius: 100px;
    box-shadow : 2px 2px 2px 2px ${props => props.theme.colors.lightgray} ;
    background-color: ${props => props.theme.colors.lightpurple};
    border : 3px solid ${props => props.theme.colors.purple};
    position: absolute;
    right: calc(100% + 10px); /* 컨테이너 옆에 항상 붙도록 설정, 여유 공간인 10px 추가 */
    top: ${({ height }) => (height > 320 ? height : 320)}px;
  `;
  
  const Toolbar_InnerBox = styled.div.attrs({})`
    display: flex;
    width: 56px;
    height: 56px;
    border: none;
    padding: 27px 9.8px;
  `;
  
  export { ToolbarBox, Toolbar_InnerBox };