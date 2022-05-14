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
  padding: 5px 10px;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(92, 92, 92);
  font-size: 16px;
  text-overflow: ellipsis;
`;

const Buttons = styled.div`
  min-width: 81px;
  height: 39px;
`;

const FilterButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;

  ::after {
    content: "";
    width: 1px;
    height: 20px;
    position: absolute;
    background-color: rgb(227, 227, 227);
    top: 10px;
    right: 40px;
  }
`;

const SearchButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
`;

function SearchBar() {
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
  //! input 창에 작성된 value 값이 Article.tsx 에 있는 article 과 같을 때 해당 article만 보여주는 코드 구현하기
  // const temp = () => {
  //   if (value) {
  //     return null;
  //   }
  // };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="필터를 이용하여 검색도 가능합니다."
      />
      <Buttons>
        <FilterButton>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="#AAAAAA"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7803 2.19335H6.37596C6.08992 1.34378 5.28635 0.72998 4.34156 0.72998C3.39676 0.72998 2.59319 1.34378 2.30715 2.19335H0.683115C0.305853 2.19335 0 2.4992 0 2.87646C0 3.25372 0.305853 3.55958 0.683115 3.55958H2.3072C2.59324 4.40914 3.39681 5.02295 4.3416 5.02295C5.2864 5.02295 6.08997 4.40914 6.37601 3.55958H16.7803C17.1576 3.55958 17.4635 3.25372 17.4635 2.87646C17.4635 2.4992 17.1576 2.19335 16.7803 2.19335ZM4.34156 3.65672C3.91133 3.65672 3.5613 3.30669 3.5613 2.87646C3.5613 2.44624 3.91133 2.09621 4.34156 2.09621C4.77178 2.09621 5.12181 2.44624 5.12181 2.87646C5.12181 3.30669 4.77178 3.65672 4.34156 3.65672Z"
              fill="#AAAAAA"
            ></path>
            <path
              d="M16.7803 8.04674H15.1562C14.8702 7.19717 14.0666 6.58337 13.1218 6.58337C12.1771 6.58337 11.3735 7.19717 11.0875 8.04674H0.683115C0.305853 8.04674 0 8.35259 0 8.72986C0 9.10712 0.305853 9.41297 0.683115 9.41297H11.0875C11.3735 10.2625 12.1771 10.8763 13.1219 10.8763C14.0666 10.8763 14.8702 10.2625 15.1563 9.41297H16.7803C17.1576 9.41297 17.4635 9.10712 17.4635 8.72986C17.4635 8.35259 17.1576 8.04674 16.7803 8.04674ZM13.1219 9.51011C12.6916 9.51011 12.3416 9.16008 12.3416 8.72986C12.3416 8.29963 12.6916 7.9496 13.1219 7.9496C13.5521 7.9496 13.9021 8.29963 13.9021 8.72986C13.9021 9.16008 13.5521 9.51011 13.1219 9.51011Z"
              fill="#AAAAAA"
            ></path>
            <path
              d="M16.7803 13.9004H9.30275C9.0167 13.0508 8.21313 12.437 7.26834 12.437C6.32355 12.437 5.51998 13.0508 5.23393 13.9004H0.683115C0.305853 13.9004 0 14.2062 0 14.5835C0 14.9608 0.305853 15.2666 0.683115 15.2666H5.23393C5.51998 16.1162 6.32355 16.73 7.26834 16.73C8.21313 16.73 9.0167 16.1162 9.30275 15.2666H16.7803C17.1576 15.2666 17.4635 14.9608 17.4635 14.5835C17.4635 14.2062 17.1576 13.9004 16.7803 13.9004ZM7.26834 15.3638C6.83811 15.3638 6.48809 15.0138 6.48809 14.5835C6.48809 14.1533 6.83811 13.8033 7.26834 13.8033C7.69857 13.8033 8.04859 14.1533 8.04859 14.5835C8.04859 15.0137 7.69857 15.3638 7.26834 15.3638Z"
              fill="#AAAAAA"
            ></path>
          </svg>
        </FilterButton>
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
      </Buttons>
    </Form>
  );
}

export default SearchBar;
