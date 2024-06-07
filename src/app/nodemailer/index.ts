import nodemailer from 'nodemailer';

const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST; 

export const transporter = nodemailer.createTransport({
    port: 465,
    host, 
    secure: true,
    auth: {
      user,
      pass
    }
});

export const options = {
    from: user,
    to: user
}



