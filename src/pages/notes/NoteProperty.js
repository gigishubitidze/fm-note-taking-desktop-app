import React from "react";
import styled from "styled-components";

const PropertyContainer = styled.div`
  padding: 4px 0;
  display: flex;
`;

const PropertyName = styled.span`
  width: 115px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const PropertyValue = styled.span`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.colors.title};
`;

function NoteProperty({ icon: Icon, name, value }) {
  const formattedValue = Array.isArray(value)
    ? value.join(", ")
    : value || "N/A";

  return (
    <PropertyContainer>
      <PropertyName>
        {Icon && (
          <IconContainer aria-hidden="true">
            <Icon />
          </IconContainer>
        )}
        {name}
      </PropertyName>
      <PropertyValue>{formattedValue}</PropertyValue>
    </PropertyContainer>
  );
}

export default NoteProperty;
