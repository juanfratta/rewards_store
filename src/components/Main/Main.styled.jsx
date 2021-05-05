import styled from "styled-components";

export const MainWrapper = styled.div`
  background: ${({ theme }) => theme.back_grey};
  padding: 0 10%;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text_ligth};

  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

export const Counter = styled.div`
  border-right: 0.5px solid ${({ theme }) => theme.line_grey};
  width: 20%;
  padding: 1rem;

  @media (max-width: 720px) {
    border: none;
    padding: 0;
  }
`;

export const TagsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductsWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 250px);
  grid-gap: 1.5rem;

  @media (max-width: 1008px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
