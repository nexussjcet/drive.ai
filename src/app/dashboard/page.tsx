import { getServerAuthSession } from "@/server/auth";
import SignoutButton from "./_components/signout";

import { google } from "googleapis";

const Dashboard = async () => {
  const session = await getServerAuthSession();
  if (!session) return null;

  const oauth2Client = new google.auth.OAuth2({});

  oauth2Client.setCredentials({
    access_token: session.accessToken,
    refresh_token: session.refreshToken,
  });

  if (
    (await oauth2Client.getTokenInfo(session.accessToken)).expiry_date <
    Date.now() / 1000
  ) {
    const { credentials } = await oauth2Client.refreshAccessToken();
    const newAccessToken = credentials.access_token;
    session.accessToken = newAccessToken as string;
  }

  async function handler() {
    try {
      const drive = google.drive({ version: "v3", auth: oauth2Client });
      const driveResponse = await drive.files.list({
        pageSize: 30,
        fields: "files(id, name, mimeType)",
      });
      if (!driveResponse.data.files) {
        throw new Error("No files found");
      }
      return driveResponse.data.files;
    } catch (error) {
      console.error("Error listing files:", error);
    }
  }
  const files = await handler();
  return (
    <div>
      Dashboard
      <pre>{JSON.stringify(session, null, 4)}</pre>
      <SignoutButton />
      <pre>{JSON.stringify(files, null, 4)}</pre>
    </div>
  );
};

export default Dashboard;
