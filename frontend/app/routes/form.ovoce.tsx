import type { MetaFunction } from "@remix-run/node";
import { OvoceForm } from "components/OvoceForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Ovoce" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Ovoce() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <OvoceForm />
    </div>
  );
}
