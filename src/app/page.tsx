import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import InputPrompt from "@/components/instances/input";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return <>Hello</>;
}
