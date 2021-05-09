import styled from "styled-components";

export const CardWrapper = styled.div`
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
