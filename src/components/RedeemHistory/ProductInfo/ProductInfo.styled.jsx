import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
  margin: 1rem;
  border: 1px solid ${({ theme }) => theme.line_grey};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
