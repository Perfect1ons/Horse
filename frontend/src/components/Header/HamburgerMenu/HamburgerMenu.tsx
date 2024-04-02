import "./HamburgerMenu.scss";

interface HamburgerMenuProps {
  show: () => void;
  menuActive: boolean;
}

const HamburgerMenu = ({ show, menuActive }: HamburgerMenuProps) => {
  return (
    <div className="hamburger">
      <button
        onClick={show}
        className={`hamburger-menu ${menuActive ? "menu-active" : ""}`}
      >
        <span></span>
      </button>
    </div>
  );
};

export default HamburgerMenu;
