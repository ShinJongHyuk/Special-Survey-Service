import styled, {css} from 'styled-components'


const Top_Option_Container = styled.div.attrs({})`
    display :flex;
    justify-content : center;
    width : 100%;
    position : absolute;
    top : 10%;
`


const Toggle_Component = styled.button.attrs<any>((props) =>({
    isSelected : props.isSelected
}))`
    cursor: pointer;
    display: flex;
    /* width: 70px; */
    height: 50px;
    border: none;
    
    background-color: white;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};

    ${(props) => {
      const type = props.type
      if (props.isSelected) {
        return css`
        border-bottom: 2px solid ${props => type === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange};
        color: ${props => type === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange};
    `
    }
  }}
    
`;
const StyledTag = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const type = props.surveyCategoryType;

    const lightpurple = "linear-gradient(0deg, rgba(168, 140, 255, 0.2) 0%, rgba(168, 140, 255, 0.2) 100%), #fff";
    const lightyellow = "linear-gradient(0deg, rgba(255, 241, 41, 0.30) 0%, rgba(255, 241, 41, 0.30) 100%), #FFF";
    const bgcolor = type === "NORMAL" ? lightpurple : lightyellow;

    const bcolor = type === "NORMAL" ? "rgba(168, 140, 255, 0.10)" : "rgba(255, 241, 41, 0.20)";
    const color = type === "NORMAL" ? props.theme.colors.blue : props.theme.colors.orange;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    return css`
      display: flex;
      padding: 2px 6px 2px 4px;
      align-items: center;
      gap: 1.5px;
      border-radius: 6px;
      border: 0.7px solid ${bcolor};
      background: ${bgcolor};

      .type-text {
        font-family: ${font};
        font-size: ${xsmall};
        color: ${color};
      }
    `;
  }};
`;

const Top_Option = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-right: 5px;

`

export {Top_Option_Container,Toggle_Component, StyledTag, Top_Option}