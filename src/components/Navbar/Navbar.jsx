import styles from "./Navbar.module.scss";

const Navbar = () => {
  // VARIABLES ----------------
  // CONDITIONS ---------------
  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src="assets/images/logo.svg" alt="Logo" />{" "}
      </div>
    </div>
  );
};

export default Navbar;
