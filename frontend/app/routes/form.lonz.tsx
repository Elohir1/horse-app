import type { MetaFunction } from "@remix-run/node";
import { LonzForm } from "components/LonzForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Lonz" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Lonz() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <LonzForm />
    </div>
  );
}
