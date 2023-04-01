import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import styles from './Search.module.scss';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [inputInFocus, setInputInFocus] = useState(false);
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
        <div className={cn(
            styles.search,
            inputInFocus && styles.focused
            )}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search for TV shows"
                value={searchTerm}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                onFocus={() => setInputInFocus(true)}
                onBlur={() => setInputInFocus(false)}
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