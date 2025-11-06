"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function Projetos() {
	const [projetos, setProjetos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState("");

	useEffect(() => {
		buscarProjetos();
	}, []);

	const buscarProjetos = async () => {
		try {
			setLoading(true);
			const res = await axios.get(
				"https://api.github.com/users/hidekiys/repos"
			);
			setProjetos(
				res.data.map((p) => {
					return {
						id: p.id,
						nome: p.name,
						descricao: p.description,
						url: p.html_url,
					};
				})
			);
		} catch (err) {
			toast.error("Erro ao buscar projetos");
		} finally {
			setLoading(false);
		}
	};

	const projetosFiltrados = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return projetos;
		return projetos.filter((p) => {
			const nome = (p.nome || "").toLowerCase();
			const desc = (p.descricao || "").toLowerCase();
			return nome.includes(q) || desc.includes(q);
		});
	}, [projetos, query]);

	return (
		<>
			<div className="flex gap-2 pt-10 justify-center md:z-20 sticky top-0 md:top-15 pb-5 md:justify-end backdrop-blur-xs mask-b-to-96 w-full items-center">
				<Input
					placeholder="Procurar projetos..."
					className="w-8/12 md:w-3/12 md:mr-10"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<ul className="flex flex-col gap-3 items-center mt-5">
				{projetosFiltrados.length === 0 && !loading && (
					<p className="text-center mt-10">Nenhum projeto encontrado.</p>
				)}
				{loading && <p className="text-center mt-10">Carregando projetos...</p>}
				{projetosFiltrados.map((p) => {
					return (
						<li
							key={p.id}
							className="flex w-8/12 rounded shadow p-3 dark:bg-card hover:scale-[102%] hover:cursor-pointer transition-all"
						>
							<a href={p.url}>
								<h2 className="font-bold text-lg">{p.nome}</h2>
								<p className="text-sm">{p.descricao}</p>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}
