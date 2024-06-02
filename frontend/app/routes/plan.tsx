import type { MetaFunction } from "@remix-run/node";
import { NumberInput } from "@mantine/core";

export const meta: MetaFunction = () => {
  return [
    { title: "Horse App" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Plan() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <NumberInput
        label="Zadejte hodnotu"
        description="Uveďte číslo"
        placeholder="Zde zadejte množství"
      />
    </div>
  );
}
