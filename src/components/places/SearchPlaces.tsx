import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  position: relative;
  max-height: 39px;
  border-bottom: 1px solid rgb(227, 227, 227);
`;

const Input = styled.input`
  flex: 1 1 0;
  width: 70%;
  padding: 10px;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(92, 92, 92);
  font-size: 16px;
  text-overflow: ellipsis;
`;

const SearchButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

function SearchPlaces() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="장소명 또는 태그를 선택해주세요."
      />
      <SearchButton>
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="#387FEA"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.8045 14.8621L11.2545 10.3121C12.1359 9.2235 12.6665 7.84017 12.6665 6.33353C12.6665 2.84156 9.82522 0.000244141 6.33325 0.000244141C2.84128 0.000244141 0 2.84153 0 6.33349C0 9.82546 2.84132 12.6668 6.33328 12.6668C7.83992 12.6668 9.22325 12.1361 10.3119 11.2548L14.8619 15.8047C14.9919 15.9347 15.1625 16.0001 15.3332 16.0001C15.5039 16.0001 15.6745 15.9347 15.8045 15.8047C16.0652 15.5441 16.0652 15.1228 15.8045 14.8621ZM6.33328 11.3334C3.57597 11.3334 1.33333 9.09081 1.33333 6.33349C1.33333 3.57618 3.57597 1.33354 6.33328 1.33354C9.0906 1.33354 11.3332 3.57618 11.3332 6.33349C11.3332 9.09081 9.09057 11.3334 6.33328 11.3334Z"></path>
        </svg>
      </SearchButton>
    </Form>
  );
}

export default SearchPlaces;
