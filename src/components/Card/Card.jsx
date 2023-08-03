import styles from "./Card.module.scss";

const Card = ({ data }) => {
  // VARIABLES ----------------

  // const data = {
  //   id: "61a52052759e7f71d786",
  //   code: "8142-90724",
  //   title: "Isole Egadi",
  //   departure: {
  //     portCode: "FVG",
  //     countryCode: "IT",
  //     Port: "Favignana",
  //   },
  //   arrival: {
  //     portCode: "FVG",
  //     countryCode: "IT",
  //     Port: "Favignana",
  //   },
  //   budget: {
  //     currencyCode: "€",
  //     value: 480,
  //     costType: "per cabina",
  //   },
  //   itinerary: [
  //     {
  //       portCode: "LVN",
  //       countryCode: "IT",
  //       Port: "Levanzo",
  //     },
  //     {
  //       portCode: "MRT",
  //       countryCode: "IT",
  //       Port: "Marettimo",
  //     },
  //   ],
  //   numberOfDays: 3,
  //   reservationsAvailable: 2,
  //   reservations: 4,
  //   reservationsType: "cabine",
  //   boatType: "Barca a vela",
  //   departureDate: "2023-08-07 7:50:00",
  //   arrivalDate: "2023-08-09 15:00:00",
  // };

  // CONDITIONS ---------------

  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.Card}>
      <div className={styles.Card_mainInfo}>
        <p>
          <span>{`${data.budget.value + data.budget.currencyCode}`}</span>
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
          <p> {data.departure.Port}</p>
        </div>
        <div className={styles.right}>
          <p>{data.boatType}</p>
          <p>{data.numberOfDays} </p>
        </div>
      </div>
      {/* TIMING */}
      <div className={styles.Card_timing}>
        <div className={styles.left}>
          <p> {data.departureDate.split(" ")[0]}</p>
          <p> {data.departureDate.split(" ")[1].slice(0, -3)}</p>
        </div>
        <div className={styles.right}>
          <p> {data.arrivalDate.split(" ")[0]}</p>
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
