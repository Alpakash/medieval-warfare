import styled from "styled-components";

export const Item = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Quantity = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const ItemsParent = styled.div`
  .itemMargin {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Image = styled.img`
  margin-right: 20px;

  @media (max-width: 480px) {
    display: none;
  }
`;

/* 70.15 + 19.85 makes 90px */
export const goldMargin = {
  marginLeft: "19.85px",
};

export const Input = styled.input`
  max-width: 40px;
  max-height: 30px;
  margin: 0 10px;
`;

export const Error = styled.span`
  color: red;
  font-weight: 400;
  font-style: italic;
  margin-top: 20px;
`;
