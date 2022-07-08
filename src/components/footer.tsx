import { flushLocalData } from "../common/util";

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/MatthewSbar/cycle-frontier-item-tracker">
        Github
      </a>{" "}
      · <a href="https://www.patreon.com/Vedgy">Patreon</a> ·{" "}
      <a href="https://vedgy.bandcamp.com/">Check out my mixtape</a> ·{" "}
      <button className="delete-button" onClick={() => flushLocalData()}>
        🚽 Flush local data
      </button>
    </footer>
  );
};
