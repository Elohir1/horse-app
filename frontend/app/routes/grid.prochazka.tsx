import type { MetaFunction } from "@remix-run/node";
import {  ProchazkaGrid } from "components/ProchazkaGrid";
import { Button } from '@mantine/core';

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Prochazka" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Prochazka() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <ProchazkaGrid />
    </div>
  );
}
