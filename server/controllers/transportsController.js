import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import nodemailer from "nodemailer";
import { google } from "googleapis";
const OAuth2 = google.auth.OAuth2;
import * as dotenv from "dotenv";
dotenv.config();

const oauth2Client = new OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const accessToken = oauth2Client.getAccessToken();

const forwardEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    ssl: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.email,
      to: "anthonyss@msn.com",
      subject: "test email",
      text: "how did this test email find you?",
    });

    console.log("email on the way dear", info);
  } catch (error) {
    console.log(error);
  }
};

export { forwardEmail };
