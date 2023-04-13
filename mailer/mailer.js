const mailer = require('nodemailer');



const mail =async (to, subject, text) => {
    let testAccount = await mailer.createTestAccount();
    const transporter = mailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, auth: {
            // user: "yusuffrasheed.yr@gmail.com",
            // pass: ""
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass,
        }
    })

    var option = {
        from: "yusuffrasheed.yr@gmail.com",
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(option, (err, info) => {
        if (!err) {
            console.log(info.response, info.envelope);
        }
        console.log(err.message, info);

    });


}

module.exports = mail;