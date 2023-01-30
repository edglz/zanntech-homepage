import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Pagos en cualquier plataforma
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Manejamos pagos con cualquier método de pago, por lo que tu dinero siempre estará seguro.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
