import styled from 'styled-components';


export const AddButton = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  max-width: 100%;
  
  
  background-color: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.buttonText};
  
`;

export const DelButton = styled.button`
  padding: 10px;
  min-width: 40px;
  
  background-color: ${props => props.theme.colors.buttonBg};
  fill: ${props => props.theme.colors.buttonText};
  
`;
