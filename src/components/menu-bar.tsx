import { useState } from 'react';
import todoLogo from '../assets/todoLogo.svg';
import styles from './Header/header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export interface ListItem {
    name: string;
    status: string
}

export const MenuBar = () => {

    const [todoList, setOdoList] = useState<ListItem[]>([]);
    const [newItem, setNewItem] = useState("");

    function HandleAddItem (value: string) {
        console.log("valor do input: ", value);
        const item = { name: value, status: "active"} as ListItem;
        setOdoList([...todoList, item]);
        console.log(`Lista do todo:`, todoList);
    }


    return (
        <>
            <header className={styles.header}>
                <img src={todoLogo} />

                <form className={styles.newTaskForm}>
                    <input placeholder='Adicione uma nova tarefa'
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button
                        onClick={() => HandleAddItem(newItem)}
                    >
                        Criar
                        <AiOutlinePlusCircle size={20} />
                    </button>
                </form>
            </header>
        </>
    );
}