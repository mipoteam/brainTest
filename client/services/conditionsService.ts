export interface Condition {
  id: string;
  name: string;
}

const conditions: Condition[] = [
  { id: "1", name: "Depression" },
  { id: "2", name: "OCD" },
  { id: "3", name: "Smoking" },
];

export const getConditions = (): Condition[] => {
  return conditions;
};
