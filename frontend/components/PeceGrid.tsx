import { SimpleGrid} from "@mantine/core";
import { IconHorseshoe, IconMedicineSyrup, IconPills, IconVaccine } from "@tabler/icons-react";
import { Button } from '@mantine/core';

export function PeceGrid() {
  return (
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div>
        <a href="/form/veterinar">
        <Button variant="filled" color="rgba(179, 25, 25, 1)" size="xl" radius="xl"> <IconVaccine />Veterinář{" "}</Button>
        </a></div>

      <div>
      <a href="/form/kovar">
        <Button variant="filled" color="rgba(179, 25, 25, 1)" size="xl" radius="xl"> <IconHorseshoe />Kovářř{" "}</Button>
        </a></div>

      <div>
      <a href="/form/osetreni">
      <Button variant="filled" color="rgba(179, 25, 25, 1)" size="xl" radius="xl"> <IconMedicineSyrup />Ošetření{" "}</Button>
      </a></div>

      <div> 
      <a href="/form/dalsi">
      <Button variant="filled" color="rgba(179, 25, 25, 1)" size="xl" radius="xl"> <IconPills />Další{" "}</Button>
      </a></div>
    </SimpleGrid> 
  );
}
