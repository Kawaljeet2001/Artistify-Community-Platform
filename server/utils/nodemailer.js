const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require('path')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  post: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_APP_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

transporter.use("compile", hbs(handlebarOptions));
const sendMail = async (res, resetPasswordLink, email) => {
  try {
    let transporterOptions = {
      from: '"Artistify" <batrakawaljeetsingh@gmail.com>',
      to: "img_2019027@iiitm.ac.in",
      subject: "Reset Password request",
      text: `For passsord reset click here ${resetPasswordLink}`,
      template: "resetEmail", // the name of the template file i.e email.handlebars
      context: {
        email: email, // replace {{name}} with Adebola
        link: resetPasswordLink, // replace {{company}} with My Company
      },
    };

    const response = await transporter.sendMail(transporterOptions);
    if (response) {
      res.status(200).send("Done balle balle");
    }
  } catch (err) {
    res.status(500).send({
      message: "Error in reseting password. Please try again.",
    });
  }
};

module.exports = sendMail;
