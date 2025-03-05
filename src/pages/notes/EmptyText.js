import React from "react";
import styled from "styled-components";

const StyledEmptyText = styled.div`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.emptyText};
  background-color: ${({ theme }) => theme.colors.emptyTextBackground};
  border-radius: 8px;

  span {
    text-decoration: underline;
  }
`;

const messages = {
  all: (
    <>
      You don’t have any notes yet. Start a new note to capture your thoughts
      and ideas.
    </>
  ),
  archived: (
    <>
      No notes have been archived yet. Move notes here for safekeeping, or{" "}
      <span>create a new note</span>.
    </>
  ),
  search: (
    <>
      No notes match your search. Try a different keyword or{" "}
      <span>create a new note</span>.
    </>
  ),
};

function EmptyText({ filter }) {
  const message = messages[filter];
  return message ? <StyledEmptyText>{message}</StyledEmptyText> : null;
}

export default EmptyText;
