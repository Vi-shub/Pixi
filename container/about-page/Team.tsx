import Image from "next/image";
import { Team1, Team2, Team3, Team4,logo_black } from "@/public";
import { motion } from "framer-motion";

const teamMembers = [
	{ name: "ABHISHEK SINGH", role: "Team Member", image: Team1 },
	{ name: "MARIYA SHAIKH", role: "Team Member", image: Team2 },
	{ name: "AAYUSH RAWAT", role: "Team Member", image: Team3 },
	
];

export default function Team() {
	return (
		<section className="w-full bg-[#ff7f50] min-h-screen rounded-t-[20px]">
			<div
				style={{ minHeight: "300vh" }}
				className="relative flex flex-col items-center px-4 pt-24 pb-12 sm:px-6 lg:px-40"
			>
				<div className="w-[90%] space-y-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							style={{ top: `calc(1rem * ${index + 1})` }}
							className="sticky w-full px-8 py-12 bg-background border rounded-lg shadow-lg"
						>
							<div className="flex justify-between sm:flex-col gap-[20px]">
								<div>
									<Image src={logo_black} alt="logo" width={50} height={50} />
								</div>
								<div>
									<Image
										src={member.image}
										alt={member.name}
										width={300}
										height={300}
										className="rounded-[10px] sm:w-full"
									/>
									<p className="paragraph font-NeueMontreal font-normal text-secondary py-[10px]">
										{member.role}
									</p>
								</div>
							</div>
							<div className="flex justify-between items-end sm:flex-col sm:items-start">
								<h1 className="heading font-bold font-FoundersGrotesk text-secondary">
									{member.name}
								</h1>
								<h1 className="heading font-bold font-FoundersGrotesk text-secondary">
									{index + 1} / {teamMembers.length}
								</h1>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
