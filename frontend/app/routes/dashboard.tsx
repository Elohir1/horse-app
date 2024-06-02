import type { MetaFunction } from "@remix-run/node";
import { NumberInput } from "@mantine/core";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Dashboard() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <NumberInput
        label="Zadejte hodnotu"
        description="Dashboard"
        placeholder="Zde zadejte množství"
      />
    </div>
  );
}
