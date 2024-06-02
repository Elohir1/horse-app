import type { MetaFunction } from "@remix-run/node";
import { KrmeniGrid } from "components/KrmeniGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Krmeni" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Krmeni() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <KrmeniGrid />
    </div>
  );
}
