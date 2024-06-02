import type { MetaFunction } from "@remix-run/node";
import { PlaveniForm } from "components/PlaveniForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Plaveni" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Plaveni() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <PlaveniForm />
    </div>
  );
}
