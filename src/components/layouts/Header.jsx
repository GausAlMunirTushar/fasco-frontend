import Logo from "../common/Logo";
import Button from "../ui/Button";
import Menu from "./Menu";

const Header = () => {
	return (
		<header className="max-w-5xl mx-auto py-5 flex items-center justify-between">
			<Logo />
			<Menu />
			<Button>Sign Up </Button>
		</header>
	);
};

export default Header;
