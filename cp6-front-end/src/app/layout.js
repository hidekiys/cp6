import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import Menu from "@/components/ui/menu";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Portifolio do Hideki",
	description: "Portifolio de Matheus Hideki - Desenvolvedor Fullstack",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Menu />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
