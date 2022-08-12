import React, { memo, useState } from "react";
import styles from "./Nav.module.css";

const Nav = memo(({ onSearch }) => {
	const [search, setSearch] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(search);
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<nav className={styles.nav}>
				<a href='/' className={styles.logo}>
					YOUTUBE
				</a>
				<form onSubmit={handleSubmit} className={styles.form}>
					<input
						onChange={handleChange}
						className={styles.searchBar}
						type='text'
						placeholder='검색어를 입력해주세요...'
					/>
					<button className={styles.button} type='submit'>
						Search
					</button>
				</form>
			</nav>
		</>
	);
});

export default Nav;
