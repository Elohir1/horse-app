import { SimpleGrid } from "@mantine/core";
import { IconBarrierBlock, IconTrees, IconCircle, IconRouteX, IconHorse, IconVaccine, IconGrowth, IconOlympics} from "@tabler/icons-react";
import { Button } from '@mantine/core';

export function UserGrid() {
  return (
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div> 
      <a href="/grid/trenink">
      <Button variant="filled" color="blue" size="xl" radius="xl"><IconOlympics />Trénink{" "}</Button>
      </a></div>
      <div> 
      <a href="/grid/pece">
      <Button variant="filled" color="rgba(179, 25, 25, 1)" size="xl" radius="xl"><IconVaccine />Péče{" "}</Button>
      </a></div>
      <div> 
      <a href="/grid/prochazka">
      <Button variant="filled" color="green" size="xl" radius="xl"><IconTrees />Procházka{" "}</Button>
      </a></div>
      <div> 
      <a href="/grid/krmeni">
      <Button variant="filled" color="yellow" size="xl" radius="xl"><IconGrowth />Krmení{" "}</Button>
      </a></div>
      <div>
      <a href="/grid/horse">
        <Button variant="filled" color="purple" size="xl" radius="xl"> <IconHorse /> Thunderstorm{" "}</Button>
        </a></div>
        <div>
      <a href="/grid/horse">
        <Button variant="filled" color="purple" size="xl" radius="xl"> <IconHorse /> Windy{" "}</Button>
        </a></div>
    </SimpleGrid>
  );
}