import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  margin?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${({ ...props }) => (props.color ? `color: ${props.color};` : '')}
  ${({ ...props }) => (props.margin ? `margin: ${props.margin};` : '')}

  font-family: ${({ ...props }) => props.fontFamily};
  font-size: ${({ ...props }) => props.fontSize};
  padding-top: 3px;
`;
