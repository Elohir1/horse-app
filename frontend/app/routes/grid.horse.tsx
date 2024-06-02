import type { MetaFunction } from "@remix-run/node";
import { HorseGrid } from "components/HorseGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Horse" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Horse() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <HorseGrid />
    </div>
  );
}
