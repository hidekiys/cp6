import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
	try {
		const { nome, email, mensagem } = await request.json();

		const { data, error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "mathideki06@gmail.com",
			subject: `Nova Mensagem de Contato de ${nome}`,
			reply_to: email,
			html: `
        <h1>Formulário de Contato - Portfólio</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
		});

		if (error) {
			console.error("Erro ao enviar e-mail:", error);
			return NextResponse.json(
				{ message: "Falha no envio", error },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ message: "E-mail enviado com sucesso!", data },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Erro interno do servidor" },
			{ status: 500 }
		);
	}
}
