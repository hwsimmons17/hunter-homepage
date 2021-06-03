import { Container } from "react-bootstrap";

import styles from "../styles/Timeline.module.css";

const Timeline = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Timeline</h1>
        <h3>2021</h3>
        <p>Got engaged 💍</p>
        <p>Graduated from BYU with a degree in Economics 🎓</p>
        <p>
          Interned with a healthcare private equity firm,{" "}
          <a href="https://leavittequity.com/" target="_blank">
            Leavitt Equity Partners
          </a>{" "}
          👨‍⚕️
        </p>
        <hr />
        <h3>2020</h3>
        <p>
          Interned with a middle market private equity firm,{" "}
          <a href="https://www.tacomaholdings.com/" target="_blank">
            Tacoma Holdings
          </a>{" "}
          🏢
        </p>
        <p>
          Interned with a real estate private equity firm,{" "}
          <a href="https://roundhillcapital.com/" target="_blank">
            Round Hill Capital
          </a>{" "}
          🏠
        </p>
        <hr />
        <h3>2019</h3>
        <p>Went on a family cruise to Mexico. It was a blast! 🚢</p>
        <p>
          Interned on Capial Hill with the{" "}
          <a href="https://www.jec.senate.gov/public/" target="_blank">
            Joint Economic Committee
          </a>{" "}
          🏛
        </p>
        <p>Returned home from an LDS mission to Gilbert, AZ 🌵</p>
        <hr />
        <h3>2017</h3>
        <p>Left for an LDS mission to Gilbert, AZ 🌵</p>
        <hr />
        <h3>2015</h3>
        <p>Started my freshman year at BYU 🏫</p>
        <p>Graduated from Yorktown High School 👨‍🎓</p>
        <hr />
        <h3>1997</h3>
        <p>Born in Arlington, VA 👶</p>
        <hr />
      </div>
    </Container>
  );
};

export default Timeline;
