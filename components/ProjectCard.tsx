"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ item }: { item: any }) {
	const [hovered, setHovered] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div
			className="relative w-full group"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* ✅ Image or Video Handling */}
			<button onClick={openModal} className="w-full relative">
				{item.type === "image" ? (
					<Image
						src={item.src}
						alt={`${item.title}Img`}
						width={500}
						height={300}
						className="w-full object-cover rounded-[10px] group-hover:scale-[1.03] transform duration-[1s] ease-[.4,0,.2,1]"
					/>
				) : (
					<video
						src={item.src}
						className="w-full object-cover rounded-[10px]"
						muted
						autoPlay
						loop
					/>
				)}

				{/* Play Button Overlay for Video */}
				{item.type === "video" && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-[10px]">
						<span className="text-white text-3xl font-bold">▶</span>
					</div>
				)}
			</button>

			{/* ✅ Animated Title */}
			<div
				style={{ left: item.id % 2 === 0 ? "-15%" : "90%" }}
				className="absolute w-fit flex top-[50%] sm:hidden -translate-x-[30%] -translate-y-1/2 overflow-hidden z-10 
				group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1] xm:hidden"
			>
				{item.title.split("").map((char: any, i: number) => (
					<motion.span
						initial={{ y: "100%" }}
						animate={hovered ? { y: 0 } : { y: "100%" }}
						transition={{
							delay: i * 0.05,
							duration: 0.6,
							ease: [0.4, 0, 0.2, 1],
						}}
						className="text-[165px] leading-none inline-block uppercase font-FoundersGrotesk text-about 
						font-bold text-center pointer-events-none"
						key={i}
					>
						{char}
					</motion.span>
				))}
			</div>

			{/* ✅ Modal for Image & Video */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
					<div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
						<button
							onClick={closeModal}
							className="absolute top-6 right-6 text-black text-xl"
						>
							✖
						</button>

						{item.type === "image" ? (
							<Image
								src={item.src}
								alt={`${item.title}Img`}
								width={800}
								height={600}
								className="w-full rounded-lg"
							/>
						) : (
							<video controls className="w-full rounded-lg">
								<source src={item.src} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
