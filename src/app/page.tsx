import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { LoginForm } from "@/components/madeup/login";
import { CardDemo } from "@/components/madeup/permission_false";
import { Dashboard } from "@/components/madeup/permission_true";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();
  const shouldShowCardDemo = true;
  
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {shouldShowCardDemo ? <Dashboard /> : <CardDemo />}
    </div>
  );
}
