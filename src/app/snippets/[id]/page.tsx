import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface props {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: props) {
  await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
