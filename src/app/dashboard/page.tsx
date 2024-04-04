import { sendEmail } from "./_actions";

const Dash = async () => {
  // Assuming you have already imported and defined the sendEmail function

  const recipient = "sanukjoseph10101@gmail.com"; // Replace with the recipient's email address
  const subject = "Test Email";
  const body =
    "<h1>Hello!</h1><p>This is a test email sent from the Google API.</p>"; // HTML content for the email body

  const data = await sendEmail(recipient, subject, body);

  return (
    <div className="flex h-full items-center justify-center text-center">
      Preview
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dash;
