import styles from "./Sections.module.scss";

import Card from "@/components/Card";

const Sections = ({ location, places, showTitle }) => {
  return (
    <div className={styles.Sections}>
      {showTitle && <h2 className={styles.Sections_title}>{location}</h2>}
      <div className={styles.card}>
        {places.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Sections;
