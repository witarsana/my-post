import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import ListMenu from './components/ListMenu';
import CalculateBox from './components/CalculateBox';
import Styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import * as theme from './styled/theme';


const Container = Styled.div`
  display :flex;
  width : 100vw;
  height : 92vh;
`
const MenuContainer = Styled.div`
  width : 15%;
  padding : 0.5rem 0;
  padding-rigth : 0.5rem;
`

const ProductContainer = Styled.div`
  width : 60%;
  height : 100%;
  background : ${props => props.theme.light};
  border-left : 1px solid #f7f7f7;
  border-right : 1px solid #f7f7f7;
  padding : 0.5rem 0.5rem;
  display : flex;
  flex-wrap : wrap;
  justify-content : space-between;

`

const CartContainer = Styled.div`
  width : 25%;
  padding : 0.5rem 0.5rem;
  
`

const App = () => {
  const category = useSelector(state => state.product.category)
  const products = useSelector(state => state.product.products).filter(pd => {
    if (category === 'favorite') return pd;
    if (pd.category === category) return pd;
    return null;
  })

  const carts = useSelector(state => state.product.cart);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu></ListMenu>
        </MenuContainer>
        <ProductContainer>
          {products.map(product =>
            <ProductCard key={product.id} item={product} />
          )}
        </ProductContainer>
        <CartContainer>
          <p>{carts.length > 0 ? `${carts.length}` : `No item in cart`}</p>
          {carts.map(item =>
            <CartItem key={item.id} item={item} />
          )}

          <CalculateBox />
        </CartContainer>
      </Container>
    </ThemeProvider>

  );
}

export default App;
