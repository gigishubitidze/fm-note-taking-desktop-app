import React from "react";
import styled from "styled-components";

const ThemeOptionContainer = styled.li`
  height: 72px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.themeOption.title};
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.themeOption.border};
  background-color: ${({ $active, theme }) =>
    $active
      ? theme.colors.themeOption.backgroundActive
      : theme.colors.themeOption.background};
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.themeOption.iconContainer.border};
  background-color: ${({ theme }) =>
    theme.colors.themeOption.iconContainer.background};
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  /* color: ${({ theme }) => theme.colors.themeOption.title}; */
`;

const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.themeOption.subTitle};
`;

const Radio = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: ${({ $active, theme }) =>
    $active
      ? theme.colors.radio.backgroundActive
      : theme.colors.radio.background};

  & div {
    width: ${({ $active }) => ($active ? "8px" : "12px")};
    height: ${({ $active }) => ($active ? "8px" : "12px")};
    border-radius: 12px;

    background-color: ${({ $active, theme }) =>
      $active
        ? theme.colors.radio.backgroundInnerActive
        : theme.colors.radio.backgroundInner};
  }
`;

function ThemeOption({ icon: Icon, title, subTitle, active, onClick }) {
  return (
    <ThemeOptionContainer $active={active} onClick={onClick}>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}

      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>

      <Radio $active={active}>
        <div />
      </Radio>
    </ThemeOptionContainer>
  );
}

export default ThemeOption;
