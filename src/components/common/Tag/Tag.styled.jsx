import styled from 'styled-components';

export const TagWrapper = styled.button`
  min-width: 100px;
  max-width: 400px;
  height: 2rem;
  background-color: #ededed;
  border-radius: 1rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text_light};
  padding: 0 10px;
  border: none;
  outline: none;
  &:active {
    background: ${(props) => props.name !== 'onlyTag' && props.theme.primary};
    color: ${(props) => props.name !== 'onlyTag' && 'white'};
  }
`;
