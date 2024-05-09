'use client';

import { useState, useEffect, useContext, createContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [data, setData] = useState([]);

	// Fetching data function
	const getBlogs = async () => {
		const blogs = await fetch('https://app.dantownms.com/api_v2/all-blogs')
			.then((res) => res.json())
			.then((result) => setData(result.data));
	};

	useEffect(() => {
		getBlogs();
	}, []);

	const indexData = data?.slice(0, 3);

	return (
		<AppContext.Provider
			value={{
				data,
				indexData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
