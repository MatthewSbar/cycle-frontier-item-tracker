type Props = {
  offsetLeft: number;
  offsetTop: number;
  fontSize: number;
};

export const Checkmark = ({ offsetLeft, offsetTop, fontSize }: Props) => {
  return (
    <span
      className="checkmark-wrapper"
      style={{
        left: `${offsetLeft}px`,
        top: `${offsetTop}px`,
      }}
    >
      <span
        className="checkmark material-symbols-outlined"
        style={{
          fontSize: `${fontSize}px`,
        }}
      >
        done
      </span>
    </span>
  );
};
