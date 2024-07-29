const nodemailer = require("nodemailer");
const ejs = require("ejs");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.firstName = user.firstName;
    this.from = "Admin <admin@email.com>";
  }

  newTransport() {
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 465,
      secure: false,
      auth: {
        user: "9abc5698d0f070",
        pass: "8a6e2a50f0bbc3",
      },
    });
  }

  // Send the actual email
  async send(templatePath, subject) {
    // 1) Render HTML based on a ejs templatePath
    const html = await ejs.renderFile(templatePath, {
      firstName: this.firstName,
      subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  //send pug template with template name and message as arguments
  async sendWelcome() {
    await this.send(
      `${__dirname}/mailer/templates/welcome/welcome.ejs`,
      "Welcome to the Fitbit Family!"
    );
  }
};
