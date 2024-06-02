import type { MetaFunction } from "@remix-run/node";
import { TerenForm } from "components/TerenForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Teren" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Teren() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <TerenForm />
    </div>
  );
}
