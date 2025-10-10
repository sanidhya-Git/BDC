"use client";

import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}