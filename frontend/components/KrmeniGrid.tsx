import { SimpleGrid } from "@mantine/core";
import { IconCarrot, IconGrowth, IconLeaf, IconPill } from "@tabler/icons-react";
import { Button } from '@mantine/core';

export function KrmeniGrid() {
  return (
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div>
      <a href="/form/picniny">
      <Button variant="filled" color="yellow" size="xl" radius="xl"> <IconLeaf />Pícniny{" "}</Button>
      </a></div>
      <div>
      <a href="/form/granule">
      <Button variant="filled" color="yellow" size="xl" radius="xl"> <IconGrowth />Granule a obilí{" "}</Button>
      </a></div>
      <div>
      <a href="/form/ovoce">
      <Button variant="filled" color="yellow" size="xl" radius="xl"> <IconCarrot />Ovoce, zelenina a pamlsky{" "}</Button>
      </a></div>
      <div> 
      <a href="/form/vitaminy">
      <Button variant="filled" color="yellow" size="xl" radius="xl"> <IconPill />Vitamíny a minerály{" "}</Button>
      </a></div>
    </SimpleGrid>
  );
}
