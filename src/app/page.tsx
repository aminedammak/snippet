import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`snippets/${snippet.id}`}
      className="flex border rounded p-2 justify-between"
    >
      <span>{snippet.title}</span>
      <span>View</span>
    </Link>
  ));
  return (
    <div className="my-4">
      <div className="flex justify-between mb-2">
        <h1 className="text-xl font-bold">New Snippet</h1>
        <Link href={"/snippets/new"} className="border rounded p-2">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
