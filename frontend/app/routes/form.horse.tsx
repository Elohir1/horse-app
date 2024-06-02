import { HorseForm } from "components/HorseForm";
import { useForm } from "@mantine/form";

export const meta: Function = () => {
  return [
    { title: "Horse App - Horse1" },
    { name: "description", content: "Welcome to Horse App!" },
  ];
};

export default function Horse() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <HorseForm />
    </div>
  );
}
