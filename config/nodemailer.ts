// Imports
import nodemailer from "nodemailer";

const host: any = process.env.EMAIL_HOST;
const email: any = process.env.EMAIL_USER;
const password: any = process.env.EMAIL_PASS;

export const emailTransporter: any = nodemailer.createTransport({
	host: host,
	service: host,
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: password,
	},
	tls: {rejectUnauthorized: false},
	logger: false,
	debug: false,
});

emailTransporter.verify(function (error: any, success: any) {
	if (error) {
		console.log("Connection error:", error);
	} else {
		console.log("Server is ready to take our messages");
	}
});
