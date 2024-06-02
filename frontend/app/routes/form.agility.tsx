import type { MetaFunction } from "@remix-run/node";
import { AgilityForm } from "components/AgilityForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Agility" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Agility() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <AgilityForm />
    </div>
  );
}
