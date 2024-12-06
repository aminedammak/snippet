import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetEditingProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditingPage(props: SnippetEditingProps) {
  const snippetId = props.params.id;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(snippetId),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div>This from server component</div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
