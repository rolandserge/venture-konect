import dotenv from "dotenv"
import nodemailer from 'nodemailer';

dotenv.config()

const sendMail = async(subject, html) => {

    const transporter = nodemailer.createTransport({

        service: process.env.SERVICE,
        auth:{
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    // get the pdath to the email template file
    // const templatePath = path.join(__dirname,'../mails',template);

    // Render the email template with EJS
    // const html:string = await ejs.renderFile(templatePath,data);

    const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.EMAIL_RECEIVED,
        subject,
        html
    };

    return transporter.sendMail(mailOptions);
};

export default sendMail;