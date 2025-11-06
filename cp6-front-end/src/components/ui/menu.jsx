"use client";
import Link from "next/link";
import SwitchTheme from "./switchTheme";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
	const [aberto, setAberto] = useState(false);

	return (
		<>
			<button
				className="fixed z-20 ml-5 mt-2 md:hidden"
				onClick={() => setAberto(!aberto)}
			>
				<MenuIcon size={32} className={`${aberto ? "" : "hidden"}`} />
				<X size={32} className={`${aberto ? "hidden" : ""}`} />
			</button>
			<div
				className={`flex flex-col p-3 fixed z-10 justify-between bg-white shadow-xl h-full w-1/2 dark:bg-card
                ${
									aberto ? "-translate-x-full" : ""
								} transition-all duration-500 md:w-full md:translate-x-0 md:flex-row md:items-center md:sticky md:top-0
                `}
			>
				<h1 className="hidden md:block text-2xl">Hideki</h1>
				<div className="flex flex-col ml-3 md:flex-row md:items-center md:ml-0 md:gap-6">
					<h1 className="text-3xl mt-8 md:hidden">Menu</h1>
					<nav className="flex flex-col mt-3 gap-2 md:flex-row md:mt-0 md:gap-6 md:px-6">
						<Link href="/" className="text-xl">
							Home
						</Link>
						<Link href="/projetos" className="text-xl">
							Projetos
						</Link>
						<Link href="/contato" className="text-xl">
							Contato
						</Link>
					</nav>
				</div>
				<SwitchTheme />
			</div>
		</>
	);
}
