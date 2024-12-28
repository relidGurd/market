"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="custom-container">
        <div className={styles.footerContainer}>
          <div className={styles.footerFSection}>
            <div className={styles.footerLogoContainer}>
              <Image
                className={styles.footerLogoImage}
                src={"/logo1fc.svg"}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <span></span>
            <div className={styles.footerFormSection}>
              <span className={styles.footerColumnTitle}>
                Остались вопросы?
              </span>
              {/* <form className={styles.footerForm}>
                <input
                  placeholder="+7 (999) 999-99-99"
                  className={styles.footerInput}
                  type="number"
                />
                <button className={styles.footerButton}>Отправить</button>
              </form> */}
              <Formik
                initialValues={{ phone: "" }}
                onSubmit={() => console.log("Success")}
              >
                <Form className={styles.footerForm}>
                  <div className={styles.footerInput}>
                    <Field
                      name="phone"
                      id="phone"
                      type="number"
                      placeholder="+7 (999) 999-99-99"
                    />
                    <ErrorMessage name="phone">
                      {() => <div>Errr</div>}
                    </ErrorMessage>
                  </div>
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
            <div>
              <span className={styles.footerColumnTitle}>Социальные сети</span>
              <div>
                <div>1</div>
                <div>2</div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.navigationFooter}>
              <span className={styles.footerColumnTitle}>Навигация:</span>
              <ul className={styles.footerList}>
                <li>Продукты</li>
                <li>Бизнесу</li>
                <li>События</li>
                <li>Тарифы</li>
                <li>Партнерская программа</li>
                <li>Контакты</li>
                <li>Карта сайта</li>
              </ul>
            </div>
            <div>
              <span className={styles.footerColumnTitle}>
                Кассовое оборудование:
              </span>
              <ul className={styles.footerList}>
                <li>POS-периферия</li>
                <li>Электронные весы</li>
                <li>Принтеры этикеток (штрихкодов)</li>
                <li>Расходные материалы</li>
                <li>Сканеры штрихкода</li>
                <li>Терминалы сбора данных (ТСД)</li>
                <li>Онлайн-кассы (под 54-ФЗ и ЕГАИС)</li>
              </ul>
            </div>
          </div>
          <div>
            <span className={styles.footerColumnTitle}>Продукты 1С:</span>
            <ul className={styles.footerList}>
              <li>Бухгалтерский и налоговый учёт</li>
              <li>Зарплата и управление персоналом</li>
              <li>Торговый и складской учёт</li>
              <li>Комплексная автоматизация</li>
              <li>Производственные предприятия и ERP-системы</li>
              <li>Управленческий учет (МСФО)</li>
              <li>Документооборот</li>
              <li>Платформа «1С:Предприятие 8»</li>
              <li>Лицензии 1С:Предприятие 8</li>
              <li>1С-Отчетность</li>
              <li>1C:Enterprise (международные поставки)</li>
              <li>Комплекты для обучения в ВУЗах</li>
              <li>Расширения для КПК</li>
              <li>Электронные поставки «1С»</li>
              <li>1С:Шина</li>
              <li>
                1С:КП Отраслевой (1С:ИТС Отраслевой, поддержка решений
                1С-Совместно)
              </li>
              <li>Программы 1С для небольшого производства</li>
              <li>1С-Коннект</li>
              <li>Снятые с продажи решения</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
