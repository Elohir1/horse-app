import { Horse2Form } from "components/Horse2Form";
import type { MetaFunction } from "@remix-run/node";
import { useForm } from "@mantine/form";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App - Horse2" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Horse2() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Horse2Form />
    </div>
  );
}
