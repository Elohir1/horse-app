import type { MetaFunction } from "@remix-run/node";
import { KovarForm } from "components/KovarForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Kovar" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Kovar() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <KovarForm />
    </div>
  );
}
