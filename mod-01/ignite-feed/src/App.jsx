import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import './styles/global.css';
import styles from './app.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatar: 'https://github.com/HenriqueHS19.png',
            name: 'Henrique Santos',
            role: 'Web Devoloper',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
            { type: 'link', content: 'novo-projeto' },
            { type: 'link', content: 'nlw' },
            { type: 'link', content: 'rocketseat' }
        ],
        publishedAt: new Date(),
    },

];

function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map(function (post) {
                        return (
                            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
                        );
                    })}
                </main>
            </div>
        </>
    );
}

export default App;
