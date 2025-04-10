import React from "react";
import Bounded from "@/components/wrappers/Bounded";
import Container from "@/components/wrappers/Container";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default async function Home() {
  return (
    <>
      <Bounded className="b__size-xl b__hero_variant01 relative">
        Hello Resume
      </Bounded>
    </>
  );
}
