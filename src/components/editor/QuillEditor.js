import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled from "styled-components";

const QuilEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .ql-toolbar {
  }

  .ql-container {
    flex: 1;
    height: auto;
  }
`;

function QuillEditor({ placeholder, defaultValue, ref }) {
  const containerRef = useRef(null);
  const placeholderRef = useRef(placeholder);
  const defaultValueRef = useRef(defaultValue);

  useEffect(() => {
    const container = containerRef.current;

    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );

    const quill = new Quill(editorContainer, {
      theme: "snow",
      placeholder: placeholderRef.current,
    });

    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

  return (
    <QuilEditorWrapper id="quill-editor" ref={containerRef}></QuilEditorWrapper>
  );
}

export default QuillEditor;
