import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';

interface ContainerButtomProps {
  margin?: string;
}

export const ContainerButtom = styled.TouchableOpacity<ContainerButtomProps>`
  width: 100%;
  height: 48px;
`;

export const GradientButton = styled(LinearGradient)<ContainerButtomProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: red;
  ${({ ...props }) => (props.margin ? `margin: ${props.margin};` : '')};
`;

export const ButtonSecondary = styled(ContainerButtom)<ContainerButtomProps>`
  ${({ ...props }) => (props.margin ? `margin: ${props.margin};` : '')};
  background-color: ${theme.colors.neutralTheme.write};
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;
