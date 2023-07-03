import styled from 'styled-components/native';

interface DisplayProps {
  margin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: ${({ ...props }) => (props.margin ? props.margin : '0px;')};
`;
