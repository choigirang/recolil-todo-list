// 새로운 todo 아이템을 생성하기 위해 todoListState 내용을 업데이트하는
// setter 함수에 접근해야 한다.
// TodoItemCreator 컴포넌트의 setter 함수를 얻기 위해
// useSetRecoil State() 훅을 사용할 수 있다.

// useRecoilState() : useState()와 유사하며 [state, setState] 튜플을 반환한다.
// 인자에 Atoms 혹은 Selector를 넣어준다.

// useRecoilValue() : 전역 상태의 state 상태 값만을 참조하기 위해 사용한다.
// 선언된 변수에 할당하여 사용하면 된다.

// useSetRecoilState() : 전역 상태의 setter 함수만을 활용하기 위해 사용된다.
// 선언된 함수 변수에 할당하여 사용하면 된다.

// useResetRecoilState() : 전역 상태를 default로 Reset하기 위해 사용된다.
// 선언된 함수 변수에 할당하여 사용하면 된다.
// 기존값에다가 추가하는 역할? Array.assign(...기존값, 추가값)
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import React from "react";
import { todoListState } from "../todoAtoms";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  // 우리가 작성한 Atom을 가져와서 사용한다.

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
    // 우리가 타이핑한 값을 초기화해준다.
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 고유한 아이디를 생성을 위한 유틸리티를 작성한다..
let id = 0;
function getId() {
  return id++;
}
