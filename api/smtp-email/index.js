const nodemailer = require("nodemailer");


module.exports = async function (context, req) {
    // this is being read as a value from the configuraiton 
    // key: values in azure on the static web app
    const username = process.env.SMTP_USERNAME; 
    const password = process.env.SMTP_PASSWORD;

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, 
        auth: {
            user: username, 
            pass: password, 
        },
    });

    let info = await transporter.sendMail({
        from: username,
        to: username + ", safetyonboarding@marathonelectrical.com",
        subject: req.body.subject,
        html: req.body.message, // html body
    });

    console.log("Message sent: %s", info.messageId);
}