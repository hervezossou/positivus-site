"use client"
import { Typography } from "./components/atoms/Typography";
import { Button } from "./components/atoms/Button";
import { Heading } from "./components/atoms/Heading";

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
    </main>
  );
}
