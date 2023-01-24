import { useState } from 'react';
import styled from 'styled-components';

const Contents = styled.div`
  width: 100%;
  padding: 16px 0;
  overflow-x: auto;

  ul {
    width: max-content;
    gap: 8px;
    display: flex;
  }
  ul li {
    background: #d9d9d9;
    border-radius: 8px;
    font-weight: 500;
    text-align: center;
    width: fit-content;
    padding: 2px 12px;
    font-size: 1rem;
    color: #777;
    cursor: pointer;
    transition: all 0.2s;

    &.on {
      background: #e2d48a;
      color: #5b3e00;
      font-weight: 700;
      &:hover,
      &:active {
        background: #d6c87e;
        color: #5b3e00;
      }
    }

    &:hover,
    &:active {
      background: #ccc;
      color: #666;
    }
  }
`;

const ProgramFilter = () => {
  const [currentTag, setCurrentTag] = useState(0);

  const tagClickHandler = (index: number) => {
    setCurrentTag(index);
  };

  const programTags = ['전체', '스트레스', '불안', '우울', '중독'];

  return (
    <Contents>
      <ul>
        {programTags.map((program, index) => {
          return (
            <li
              className={index === currentTag ? 'on' : ''}
              key={index}
              onClick={() => tagClickHandler(index)}
            >
              {program}
            </li>
          );
        })}
      </ul>
    </Contents>
  );
};

export default ProgramFilter;
