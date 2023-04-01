import nodemailer from "nodemailer";

interface mailOptions {
	from: string;
	to: string;
}

const email: any = process.env.EMAIL_USER;
const pass: any = process.env.EMAIL_PASS;

export const transporter: any = nodemailer.createTransport({
	host: "gmail",
	service: "gmail",
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: pass,
	},
	tls: {rejectUnauthorized: false},
	logger: true,
	debug: true,
});

export const mailOptions: mailOptions = {
	from: email,
	to: email,
};
