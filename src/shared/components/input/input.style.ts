import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import { Icon } from '../icon/icon';

interface ContainerInputProps {
  isError: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralTheme.write};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ ...props }) =>
    props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
  padding-right: ${({ ...props }) => (props.hasSecureTextEntry ? '52px;' : '16px;')};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;
