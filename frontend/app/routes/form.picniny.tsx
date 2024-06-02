import type { MetaFunction } from "@remix-run/node";
import { PicninyForm } from "components/PicninyForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Picniny" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Picniny() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <PicninyForm />
    </div>
  );
}
