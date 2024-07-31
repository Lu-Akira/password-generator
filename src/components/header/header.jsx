import "./header.css";

function Header({ headerContent }) {
  return (
    <div className="container-header">
      <span className="container-title">{headerContent}</span>
    </div>
  );
}

export default Header;
