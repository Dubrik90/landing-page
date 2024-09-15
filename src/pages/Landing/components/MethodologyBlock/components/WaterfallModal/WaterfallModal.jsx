import React from "react";
import Modal from "../Modal";
import "./WaterfallModal.styles.scss";

const WaterfallModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      title="WATERFALL"
      text="Традиционный способ ведения проектов. Он подойдет вам, если есть конкретный бюджет и сроки на реали&shy;зацию проекта. Мы с вами сразу планируем этапы, рас&shy;пределяем работы, фиксируем сроки и результаты."
      content={
        <div className="parent">
          <div className="div1"></div>
          <div className="div2">Старт</div>
          <div className="div3">Анализ</div>
          <div className="div4">Дизайн</div>
          <div className="div5">Разработка</div>
          <div className="div6">Тестирование</div>
          <div className="div7">Запуск</div>
          <div className="div8"></div>
          <div className="div9"></div>
          <div className="div10">Входящие требования</div>
          <div className="div11">Разработка ТЗ</div>
          <div className="div12">Прототипирование и визуальный дизайн</div>
          <div className="div13">Верстка и бэкенд</div>
          <div className="div14">Верстка и бэкенд</div>
          <div className="div15"></div>
        </div>
      }
      showModal={showModal}
      closeModal={closeModal}
    />
  );
};

export default WaterfallModal;
