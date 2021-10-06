import {createGlobalStyle} from "styled-components";
import {useSelector} from "react-redux";

const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    &, &:before, &:after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({color}) => color};
  }
`

export const GlobalStyles = () => {
  const colors = useSelector((state) => state.mode.colors)

  return (
    <Styles color={colors.secondary} />
  )
}