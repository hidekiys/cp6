"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function SwitchTheme() {
	const { setTheme } = useTheme();
	const [tema, setTema] = useState(true);

	useEffect(() => {
		if (tema) {
			setTheme("dark");
			return;
		}
		setTheme("light");
	}, [tema]);

	return (
		<div>
			<Switch id="theme" checked={tema} onClick={() => setTema(!tema)} />
			<Label htmlFor="theme">{tema == true ? "Escuro" : "Claro"}</Label>
		</div>
	);
}
