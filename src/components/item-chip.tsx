import { ItemName } from "../types";
import { itemRarity } from "../data";

type Props = {
  name: ItemName;
  count?: number;
  deadDrop?: boolean;
};

export const ItemChip = ({ name, count, deadDrop }: Props) => {
  return (
    <span
      className={`item-chip ${itemRarity[name].toLowerCase()}`}
    >
      { name }
      { count ? ` x${count.toLocaleString()}` : ""}
      { deadDrop ? " 💀🗑️" : "" }
    </span>
  );
};
