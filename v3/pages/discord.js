import { useRouter } from "next/router";
import RedirectPage from "../components/RedirectPage";

export default function Discord() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://discord.gg/FK2mh7P72Y");
	}

	return (
		<RedirectPage/>
	)
}
