import type { MetaFunction } from "@remix-run/node";
import { TreninkGrid } from "components/TreninkGrid";
import { Button } from '@mantine/core';

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Trenink" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Trenink() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <TreninkGrid />
    </div>
  );
}
