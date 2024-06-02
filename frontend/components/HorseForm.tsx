import { Button, Checkbox, Group, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

export function HorseForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {},

    validate: {},
  });

  return (
<form onSubmit={form.onSubmit((values) => console.log(values))}>
<div className="card" data-v0-t="card">
  <div className="card-header">
    <img src="/horsephoto.jpg" alt="Horse" width={600} height={400} />
    <div className="card-header-overlay">
      <h2 className="text-xl font-bold">Thunderstorm</h2>
    </div>
  </div>
  <div className="card-content">
    <div className="grid">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <circle cx={11} cy={4} r={2} />
          <circle cx={18} cy={8} r={2} />
          <circle cx={20} cy={16} r={2} />
          <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </svg>
        <span className="text-sm font-medium">Breed: Clydesdale</span>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width={18} height={18} x={3} y={4} rx={2} />
          <path d="M3 10h18" />
        </svg>
        <span className="text-sm font-medium">Age: 8 years</span>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1={9} x2="9.01" y1={9} y2={9} />
          <line x1={15} x2="15.01" y1={9} y2={9} />
        </svg>
        <span className="text-sm font-medium">Temperament: Gentle</span>
      </div>
    </div>
    <div className="divider" role="none" />
    <div className="grid">
      <h3 className="text-lg font-semibold">About Thunderstorm</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Thunderstorm is a majestic Clydesdale horse with a gentle temperament.
        At 8 years old, he is a loyal and hardworking companion, always ready to
        lend a helping hoof. With his powerful build and calm demeanor,
        Thunderstorm is the perfect horse for both experienced riders and those
        just starting their equestrian journey.
      </p>
    </div>
  </div>
</div>
</form>
);
}