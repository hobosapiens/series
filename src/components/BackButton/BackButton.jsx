import { useNavigate } from 'react-router-dom';

import backArrow from './img/backArrow.svg'; 

import styles from './BackButton.module.scss';

const BackButton = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <button onClick={goBack} className={styles.button}>
            <img src={backArrow} alt="backArrow" />
            Back to search results
        </button>
    )
}

export default BackButton;