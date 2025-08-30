import jwt from 'jsonwebtoken';
import { EventEmitter } from 'node:events';
import { sendEmail } from '../email.js';
export const emailEvent = new EventEmitter();
emailEvent.on("sendEmail", async (data) => {
  console.log("email event");
  const { email } = data;
  const emailToken = jwt.sign({ email }, process.env.EMAIL_SIGNATURE);
  const emailLink = `${process.env.FE_URL}/confirmEmail/${emailToken}`;
  await sendEmail({
    to: email,
    subject: 'Confirm-Email'
  });
});
