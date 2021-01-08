import logo from './logo.svg';
import './App.css';
import Styled, { ThemeProvider } from 'styled-components';

const theme = {
    primary: 'red',
    secondary: 'blue'
}

const Container = Styled.div`
  text-align : center;
`;

const Head = Styled.h1`
  color : ${props => props.theme.secondary};
`;

const Brand = Styled.img`
  height : 10vh;
  margin-top : 2rem;
`

const Button = Styled.button`
  color : white;
  background : ${props => props.primary ? 'blue' : 'green'};
  padding : 0.5rem 1rem;
  border : none;
  margin : 0 1rem;
`

const TomattoButton = Styled(Button)`
  background : tomato;
`

const Wrapper = Styled.div`
  background : yellow;
  &.test{
    background : orange;
  }
`

const AnotherButton = Styled.button`
  ${props => {
        switch (props.variant) {
            case "primary":
                return `background : blue`
            case "success":
                return `background : green`
            default:
                return `background : gray`
        }
    }}
`

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Brand src={logo} alt="logo" />
                <Head>Styled Component</Head>
                <Button>primary</Button>
                <Button primary>primary</Button>
                <TomattoButton>My Tomatto</TomattoButton>
                <Wrapper>biasa</Wrapper>
                <Wrapper className="test">with classname</Wrapper>
                <AnotherButton variant="primary">Primary</AnotherButton>
                <AnotherButton variant="success">Success</AnotherButton>
                <AnotherButton >Default</AnotherButton>
            </Container>
        </ThemeProvider>
    );
}

export default App;
