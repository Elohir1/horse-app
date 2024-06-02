import { SimpleGrid } from "@mantine/core";
import { IconBarrierBlock, IconTrees, IconCircle, IconRouteX} from "@tabler/icons-react";
import { Button } from '@mantine/core';

export function TreninkGrid() {
  return (
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div>
      <a href="/form/drezura">
      <Button variant="filled" color="blue" size="xl" radius="xl"><IconRouteX />  Drezura{" "}</Button> 
      </a></div>

      <div>
      <a href="/form/parkur">
      <Button variant="filled" color="blue" size="xl" radius="xl"><IconBarrierBlock />Parkur</Button>
      </a></div>

      <div>
      <a href="/form/teren">
      <Button variant="filled" color="blue" size="xl" radius="xl"><IconTrees />Terén{" "}</Button>
      </a></div>

      <div> 
      <a href="/form/lonz">
      <Button variant="filled" color="blue" size="xl" radius="xl"><IconCircle />Lonž{" "}</Button>
      </a></div>
    </SimpleGrid>
  );
}