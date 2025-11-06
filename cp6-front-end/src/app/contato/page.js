"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function Contato() {
	const [formData, setFormData] = useState({
		nome: "",
		email: "",
		mensagem: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("/api/email", formData);

			if (response.status === 200) {
				setFormData({ nome: "", email: "", mensagem: "" });
			}
		} catch (error) {
			toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
		}
	};
	return (
		<div className="h-full w-full p-10 justify-center flex md:px-30 lg:px-96">
			<div className="p-10 bg-card rounded-lg shadow-lg flex flex-col w-full mt-10">
				<h1 className="text-lg md:self-center md:text-2xl font-bold">
					Contato
				</h1>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<Input
						placeholder="Seu nome"
						className="mb-4 mt-4"
						value={formData.nome}
						onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
						required
					/>
					<Input
						placeholder="Seu email"
						className="mb-4"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						required
					/>
					<Textarea
						placeholder="Mensagem"
						className="mb-4"
						value={formData.mensagem}
						onChange={(e) =>
							setFormData({ ...formData, mensagem: e.target.value })
						}
						required
					/>
					<Button className="self-end md:self-center md:w-1/2 md:mt-5 hover:cursor-pointer hover:scale-[102%] transition-all">
						Enviar
					</Button>
				</form>
			</div>
		</div>
	);
}
