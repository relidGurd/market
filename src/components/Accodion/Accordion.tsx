import { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem/AccordionItem";

const massive = [
  {
    id: 1,
    title: "Надежное ведение дел",
    description: "lorem1",
  },
  {
    id: 2,
    title: "Быстрый обмен с конрагентами",
    description: "lorem2",
  },
  {
    id: 3,
    title: "Понятный инерфейс",
    description: "lorem3",
  },
];

const Accordion = (props: { massive: any }) => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const chooseTabActive = (id: number) => {
    setActiveTab(id);
  };

  return (
    <section className="custom-section">
      <div className="custom-container">
        <div className={styles.accordionContainer}>
          <div className={styles.tabButtonList}>
            <div className={styles.sectionTabsInfo}>
              <h2 className={`title-section `}>Электронный документооборот</h2>
              <p>
                Попасть на ВДНХ можно пешком, на общественном транспорте или на
                автомобиле. Предлагаем оптимально спланировать свой маршрут,
                чтобы быстрее добраться до цели вашего посещения и для
                комфортного перемещения по территории.
              </p>
            </div>
            {massive.map((el: any, index) => (
              <button
                className={`${styles.tabButton} ${
                  activeTab === el.id ? styles.tabActive : ""
                }`}
                onClick={() => chooseTabActive(el.id)}
                key={el.id}
              >
                {el.title}
              </button>
            ))}
          </div>

          {massive.map((el: any, index) => (
            <>
              {activeTab === el.id && (
                <div className={styles.tabContent} key={el.id}>
                  <h3>Описание товара</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus blanditiis excepturi laborum libero inventore
                    maiores omnis laudantium voluptatum porro, repellendus earum
                    numquam quae ducimus molestiae placeat, eos, mollitia
                    architecto quibusdam?
                  </p>
                  <ul>
                    <li>Характеристика 1</li>
                    <li>Характеристика 2</li>
                    <li>Характеристика 3</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus blanditiis excepturi laborum libero inventore
                    maiores omnis laudantium voluptatum porro, repellendus earum
                    numquam quae ducimus molestiae placeat, eos, mollitia
                    architecto quibusdam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus blanditiis excepturi laborum libero inventore
                    maiores omnis laudantium voluptatum porro, repellendus earum
                    numquam quae ducimus molestiae placeat, eos, mollitia
                    architecto quibusdam?
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
