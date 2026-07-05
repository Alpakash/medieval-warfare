import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { RootState } from '../types';

const Total = styled.div`
display: flex;
justify-content: space-between;
font-weight: bold;
margin: 40px 0 60px 0;
`;

interface TotalAmountProps {
  totalPrice?: RootState['totalPrice'];
}

const TotalAmount = ({totalPrice}: TotalAmountProps) => {
    if (!totalPrice) return null;

    return (
        <Total>
           <div>Total</div> 
           <div>{totalPrice.amount} gold</div>
        </Total>
    );
};

const mapStateToProps = (state: RootState) => ({
  totalPrice: state.totalPrice,
});

export default connect(mapStateToProps, null)(TotalAmount);
