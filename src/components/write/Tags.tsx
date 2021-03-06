import React, { useState } from "react";
import styled from "styled-components";

const StyledTags = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;

  span {
    margin-left: 5px;
    font-size: 12px;
    color: rgb(170, 170, 170);
  }
`;

const Name = styled.div`
  display: inline-block;
  color: rgb(124, 124, 124);
`;

const Form = styled.form`
  position: relative;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    width: calc(100vw - 50px);
  }
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 5px;
  font-size: 14px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 6px;

  :focus {
    border-color: rgb(56, 127, 234);
    outline: none;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  line-height: 20px;
  top: calc(50% - 10px);
  font-size: 20px;
  color: rgb(156, 156, 156);
`;

const TagsBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 5px 10px;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 2px 10px;
  border-radius: 10px;
  border: 1px solid rgb(56, 127, 234);
  font-size: 12px;
  color: rgb(255, 255, 255);
  background-color: rgb(56, 127, 234);
  cursor: pointer;
`;

function Tags() {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target.tag.value.length !== 0) {
      let updatedTagList = [...tagList];
      updatedTagList.push(tagItem);
      setTagList(updatedTagList);
      setTagItem("");
    }
  };
  const deleteTagItem = (id) => {
    const filteredTagList = tagList.filter((tagItem) => tagItem !== id);
    setTagList(filteredTagList);
  };
  return (
    <div>
      <StyledTags>
        <Name>ํ๊ทธ</Name>
        <span>(์ ํ)</span>
      </StyledTags>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="tag"
          value={tagItem}
          onChange={(event) => setTagItem(event.target.value)}
        />
        <Button>+</Button>
      </Form>
      <TagsBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index} onClick={() => deleteTagItem(tagItem)}>
              <span>{tagItem + " x"}</span>
            </TagItem>
          );
        })}
      </TagsBox>
    </div>
  );
}

export default Tags;
