const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  let errors = false;

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "hunterwilliamsimmons@gmail.com",
    from: "hello@hunterwsimmons.com",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  if (body.name.trim() === "") errors = true;
  if (body.email.trim() === "") errors = true;
  if (body.message.trim() === "") errors = true;

  mail.send(data);

  res.status(200).json({ error: errors });
};
