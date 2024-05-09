import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
	return (
		<>
			<div className={styles.newtons_cradle}>
				<div className={styles.newtons_cradle__dot}></div>
				<div className={styles.newtons_cradle__dot}></div>
				<div className={styles.newtons_cradle__dot}></div>
				<div className={styles.newtons_cradle__dot}></div>
			</div>
		</>
	);
};

export default Loader;
