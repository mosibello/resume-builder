import React from "react";
import Bounded from "@/components/wrappers/Bounded";
import Container from "@/components/wrappers/Container";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import StaticResumeTemplate from "@/components/partials/StaticResumeTemplate";

export default async function Home() {
  return (
    <>
      <Bounded className="bg-[#fafbfd] b__size-lg b__hero_variant01 relative">
        <Container>
          <StaticResumeTemplate />
        </Container>
      </Bounded>
    </>
  );
}
