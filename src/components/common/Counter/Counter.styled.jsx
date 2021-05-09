import styled from "styled-components";

export const Counter = styled.div`
  border-right: 0.5px solid ${({ theme }) => theme.line_grey};
  width: 20%;
  padding: 1rem;
  color: ${({ theme }) => theme.text_dark};

  @media (max-width: 720px) {
    border: none;
    padding: 0;
  }
`;
