import type { MetaFunction } from "@remix-run/node";
import { DalsiForm } from "components/DalsiForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Dalsi" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Dalsi() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <DalsiForm />
    </div>
  );
}
