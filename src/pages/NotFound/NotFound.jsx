import Header from "@/components/Header";

import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <Header />
            <h2 className={styles.text}>
                Page Not Found
            </h2>
        </div>
    )
}

export default NotFound;