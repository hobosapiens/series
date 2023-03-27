import Header from "@/components/Header";

import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <Header />
            <div className={styles.text}>
                Page Not Found
            </div>
        </div>
    )
}

export default NotFound;