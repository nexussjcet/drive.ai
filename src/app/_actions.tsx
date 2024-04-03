"use server";

import { getServerAuthSession } from "@/server/auth";
import { google } from "googleapis";
import { notFound } from "next/navigation";

async function setupOAuth2Client() {
  const session = await getServerAuthSession();
  if (!session) return notFound();
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
  return oauth2Client;
}

async function listGoogleDriveFiles() {
  try {
    const oauth2Client = await setupOAuth2Client();
    if (!oauth2Client) return null;
    const drive = google.drive({ version: "v3", auth: oauth2Client });
    const driveResponse = await drive.files.list({
      fields: "files(id, name, mimeType)",
      q: "mimeType='text/plain' or mimeType='application/pdf' or mimeType='application/vnd.google-apps.document' or mimeType='text/markdown'",
    });
    const files = driveResponse.data.files;
    if (!files) {
      throw new Error("No files found");
    }
    return files;
  } catch (error) {
    console.error("Error listing or searching files:", error);
  }
}

async function listGoogleContacts() {
  try {
    const oauth2Client = await setupOAuth2Client();
    if (!oauth2Client) return null;

    const people = google.people({ version: "v1", auth: oauth2Client });
    const contactsResponse = await people.people.connections.list({
      resourceName: "people/me",
      pageSize: 50,
      personFields: "names,emailAddresses",
    });
    const contacts = contactsResponse.data.connections;
    if (!contacts) {
      throw new Error("No contacts found");
    }
    return contacts;
  } catch (error) {
    console.error("Error listing contacts:", error);
  }
}

// async function getSpecificFile(fileId: string) {
//   try {
//     const oauth2Client = await setupOAuth2Client();
//     if (!oauth2Client) return null;
//     const drive = google.drive({ version: "v3", auth: oauth2Client });
//     const driveResponse = await drive.files.get({
//       fileId: fileId,
//       //   fields: "id, name, mimeType",
//     });
//     // console.log("driveResponse", driveResponse);
//     const file = driveResponse;
//     if (!file) {
//       throw new Error("No file found");
//     }
//     return file;
//   } catch (error) {
//     console.error("Error getting file:", error);
//   }
// }

export { listGoogleDriveFiles, listGoogleContacts };
