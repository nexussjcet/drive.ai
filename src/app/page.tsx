import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { LoginForm } from "@/components/madeup/login";
import { CardDemo } from "@/components/madeup/permission_false";
import { Dashboard } from "@/components/madeup/permission_true";
import { listGoogleDriveFiles, listGoogleContacts } from "./_actions";
import { Suspense } from "react";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();
  const shouldShowCardDemo = true;
  const files = await listGoogleDriveFiles();
  const contacts = await listGoogleContacts();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {shouldShowCardDemo ? (
        <Suspense>
          <Dashboard files={files} contacts={contacts} />
        </Suspense>
      ) : (
        <CardDemo />
      )}
    </div>
  );
}
