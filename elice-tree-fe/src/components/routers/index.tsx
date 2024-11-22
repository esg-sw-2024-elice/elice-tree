import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TodoList } from 'pages';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  );
}
