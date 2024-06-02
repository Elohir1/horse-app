import type { MetaFunction } from "@remix-run/node";
import { ParkurForm } from "components/ParkurForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Parkur" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Parkur() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ParkurForm />
    </div>
  );
}
