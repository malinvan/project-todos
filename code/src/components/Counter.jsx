import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Number = styled.h2`
  position: absolute;
  top: 5%;
  left: 5%;
  color: #5899E2;
  margin: 0;
  border: 1px solid #5899E2;
  border-radius: 50px;
  padding: 10px 10px;
  width: 30px;
  text-align: center;
`;

export const Counter = () => {
  const items = useSelector((store) => store.todos.items.filter((item) => !item.isComplete));
  
  return (
    <Number>{items.length}</Number>
  )
}