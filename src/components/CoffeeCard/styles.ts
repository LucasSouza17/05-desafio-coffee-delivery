import styled from 'styled-components/native';
import { THEME } from "../../styles/theme";

export const Container = styled.View`
  padding-left: 8px;
  padding-right: 16px;
  padding-vertical: 6px;
  background-color: ${THEME.COLORS.BASE_GRAY_800};
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-width: 1px;
  border-color: ${THEME.COLORS.BASE_GRAY_700};
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding-vertical: 10px;
`

export const Image = styled.Image`
  width: 96px;
  height: 96px;
`

export const ContentInfo = styled.View`
  flex-shrink: 1;
  gap: 8px;
`

export const TitleDescriptionContainer = styled.View``

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${THEME.FONTS.BOLD_BALOO2};
  font-weight: 700;
  color: ${THEME.COLORS.BASE_GRAY_200};
`

export const Description = styled.Text`
  font-size: 12px;
  color: ${THEME.COLORS.BASE_GRAY_400};
  font-family: ${THEME.FONTS.REGULAR};
`
