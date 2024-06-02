import type { MetaFunction } from "@remix-run/node";
import { VeterinarForm } from "components/VeterinarForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Veterinar" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Veterinar() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <VeterinarForm />
    </div>
  );
}
