import styles from "./Card.module.scss";

const Card = ({ data, title }) => {
  // VARIABLES ----------------

  // CONDITIONS ---------------

  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.Card}>
      <div className={styles.arrow}> </div>
      <div className={styles.Card_mainInfo}>
        <p>
          <span>{`${data.budget?.value + data.budget?.currencyCode}`}</span>
          per cabina
        </p>
        <h4 className={styles.title}>{data.title} </h4>
      </div>
      {/* // DEPARTURE */}
      <div className={styles.departure}>
        <div className={styles.left}>
          <p>
            <span> PARTENZA DA</span>
          </p>
          <p> {data.departure?.Port}</p>
        </div>
        <div className={styles.right}>
          <p>{data.boatType}</p>
          <p>{data.numberOfDays} giorni </p>
        </div>
      </div>
      {/* TIMING */}
      <div className={styles.Card_timing}>
        <div className={styles.left}>
          <p> {data.departureDate?.split(" ")[0].split("-").join("/")}</p>
          <p> {data.departureDate?.split(" ")[1]?.slice(0, -3)}</p>
        </div>
        <div className={styles.right}>
          <p> {data.arrivalDate?.split(" ")[0].split("-").join("/")}</p>
          <p> {data.arrivalDate.split(" ")[1].slice(0, -3)}</p>
        </div>
      </div>
      <div className={styles.accomodation}>
        <p>
          {data.reservations} {data.reservationsType}
        </p>
        <p>
          {" "}
          <span>Disponibilità </span> {data.reservationsAvailable}
        </p>
      </div>

      <div className={styles.input}>
        <input type="button" value="PRENOTA" />
      </div>
    </div>
  );
};

export default Card;
