"use client"
import { Typography } from "./components/common/atoms/Typography";
import { Button } from "./components/common/atoms/Button";
import { Heading } from "./components/common/atoms/Heading";
import { TextLink } from "./components/common/atoms/TextLink";
import { IconLink } from "./components/common/atoms/IconLink";
import { Logo } from "./components/common/atoms/Logo";

export default function Page() {
  return (
    <main className="p-8 max-w-screen max-h-screen">
        <Typography variant="h1">
          Bienvenue sur ma landing page
        </Typography>
        <Typography variant="p" className="mb-8">
          Découvrez une solution rapide, moderne et adaptée à vos besoins.
        </Typography>
        <Button variant="positive" label="Book a consultation" />
        <Heading variant="lime" label="Team" />
        <TextLink variant="lime" label="Lean more" href="#" />
        <IconLink variant="dark" label="Learn more" href="#" />
        <Logo mode="dark" />
    </main>
  );
}
