export interface ProtocolOption {
  id: string;
  name: string;
}

const protocolOptions: ProtocolOption[] = [
  { id: "1", name: "Smoking" },
  { id: "2", name: "Depression iTBS" },
  { id: "3", name: "OCD_New" },
];

export const getProtocolOptions = (): ProtocolOption[] => {
  return protocolOptions;
};
