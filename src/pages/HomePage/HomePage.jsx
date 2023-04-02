import Search from '@/components/Search';
import Logo from '@/components/logo';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Logo  />
      <div className={styles.search}>
        <Search />
      </div>
    </div>
    
  )
}
  
export default HomePage