import { Button, Checkbox, Group, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

export function HryForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {},

    validate: {},
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <input type="hidden" name="type" value="walk" />
      <DateInput label="Datum" placeholder="25. 5. 2024" />
      <TextInput withAsterisk label="Čas" placeholder="min" />
      <NumberInput withAsterisk label="Množství" placeholder="40" />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Uložit</Button>
        <Button type="reset">Zrušit</Button>
      </Group>
    </form>
  );
}