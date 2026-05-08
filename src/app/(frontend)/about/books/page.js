"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import BooksClient from "./bookClient";
import PageBanner from "@/components/PageBanner";

export default async function BooksPage() {
  const payload = await getPayload({ config });
  const books = await payload.find({ 
    collection: "books", 
    limit: 1000, 
  });
  
  return (
    <>
      <PageBanner title="Books" />
      <div className="container mx-auto px-4 py-12">
            <BooksClient books={books.docs} />
      </div>
    </>
  );
}
