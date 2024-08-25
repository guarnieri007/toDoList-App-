import { useState } from 'react';
import { Header } from './components/header';
import { ListItem } from './interfaces';
import { Listing } from './components/listing';
import { MainForm } from './components/mainForm';

function App() {
  const [todoList, setTodoList] = useState<ListItem[]>([]);
  return (
    <>
      <Header />

      <MainForm
        setTodoList={setTodoList}
        todoList={todoList}
      />

      <Listing
        listItems={todoList}
        setListItems={setTodoList}
      />

    </>
  );
}

export default App;