import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Buttons.styled";
import ThemeOption from "./ThemeOption";
import { useTheme } from "../../theme/ThemeContext";

const Container = styled.div`
  width: 100%;
`;

const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors.title};
`;

const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`;

function ThemeOptions({ option }) {
  const { type, title, subTitle, options } = option;

  const { themeOptions, setColorMode, setFontStyle } = useTheme();
  const [activeOption, setActiveOption] = useState(themeOptions[type]);

  useEffect(() => {
    setActiveOption(themeOptions[type]);
  }, [themeOptions, type]);

  const handleOptionChange = (optionId) => {
    setActiveOption(optionId);
  };

  const handleApplyOption = () => {
    if (type === "colorMode") {
      setColorMode(activeOption);
    } else if (type === "fontStyle") {
      setFontStyle(activeOption);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleContainer>

      <List>
        {options.map((option) => (
          <ThemeOption
            key={option.id}
            icon={option.icon}
            title={option.title}
            subTitle={option.subTitle}
            active={activeOption === option.id}
            onClick={() => handleOptionChange(option.id)}
          />
        ))}
      </List>

      <Footer>
        <Button onClick={handleApplyOption}>Apply Changes</Button>
      </Footer>
    </Container>
  );
}

export default ThemeOptions;
