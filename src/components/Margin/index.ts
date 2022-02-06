import styled from 'styled-components/native';

interface Props {
  margin?: number;
}

export const Margin = styled.View<Props>`
  margin: ${({margin}) => margin || '8'}px;
`;
