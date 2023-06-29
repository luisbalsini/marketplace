import styled from 'styled-components/native';

interface ContainerButtomProps {
  margin?: string;
}

export const ContainerButtom = styled.TouchableOpacity<ContainerButtomProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: red;
  ${(props: any) => (props.margin ? `margin: ${props.margin};` : '')};
`;
