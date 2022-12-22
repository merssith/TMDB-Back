const { transporter } = require("../config/mailer");
const { readHTMLFile } = require("../utils/functions");
let handlebars = require("handlebars");

exports.sendRegisterEmail = (user) => {
  const capUserName =
    user.userName.charAt(0).toUpperCase() + user.userName.slice(1);
  readHTMLFile(
    __dirname + "/../utils/emails/registerEmail.html",
    function (err, html) {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      let template = handlebars.compile(html);
      let replacements = {
        userName: capUserName,
      };
      let htmlToSend = template(replacements);
      let mailOptions = {
        from: '"TMDB By Mechi" <email.service.test2022@gmail.com>',
        to: user.email,
        subject: "Successful registration",
        html: htmlToSend,
      };
      transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log(error);
        }
      });
    }
  );
};
