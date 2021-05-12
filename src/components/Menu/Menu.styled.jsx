import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text_light};
  padding: 2rem 0 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.line_grey};

  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

export const TagsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
