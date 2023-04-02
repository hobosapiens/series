import Spinner from './Spinner';

import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Spinner color="#00A496" />
        </div>
    )
}

export default Loader;