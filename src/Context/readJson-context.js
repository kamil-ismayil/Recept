import React, { useCallback } from "react";
import useJson from "./json";

export const ReadJsonContext = React.createContext({
	readJson: () => {},
	data: {},
});

const readJsonContextProvider = (props) => {
	const { data, readRequest, writeRequest } = useJson();

	const readHandler = useCallback((fileName) => {
		readRequest(fileName, "");
	}, []);

	return (
		<ReadJsonContext.Provider value={{ readJson: readHandler, data: data }}>
			{props.children}
		</ReadJsonContext.Provider>
	);
};

export default readJsonContextProvider;
