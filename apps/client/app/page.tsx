import { trpc } from "../app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return <div>{greeting}</div>;
}
