import React from "react";

const Button = ({ children }) => {
	return (
		<button className="bg-black text-white rounded-lg px-4 py-2">
			{children}
		</button>
	);
};

export default Button;
