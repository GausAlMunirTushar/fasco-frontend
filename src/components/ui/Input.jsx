const Input = ({ type, placeholder }) => {
	return (
		<input
			className="w-full border border-gray-300 px-4 py-2 rounded-lg my-2 text-black"
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
