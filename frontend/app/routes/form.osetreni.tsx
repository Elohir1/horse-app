import type { MetaFunction } from "@remix-run/node";
import { OsetreniForm } from "components/OsetreniForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Osetreni" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Osetreni() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <OsetreniForm />
    </div>
  );
}
