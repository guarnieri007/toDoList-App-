import { useEffect, useState } from 'react';
import todoLogo from '../assets/todoLogo.svg';
import styles from './Header/header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export interface ListItem {
    name: string;
    status: "active" | "finished";
}

export const MenuBar = () => {

    const [todoList, setTodoList] = useState<ListItem[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    function HandleAddItem(event: React.FormEvent) {
        event.preventDefault();/* só precisava enviar o evento para a função, pra poder parar o comportamento "normal" que acontece
        ao clicar no botão de submit, a página era atualizada e perdiamos os dados antes de salvar, por isso não acontecia nada no
        console.log antes */
        
        console.log("valor do input: ", newItem); /* eu estou mostrando o valor do campo do input que está salvo na variável newItem */
        
        const item = { name: newItem, status: "active" } as ListItem; /*com o valor do input, eu crio um objeto do tipo ListItem e defino o status como "active" */
        
        setTodoList([...todoList, item]); /* aqui eu altero a lista do todoList, os tres pontinhos faz com que a variável ao lado dela seja desmembrada (lembra 
        que o todoList é um array com vários objetos do tipo ListItem) e ai ele passa cada item individual desse array como se fosse assim: vamos supor que tinhamos 2 item nessa variavel antes
        ele passaria assim setTodoList([todoList[0], todoList[1], item]), é basicamente isso que os 3 pontinhos fazem*/

        setNewItem(""); /* Reseta o campo de input após adicionar o item */
    }
    
    useEffect(() => {
        console.log('Lista do todo atualizada:', todoList);
        /* eu tirei o console.log que estava antes dentro da função do HandleAddItem, porque quando atualizamos a variável todoList com a função setTotoList, se tentarmos mostrar o novo valor que acabamos de colocar
        esse valor não estará disponível ainda, por isso temos que usar o useEffect, que vai ficar monitorando quando qualquer um dos itens abaixo (dentro do array) forem modificados e vai executar esse código com os
        valores atualizados já, ai sim conseguiremos ver o valor que adicionamos do HandleAddItem */
    }, [todoList] /* nesse array, colocamos os itens que queremos monitorar se o seu valor foi alterado e executamos tudo dentro desse useEffect caso algum item tenha sido alterado */);

    return (
        <>
            <header className={styles.header}>
                <img src={todoLogo} alt="Logo" />

                <form className={styles.newTaskForm} onSubmit={HandleAddItem} /* atualizei e defini o onSubmit, já que estamos trabalhando com um form 
                nesse form, ao clicarmos no botão submit, ele vai enviar um evento do tipo React.FormEvent para a função que estamos chamando no onSubmit com os dados do formulario*/>
                    <input 
                        placeholder='Adicione uma nova tarefa'
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button type="submit" /* coloquei o type como submit, para mostrar ao html qual o tipo desse botão e chamar o caminho/função que definimos no onSubmit do formulario */>
                        Criar
                        <AiOutlinePlusCircle size={20} />
                    </button>
                </form>
            </header>
        </>
    );
}
