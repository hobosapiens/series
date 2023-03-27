import Logo from '@/components/Logo';
import Search from '@/components/Search';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.search}>
                <Search />
            </div>
        </div>
    )
}

export default Header;