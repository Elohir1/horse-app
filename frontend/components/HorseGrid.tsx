import { SimpleGrid} from "@mantine/core";
import { IconHorse} from "@tabler/icons-react";
import { Button } from '@mantine/core';

export function HorseGrid() {
  return (
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div>
      <a href="/form/horse">
        <Button variant="filled" color="purple" size="xl" radius="xl"> <IconHorse /> Thunderstorm{" "}</Button>
        </a></div>
        
        <div>
      <a href="/form/horse2">
        <Button variant="filled" color="purple" size="xl" radius="xl"> <IconHorse /> Windy{" "}</Button>
        </a></div>
        </SimpleGrid> 
 );
}
