import ".//Nav.scss";
import { useSelector, useDispatch } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import { uiActions } from "../../redux/ui-slice";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Nav = () => {
  const isMobile = useSelector((state) => state.ui.isMobile);
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <>
      {isMobile ? (
        <div className="mobile-nav">
          <p className="initials">LK</p>

          <Menu
            right
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => {
              dispatch(isOpen ? uiActions.openMenu() : uiActions.closeMenu());
            }}
            customBurgerIcon={false}
            customCrossIcon={false}
          >
            {/* X gumb za zatvaranje */}
            <button
              className="close-button"
              onClick={() => dispatch(uiActions.closeMenu())}
            >
              ✕
            </button>

            <a
              className="menu-item"
              href="#about"
              onClick={() => dispatch(uiActions.closeMenu())}
            >
              About
            </a>
            <a
              className="menu-item"
              href="#skills"
              onClick={() => dispatch(uiActions.closeMenu())}
            >
              Skills
            </a>
            <a
              className="menu-item"
              href="#projects"
              onClick={() => dispatch(uiActions.closeMenu())}
            >
              Projects
            </a>
            <a
              className="menu-item"
              href="#contact"
              onClick={() => dispatch(uiActions.closeMenu())}
            >
              Contact
            </a>
            <div className="menu-socials">
              <a
                href="https://github.com/Lukicaa20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/lukicaa20/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.codewars.com/users/Lukicaa20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodewars />
              </a>
            </div>
          </Menu>

          <button
            className="burger-toggle"
            onClick={() => dispatch(uiActions.toggleMenu())}
          >
            ☰
          </button>
        </div>
      ) : (
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
