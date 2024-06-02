import { SimpleGrid } from "@mantine/core";
import {IconFlower, IconProgressCheck, IconSwimming, IconPacman } from "@tabler/icons-react";
import { Button } from '@mantine/core';

export function ProchazkaGrid() {
  return (
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div>
      <a href="/form/paseni">
      <Button variant="filled" color="green" size="xl" radius="xl"> <IconFlower />Pasení{" "}</Button>
      </a></div>

      <div>
      <a href="/form/hry">
      <Button variant="filled" color="green" size="xl" radius="xl">  <IconPacman />Hry{" "}</Button>
      </a></div>

      <div>
      <a href="/form/agility">
      <Button variant="filled" color="green" size="xl" radius="xl"> <IconProgressCheck />Agility a pozitivka{" "}</Button>
      </a></div>

      <div> 
      <a href="/form/plaveni">
      <Button variant="filled" color="green" size="xl" radius="xl"> <IconSwimming />Plavení{" "}</Button>
      </a></div>
    </SimpleGrid>
  );
}
