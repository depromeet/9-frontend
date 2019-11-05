import styled from '@emotion/styled';
import React, { useState } from 'react';
import Dropdown from '../Dropdown'

export default function TaskForm(props) {
  
  const { user, taskList, addTaskToList } = props;

  const [inputValue, setInputValue] = useState("");

  // TODO: 메인 화면으로 넘어가기
  const nextPage = () => {}

  return (
      <Wrapper>
          <Title>
          환영합니다, 디프마니님!
          <br />
          <strong>지금 해야 할 일을 추가해볼까요?</strong>
        </Title>
        <Dropdown suggestions={["디프만 자소서 작성하기", 
        "디프만 지원서 제출하기", "워밍업 프로젝트 기획안 작성", "워밍업 프로젝트 와이어프레임", 
        "워밍업 프로젝트 GUI 디자인", "로고 디자인", "디프만 보고서 쓰기"]} 
          addTaskToList={addTaskToList}
        />
        <Bottom>
            <SkipButton>건너뛸래요</SkipButton>
            <CompleteButton>작성완료</CompleteButton>
        </Bottom>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
`;

const Title = styled.h1`
  box-sizing: border-box;
  padding-bottom: 47px;
  margin: auto;
  font-family: SpoqaHanSans;
  font-weight: 300;
  font-size: 28px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -1.59px;
  text-align: center;
  color: #61676f;
`;

const Bottom = styled.div`
  width: 484px;
  box-sizing: border-box;
  padding: 38px 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

const SkipButton = styled.div`
  height: 50px;
  border-radius: 7px;
  background-color: #e2edff;
  border: none;
  box-sizing: border-box;
  padding: 14px 59px;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;
  color: #0b79ff;
`;

const CompleteButton = styled.div`
  height: 50px;
  box-sizing: border-box;
  padding: 14px 116px;
  border-radius: 7px;
  background-color: #ff5001;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;
  color: #ffffff;
`;
