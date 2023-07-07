import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import { Icon } from '../icon/icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 110px;
  background-color: ${theme.colors.neutralTheme.write};

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
