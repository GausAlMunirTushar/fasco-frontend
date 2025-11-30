import Logo from "./common/Logo";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Input from "./ui/Input";

const Login = () => {
	return (
		<section className="flex max-w-4xl border border-gray-100 bg-white rounded-lg">
			<div className="w-1/2">
				<img
					src="/login-poster.png"
					alt=""
					className="w-full h-full rounded-l-lg"
				/>
			</div>
			<div className="w-1/2 px-4 flex flex-col items-center justify-center">
				<Logo />
				<p>Sign In To FASCO</p>
				<div className="flex gap-2 my-2">
					<button className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2">
						<FcGoogle />
						<p>Sign in with Google</p>
					</button>
					<button className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2">
						<FaGithub />
						<p>Sign in with GitHub</p>
					</button>
				</div>
				<form>
					<Input type="email" placeholder="Enter you email" />
					<Input type="password" placeholder="***************" />
					<button className="bg-gray-800 w-full px-4 py-2 text-white rounded-lg">
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
