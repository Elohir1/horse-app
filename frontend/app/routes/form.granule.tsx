import type { MetaFunction } from "@remix-run/node";
import { GranuleForm } from "components/GranuleForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Granule" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Granule() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <GranuleForm />
    </div>
  );
}
