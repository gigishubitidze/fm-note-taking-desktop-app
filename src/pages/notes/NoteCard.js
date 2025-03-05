import React from "react";
import styled from "styled-components";

const StyledNoteCard = styled.nav`
  display: block;
  padding: 0 0 4px 0;
  margin-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.noteLink.borderBottom};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.noteLink.text};
  cursor: pointer;
  transition: border-color 0.25s ease;

  &.active {
    border-color: transparent;
  }
`;

const Content = styled.div`
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  ${StyledNoteCard}.active & {
    background-color: ${({ theme }) => theme.colors.noteLink.backgroundActive};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.noteLink.backgroundHover};
  }
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
`;

const Tags = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  padding: 2px 6px;
  background-color: ${({ theme }) => theme.colors.noteLink.tagBackground};
  border-radius: 4px;
`;

const LastEdited = styled.time`
  color: ${({ theme }) => theme.colors.noteLink.lastEdited};
`;

function NoteCard({ id, title, tags, lastEdited, isActive, onClick }) {
  const handleClick = (id) => {
    onClick(id);
  };

  return (
    <li>
      <StyledNoteCard
        className={isActive ? "active" : ""}
        onClick={() => handleClick(id)}
      >
        <Content>
          <Title>{title}</Title>
          <Tags>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <LastEdited>{lastEdited}</LastEdited>
        </Content>
      </StyledNoteCard>
    </li>
  );
}

export default NoteCard;
