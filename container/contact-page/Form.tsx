import { useState } from "react";
import { RoundButton } from "@/components";

export default function Form() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const response = await fetch("/api/sendEmail", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		setLoading(false);

		if (result.success) {
			setSuccess("Your inquiry has been sent successfully!");
			setFormData({ name: "", email: "", phone: "", message: "" });
		} else {
			setSuccess("Failed to send inquiry. Please try again.");
		}
	};

	return (
		<section className="w-full padding-x padding-y">
			<form className="w-full flex flex-col gap-[15px]" onSubmit={handleSubmit}>
				{/* Name Field */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						Hi! My name is
					</h2>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Enter your name*"
						required
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
					/>
				</div>

				{/* Email Field */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						You can reach me at
					</h2>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="name@example.com*"
						required
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
					/>
				</div>

				{/* Phone Field */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						My phone number is
					</h2>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Enter your phone number*"
						required
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
					/>
				</div>

				{/* Message Field */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						I&apos;d like to inquire about
					</h2>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Type your message here..."
						required
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out h-24 resize-none"
					/>
				</div>

				{/* Submit Button */}
				<div className="w-full flex justify-end pt-[30px]">
					<button
						type="submit"
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group px-6 py-2 text-white"
						disabled={loading}
					>
						{loading ? "Sending..." : "Send Inquiry"}
					</button>
				</div>

				{success && <p className="text-green-600">{success}</p>}
			</form>
		</section>
	);
}
