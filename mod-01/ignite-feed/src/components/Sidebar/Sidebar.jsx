import { PencilSimpleLine } from 'phosphor-react';

import { Avatar } from '../Avatar/Avatar';

import styles from './styles.module.css';

export function Sidebar() {
    return (
        <aside>
            <img src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />

            <div className={styles.profile}>
                <Avatar src={'https://github.com/HenriqueHS19.png'} />

                <strong> Henrique Santos </strong>
                <span> Web developer </span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}