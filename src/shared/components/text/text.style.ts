import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: any) => (props.color ? `color: ${props.color};` : '')}

  font-family: ${(props: any) => props.fontFamily};
  font-size: ${(props: any) => props.fontSize};
  padding-top: 3px;
`;
