import { useState } from "react";
import styles from "./Accordion.module.css";

interface IAccodionItem {
  buttonAccord: React.ReactNode;
  children: React.ReactNode;
}

const AccordionItem = ({ buttonAccord, children }: IAccodionItem) => {
  const [active, setActive] = useState(false);

  const openTab = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div>
      <div onClick={() => openTab()}>{buttonAccord}</div>
      {active && children}
    </div>
  );
};

export default AccordionItem;
