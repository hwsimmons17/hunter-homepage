import Tester from "./Tester";
import Header from "./Header";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.tester}>
        <Tester />
      </div>

      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
