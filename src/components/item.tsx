import { ItemName } from "../types";
import { itemRarity } from "../data";

type Props = {
  name: ItemName;
};

export const Item = ({ name }: Props) => {
  return <span className={itemRarity[name].toLowerCase()}>{name}</span>;
};
