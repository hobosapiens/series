import { Link } from "react-router-dom";

import logotype from './img/logo.png';

import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to='/' className={styles.link}>
            <img 
                className={styles.logo} 
                src={logotype} 
                alt="Logo" 
            />
        </Link>
    )
}

export default Logo;