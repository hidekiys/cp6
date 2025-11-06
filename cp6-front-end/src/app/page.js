"use client";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export default function Home() {
	return (
		<div className="flex justify-center mx-10 flex-col items-center gap-4 text-center md:flex-row-reverse md:mt-20 md:text-left md:gap-0 md:items-center lg:px-30">
			<h1 className="px-10 text-xl mt-10 md:text-2xl lg:text-4xl">
				Seja bem-vindo ao meu portfólio! Meu nome é Matheus Hideki 😊
			</h1>

			<Drawer>
				<DrawerTrigger>
					<div className=" rounded-xl px-10 py-5 animate-pulsar dark:bg-primary shadow-foreground md:hover:cursor-pointer md:hover:scale-[102%] transition-all duration-300">
						<figure className="rounded-full overflow-hidden w-40">
							<img
								src="https://avatars.githubusercontent.com/u/84331936?v=4"
								alt="Foto Matheus Hideki"
								className="w-full"
							/>
						</figure>
						Saiba mais sobre mim!
					</div>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>🎯 Sobre Mim!</DrawerTitle>
						<DrawerDescription>
							Desenvolvedor Fullstack que combina uma sólida base técnica
							(Técnico em Informática - FECAP) com minha formação em andamento
							em Engenharia de Software (FIAP). Experiência profissional na
							Tecban em desenvolvimento de software.
						</DrawerDescription>
						<div className="flex p-5 justify-center gap-3">
							<figure className=" w-10">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
									alt="Vue.js Logo"
									className="w-full"
								/>
							</figure>
							<figure className=" w-10">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png"
									alt="SpringBoot Logo"
									className="w-full"
								/>
							</figure>
							<figure className=" w-10 dark:invert">
								<img
									src="https://img.icons8.com/?size=512&id=yUdJlcKanVbh&format=png"
									alt="Next.js Logo"
									className="w-full"
								/>
							</figure>
							<figure className=" w-10">
								<img
									src="https://images.archbee.com/PL8X94efBsjvhfQV3wyyj-fMzoU2zBbnzXG5pDzUALe-20250908-073345.png?format=webp"
									alt="MongoDB Logo"
									className="w-full"
								/>
							</figure>
							<figure className=" w-10">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png"
									alt="Typescript Logo"
									className="w-full"
								/>
							</figure>
						</div>
					</DrawerHeader>
				</DrawerContent>
			</Drawer>
			<ul className="flex gap-3 md:fixed md:bottom-10 md:scale-125 md:-z-10">
				<li className="w-12 h-12 p-2 shadow dark:bg-primary rounded-lg hover:scale-[102%] transition-all	">
					<a
						className="w-full h-full"
						href="https://www.linkedin.com/in/math-hideki"
					>
						<figure className="w-full h-full rounded-sm overflow-hidden">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s"
								className="w-full"
								alt="Linkedin logo"
							/>
						</figure>
					</a>
				</li>
				<li className="w-12 h-12 p-2 shadow dark:bg-primary rounded-lg hover:scale-[102%] transition-all	">
					<a className="w-full h-full" href="https://github.com/hidekiys">
						<figure className="w-full h-full rounded-sm overflow-hidden">
							<img
								src="https://a.slack-edge.com/80588/img/plugins/github/service_512.png"
								className="w-full"
								alt="Github logo"
							/>
						</figure>
					</a>
				</li>
				<li className="w-12 h-12 p-2 shadow dark:bg-primary rounded-lg hover:scale-[102%] transition-all	">
					<a
						className="w-full h-full"
						href="https://www.instagram.com/hidekiy_"
					>
						<figure className="w-full h-full rounded-sm overflow-hidden">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png"
								className="w-full"
								alt="Instagram logo"
							/>
						</figure>
					</a>
				</li>
			</ul>
		</div>
	);
}
