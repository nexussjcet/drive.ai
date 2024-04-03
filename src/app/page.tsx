import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { LoginForm } from "@/components/madeup/login";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Home page
    </div>
  );
}
