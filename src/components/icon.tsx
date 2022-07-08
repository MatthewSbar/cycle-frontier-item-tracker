import { IconName } from "../types";

type Props = {
  name: IconName;
  classes?: string[];
};

export const Icon = ({ name, classes }: Props) => {
  return <span className={`material-symbols-outlined ${classes}`}>{name}</span>;
};
