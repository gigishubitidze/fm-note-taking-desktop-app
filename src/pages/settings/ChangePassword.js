import React, { useState } from "react";
import styled from "styled-components";
import PasswordInput from "../../components/inputs/PasswordInput";
import Button from "../../components/Buttons.styled";
import { showInfoToast } from "../../components/Toastify";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors.title};
`;

const ButtonContainer = styled.div`
  height: 41px;
  display: flex;
  justify-content: flex-end;
`;

function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const validate = () => {
    let tmpErrors = {};
    if (formData.newPassword.trim().length < 8)
      tmpErrors.newPassword = "New password must be at least 8 characters.";

    if (formData.confirmPassword !== formData.newPassword)
      tmpErrors.confirmPassword = "Passwords do not match.";

    setErrors({ ...tmpErrors });

    return Object.keys(tmpErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Password reset successful:", formData);
      showInfoToast("Note created successfully!")
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Change Password</Title>

      <PasswordInput
        name="oldPassword"
        label="Old Password"
        value={formData.oldPassword}
        onChange={handleChange}
      />

      <PasswordInput
        name="newPassword"
        label="New Password"
        hintText={
          errors.newPassword ? errors.newPassword : "At least 8 characters"
        }
        value={formData.newPassword}
        onChange={handleChange}
        isError={errors.newPassword}
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm New Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        isError={errors.confirmPassword}
        hintText={errors.confirmPassword}
      />

      <ButtonContainer>
        <Button type="submit">Save Password</Button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default ChangePassword;
