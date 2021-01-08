import React, { useState } from 'react';
import Styled from 'styled-components';
import Counter from './Counter';
import { inc, dec, removeFromCart } from '../store/actions/product';
import { useDispatch } from 'react-redux'

const Cart = Styled.div`
    display : flex;
    width : 95%;
    justify-content : space-between;
    align-items : center;
    height : 3rem;
    padding : 0 0.3rem;
    margin : 0.5rem auto;
    background : #fff;
    box-shadow : 1px 1px 10px 1px #ccc;
`
const CounterContainer = Styled.div`
    display : flex;
    width : 30%;
    text-align:center
`
const ItemName = Styled.div`
    width : 40%;
    padding-left : 0.5rem;
`
const Price = Styled.div`
    width : 30%;
    text-align : center;
`
const CounterTotal = Styled.div`
    margin : 0 0.3rem;
`

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const increment = id => {
        setCount(count + 1);
        dispatch(inc(id))
    }

    const decrement = id => {
        setCount(count - 1)
        if (count > 1) dispatch(dec(id));
        else if (count === 1) dispatch(removeFromCart(id));

    }
    return (
        <Cart>
            <ItemName>{item.name}</ItemName>
            <CounterContainer>
                <Counter inc={() => { increment(item.id) }} />
                <CounterTotal> {count}</CounterTotal>
                <Counter dec={() => { decrement(item.id) }} />
            </CounterContainer>
            <Price>
                {item.price}
            </Price>
        </Cart>
    )
}

export default CartItem;