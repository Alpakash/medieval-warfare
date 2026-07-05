import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store';

const Total = styled.div`
display: flex;
justify-content: space-between;
font-weight: bold;
margin: 40px 0 60px 0;
`;

const TotalAmount = () => {
    const totalPrice = useStore((state) => state.totalPrice);

    return (
        <Total>
           <div>Total</div>
           <div>{totalPrice.amount} gold</div>
        </Total>
    );
};

export default TotalAmount;