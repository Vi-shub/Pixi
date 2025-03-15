"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ item }: { item: any }) {
	const [hovered, setHovered] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div>
			<div className="relative w-full group">
				{item.type === "image" ? (
					// ✅ Image Handling
					<div
						
						className="rounded-[10px] overflow-hidden hover:scale-[0.95] transition cursor-pointer transform duration-[1s] ease-[.4,0,.2,1] block"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<Image
							src={item.src}
							alt={`${item.title}Img`}
							width={500} // Add proper width
							height={300} // Add proper height
							className="w-full object-cover rounded-[10px] group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
						/>
					</div>
				) : (
					// ✅ Video Handling
					<button onClick={openModal} className="w-full relative">
						<video
							src={item.src}
							className="w-full object-cover rounded-[10px]"
							muted
							autoPlay
							loop
						/>
						{/* Play Button Overlay */}
						<div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-[10px]">
							<span className="text-white text-3xl font-bold">▶</span>
						</div>
					</button>
				)}

				{/* Animated Title */}
				<div
					style={{ left: item.id % 2 === 0 ? "-15%" : "90%" }}
					className="absolute w-fit flex top-[50%] sm:hidden -translate-x-[30%] -translate-y-1/2 overflow-hidden z-10 group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1] xm:hidden">
					{item.title.split("").map((char: any, i: any) => (
						<motion.span
							initial={{ y: "100%" }}
							animate={hovered ? { y: 0 } : { y: "100%" }}
							transition={{
								delay: i * 0.02,
								duration: 0.5,
								ease: [0.4, 0, 0.2, 1],
							}}
							className="text-[165px] leading-none inline-block uppercase font-FoundersGrotesk text-about font-bold text-center pointer-events-none"
							key={i}>
							{char}
						</motion.span>
					))}
				</div>
			</div>

			{/* Video Modal */}
			{isModalOpen && item.type === "video" && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
					<div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 text-black text-xl">
							✖
						</button>
						<video controls className="w-full rounded-lg">
							<source src={item.src} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			)}
		</div>
	);
}
