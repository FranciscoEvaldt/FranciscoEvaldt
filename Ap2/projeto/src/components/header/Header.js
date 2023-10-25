/* eslint-disable jsx-a11y/alt-text */
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header">
      <img
        className="img"
        src="data:image/png;base64,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"
      />

      <h1 className="headerTitle">{title}</h1>
    </header>
  );
}

export default Header;
