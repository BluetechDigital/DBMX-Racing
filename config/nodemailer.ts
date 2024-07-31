// Imports
import nodemailer from "nodemailer";

const host: any = process.env.EMAIL_HOST;
const email: any = process.env.EMAIL_USER;
const password: any = process.env.EMAIL_PASS;

export const emailTransporter: any = nodemailer.createTransport({
	service: host,
	auth: {
		user: email,
		pass: password,
	},
	logger: true,
	debug: true,
});

emailTransporter.verify(function (error: any, success: any) {
	if (error) {
		console.log("Connection error:", error);
	} else {
		console.log("Server is ready to take our messages");
	}
});
