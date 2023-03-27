import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigateTo = useNavigate();
  
    const searchSeries = () => {
      setSearchTerm('')
      navigateTo(`/series/${searchTerm}`);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchSeries()
        }
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search for TV shows"
                value={searchTerm}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
            <button 
                className={styles.button} 
                onClick={searchSeries}
                disabled={searchTerm === ''}
            >
                Search
            </button>
      </div>
    )
}

export default Search;