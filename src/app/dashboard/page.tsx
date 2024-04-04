import { sendEmail } from "./_actions";

import Image from "next/image";

const Dash = async () => {
  // Assuming you have already imported and defined the sendEmail function

  const recipient = "sanukjoseph10101@gmail.com"; // Replace with the recipient's email address
  const subject = "Test Email";
  const body =
    "<h1>Hello!</h1><p>This is a test email sent from the Google API.</p>"; // HTML content for the email body

  const data = await sendEmail(recipient, subject, body);

  return (
    <div className="flex h-full items-center justify-center rounded-xl bg-muted/90 text-center">
      <Image
        className="grayscale-[50%]"
        src="/illu.png"
        alt="Empty"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Dash;
