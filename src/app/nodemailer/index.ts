import nodemailer from 'nodemailer';

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user,
      pass
    }
});

export const options = {
    from: user,
    to: user
}