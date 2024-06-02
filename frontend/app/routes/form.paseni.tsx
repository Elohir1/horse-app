import type { MetaFunction } from "@remix-run/node";
import { PaseniForm } from "components/PaseniForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Paseni" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Paseni() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <PaseniForm />
    </div>
  );
}
