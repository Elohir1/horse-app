import type { MetaFunction } from "@remix-run/node";
import {  PeceGrid } from "components/PeceGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Pece" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Pece() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <PeceGrid />
    </div>
  );
}
