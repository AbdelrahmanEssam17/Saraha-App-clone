import nodemailer from 'nodemailer'


// Wrap in an async IIFE so we can use await.
export const sendEmail=async({to=[],cc=[],bcc=[],subject="confirm email",text='',html=''}    ={  }) => {
    const transporter = nodemailer.createTransport({
    service:'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});
  const info = await transporter.sendMail({
    from: `"elbody" <${process.env.EMAIL}>`,
    to: "elbodyeessam17@gmail.com",



    subject,
    text ,
    html ,     
  });
  return info 

  console.log("Message sent:", info.messageId);
};
 