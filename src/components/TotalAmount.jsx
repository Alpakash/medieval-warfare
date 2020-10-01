import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

const Total = styled.div`
display: flex;
justify-content: space-between;
font-weight: bold;
margin: 40px 0 60px 0;
`;

const TotalAmount = ({totalPrice}) => {

    return (
        <Total>
           <div>Total</div> 
           <div>{totalPrice.amount} gold</div>
        </Total>
    );
};

const mapStateToProps = (state) => ({
  totalPrice: state.totalPrice,
});

export default connect(mapStateToProps, null)(TotalAmount);