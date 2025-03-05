import React, { useRef, useState } from "react";
import QuillEditor from "../../../components/editor/QuillEditor";
import { showInfoToast } from "../../../components/Toastify";
import { Delta } from "quill";
import styled from "styled-components";
import Button from "../../../components/Buttons.styled";
import TextInput, { TitleInput } from "./Inputs.styled";
//
import { ReactComponent as TagIcon } from "../../../assets/images/icon-tag.svg";
import { ReactComponent as ClockIcon } from "../../../assets/images/icon-clock.svg";

const jsonObject = {
  ops: [
    { insert: "Key performance optimization techniques:\n\n" },
    { attributes: { bold: true }, insert: "Code Splitting" },
    { attributes: { list: "ordered" }, insert: "\n" },
    { insert: "Use React.lazy() for route-based splitting" },
    { attributes: { list: "bullet" }, insert: "\n" },
    { insert: "Implement dynamic imports for heavy components" },
    { attributes: { list: "bullet" }, insert: "\n" },
    { insert: "\n" },
    { attributes: { bold: true }, insert: "Memoization" },
    { attributes: { list: "ordered" }, insert: "\n" },
    { insert: "useMemo for expensive calculations" },
    { attributes: { list: "bullet" }, insert: "\n" },
    { insert: "useCallback for function props" },
    { attributes: { list: "bullet" }, insert: "\n" },
    { insert: "React.memo for component optimization" },
    { attributes: { list: "bullet" }, insert: "\n" },
    { insert: "\n" },
    { attributes: { bold: true }, insert: "Virtual List Implementation" },
    { attributes: { list: "ordered" }, insert: "\n" },
    { insert: "Use react-window for long lists" },
    { attributes: { list: "bullet" }, insert: "\n" },
    { insert: "Implement infinite scrolling" },
    { attributes: { list: "bullet" }, insert: "\n" },
    {
      insert:
        "\nTODO: Benchmark current application and identify bottlenecks\n\n",
    },
  ],
};

const FormContainer = styled.div.attrs({ id: "XXXXXX" })`
  max-width: 588px;
  height: 100%;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const Flex = styled.div`
  display: flex;
  padding: 0 4px 0 0;
  flex-direction: column;
  gap: 12px;
`;

const Buttons = styled.div`
  min-height: 41px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EditorWrapper = styled.div.attrs({ id: "quil-wrapper" })`
  flex: 1;
  min-height: 120px;
`;

const CreateNoteForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    lastEdited: "",
    note: "",
  });

  const quillRef = useRef();
  const delta = useRef(new Delta(jsonObject));

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveNote = () => {
    const data = {
      ...formData,
      note: JSON.stringify(quillRef.current.getContents()),
    };
    console.log(data);
    showInfoToast("Note saved successfully!");
  };

  return (
    <FormContainer>
      <TitleInput
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter a title…"
      />

      <Flex>
        <TextInput
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          icon={TagIcon}
          label="Tags"
          placeholder="Add tags separated by commas (e.g. Work, Planning)"
        />
        <TextInput
          name="lastEdited"
          value={formData.lastEdited}
          onChange={handleChange}
          icon={ClockIcon}
          label="Last edited"
          placeholder="Not yet saved"
        />
      </Flex>

      <EditorWrapper>
        <QuillEditor
          placeholder="Start typing your note here…"
          defaultValue={delta.current}
          ref={quillRef}
        />
      </EditorWrapper>

      <Buttons>
        <Button onClick={handleSaveNote}>Save Note</Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Buttons>
    </FormContainer>
  );
};

export default CreateNoteForm;
