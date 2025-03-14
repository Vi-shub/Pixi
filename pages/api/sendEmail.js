import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	const { name, email, phone, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "pixavia.studio@gmail.com", // Replace with your Gmail
			pass: "dssq cmxg ustf gjgk ", // Use App Password, NOT your Gmail password
		},
	});

	const mailOptions = {
		from: '"Pixavia" <no-reply@pixavia.com>',
		to: "pixavia.studio@gmail.com",
		subject: "New Inquiry from Website",
		text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ success: true, message: "Email sent successfully!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Email could not be sent" });
	}
}
