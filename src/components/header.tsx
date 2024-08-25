import todoLogo from '../assets/todoLogo.svg';
import styles from './menu-bar.module.scss';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <img src={todoLogo} alt="Logo" />
            </header>
        </>
    );
}
