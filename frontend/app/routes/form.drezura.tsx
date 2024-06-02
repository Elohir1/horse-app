import type { MetaFunction } from "@remix-run/node";
import { DrezuraForm } from "components/DrezuraForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Drezura" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Drezura() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <DrezuraForm />
    </div>
  );
}
