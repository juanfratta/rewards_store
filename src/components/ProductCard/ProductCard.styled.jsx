import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ImageProduct = styled.img`
  width: 100%;
  max-width: 175px;
  height: auto;
`;
export const InfoProductContainer = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid ${({ theme }) => theme.line_grey};
  padding-top: 0.9rem;

  p,
  h6 {
    font-size: 0.9rem;
    margin: 0.2rem 0;
    color: ${({ theme }) => theme.text_light};
  }
`;

//hover section

export const CardHover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(10, 212, 250, 0.86) 0%,
    rgba(37, 187, 241, 0.86) 100%
  );
`;

export const PriceContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 2rem;
    color: white;
  }
`;

export const RedeemButton = styled.button`
  width: 90%;
  font-size: 1rem;
  font-weight: bold;
  background: white;
  color: ${({ theme }) => theme.text_dark};
  border: none;
  border-radius: 20px;
  padding: 0.8rem 0;
  &:hover {
    background: #58fd73;
    outline: none;
    color: white; //${({ theme }) => theme.text_dark};
  }
  &:active {
    opacity: 0.8;
  }
`;
