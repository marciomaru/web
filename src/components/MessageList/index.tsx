import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        dlkfjaldkfjalkdfjalkjdfalkjdfhalkjfhalkjdhflakjhflakjfhlakjdfhla adflkjadlfkjhadlkfhakjldf alkdjfhalkjdfhda flakjfhaldskfjha
                    </p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/marciomaru.png" alt="Marcio Sousa" />
                        </div>
                        <span>Marcio Sousa</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        dlkfjaldkfjalkdfjalkjdfalkjdfhalkjfhalkjdhflakjhflakjfhlakjdfhla adflkjadlfkjhadlkfhakjldf alkdjfhalkjdfhda flakjfhaldskfjha
                    </p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/marciomaru.png" alt="Marcio Sousa" />
                        </div>
                        <span>Marcio Sousa</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        dlkfjaldkfjalkdfjalkjdfalkjdfhalkjfhalkjdhflakjhflakjfhlakjdfhla adflkjadlfkjhadlkfhakjldf alkdjfhalkjdfhda flakjfhaldskfjha
                    </p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/marciomaru.png" alt="Marcio Sousa" />
                        </div>
                        <span>Marcio Sousa</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}