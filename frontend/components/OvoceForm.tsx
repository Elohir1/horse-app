import { Button, Checkbox, Group, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

export function OvoceForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {},

    validate: {},
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <input type="hidden" name="type" value="feed" />
      <DateInput label="Datum" placeholder="25. 5. 2024" />
      <TextInput withAsterisk label="Jednotka" placeholder="ks" />
      <NumberInput withAsterisk label="Množství" placeholder="2" />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Uložit</Button>
        <Button type="reset">Zrušit</Button>
      </Group>
    </form>
  );
}