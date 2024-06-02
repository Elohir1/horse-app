import type { MetaFunction } from "@remix-run/node";
import { HryForm } from "components/HryForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Hry" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Hry() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <HryForm />
    </div>
  );
}
