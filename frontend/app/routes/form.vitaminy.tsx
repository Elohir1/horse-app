import type { MetaFunction } from "@remix-run/node";
import { VitaminyForm } from "components/VitaminyForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Vitaminy" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Vitaminy() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <VitaminyForm />
    </div>
  );
}
