import SignoutButton from "./_components/signout";
import { listGoogleContacts, listGoogleDriveFiles } from "./_actions";
import Link from "next/link";

const Dashboard = async () => {
  const files = await listGoogleDriveFiles();
  const contacts = await listGoogleContacts();

  return (
    <div>
      <SignoutButton />
      <pre>{JSON.stringify(contacts, null, 4)}</pre>
      {files && (
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              {file.name} ({file.mimeType})
              <Link href={`/dashboard/${file.id}`}>
                <>View</>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
