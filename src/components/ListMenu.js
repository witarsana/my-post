import React, { useState } from 'react';
import Styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../store/actions/product';

const Menu = Styled.li`
    height : 2rem;
    display : flex;
    align-items : center;
    padding-left : 0.3rem;
    position : relative;
    color : ${props => props.theme.gray};
    cursor : pointer;
    
    &:nth-child(2) {
        background : ${props => props.theme.primary};
        color : ${props => props.theme.light};
    }
`

const ListMenu = () => {
    const dispatch = useDispatch();
    const [menu] = useState(["Favorite", "Makanan", "Minuman", "Desert"])
    const clickMenu = (category) => {
        dispatch(changeCategory(category));
    }
    return (
        <ul>
            {menu.map((mn, id) =>
                <Menu onClick={() => { clickMenu(mn.toLocaleLowerCase()) }} key={id}>{mn}</Menu>
            )}
        </ul>
    )
}

export default ListMenu;