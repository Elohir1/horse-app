import type { MetaFunction } from "@remix-run/node";
import { NumberInput } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';
import { UserGrid } from "components/UserGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function User() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <UserGrid />
    </div>
  );
}

