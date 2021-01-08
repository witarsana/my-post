import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux'
import { resetCart } from '../store/actions/product';

const Box = Styled.div`
    position : fixed;
    bottom : 0;
    width : 20rem;
    height : rem;
    box-shadow : 1px 1px 10px 1px #ccc;
    padding 0.4rem;
    margin-left : -0.4rem;
`

const Total = Styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 0.8rem;
`
const Pay = Styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 0.8rem;
    input[type=number]{
        border : none;
        border-bottom : 1px solid #000;
        font-weight : bold;
        text-align : right;
        &:focus{
            outline : none;

        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button,{
            -webkit-appearance: none;
        }
    }
`

const Change = Styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 0.8rem;
`

const BtnBox = Styled.div`
    display : flex;
    justify-content : space-between;    
`

const CalculateBox = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.product.cart);
    const total = cart.reduce((totalPrice, curent) => totalPrice + curent.price, 0);
    const [pay, setPay] = useState('');
    const [chg, setChg] = useState(0);
    const handleCHange = e => {
        setPay(e.target.value);
    }
    const calculate = () => {
        if (pay > total)
            setChg(pay - total);
    }

    const reset = () => {
        dispatch(resetCart());
        setPay('');
        setChg(0);
    }

    return (
        <Box>
            <Total>
                <h4>Total</h4>
                <p>{total}</p>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input onChange={handleCHange} value={pay} type="number" />
            </Pay>
            <Change>
                <p>kembalian</p>
                <p>{chg}</p>
            </Change>
            <BtnBox>
                <Button text="selesai" action={calculate} primary />
                <Button action={reset} text="reset" />
            </BtnBox>
        </Box>
    );
}

export default CalculateBox;