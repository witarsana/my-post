import React from 'react';
import Styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/actions/product';

const Card = Styled.div`
    width : 17%;
    height : 8rem;
    cursor : pointer;
`
const CardImg = Styled.img`
    width : 100%;
    height : 50%;
`
const NamePrice = Styled.div`
    display : flex;
    justify-content : 'space-between';
`

const ProductComponent = ({ item }) => {

    const dispatch = useDispatch();

    const addToCard = (id) => {
        dispatch(addCart(id));
    }

    return (
        <Card>
            <CardImg onClick={() => { addToCard(item.id) }} src={item.image.default} alt={item.name}></CardImg>
            <NamePrice>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </NamePrice>
        </Card>
    )
}

export default ProductComponent;