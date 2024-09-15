import React from "react";
import "./DescriptionBlock.styles.scss";
import { scrollToBlock } from "@utils/scrolling";

const DescriptionBlock = () => {
  return (
    <div className="description-block" id="about-us">
      <div>
        <div className='description-header'>
          <h2 className="title" data-aos="fade-right">
            Подход к разработке <br/> веб-приложений
          </h2>
          <div
            className="vertical-button"
            onClick={() => scrollToBlock("methodology-block")}>
            <div className="word">SCRUM</div>
            <div className="line"></div>
            <div className="word">WATERFALL</div>
          </div>
        </div>
        <p className="text" data-aos="fade-up">
          Мы — команда кастомной разработки, действующая как цех с минимальной
          административной нагрузкой на технологические процессы.
          Это позволяет нам предлагать нашим клиентам конкурентные цены
          на разработку мобильных приложений.
        </p>
      </div>


      {/*<div className="with-button">*/}
      {/*  <div*/}
      {/*    className="vertical-button"*/}
      {/*    onClick={() => scrollToBlock("methodology-block")}>*/}
      {/*    <div className="word">SCRUM</div>*/}
      {/*    <div className="line"></div>*/}
      {/*    <div className="word">WATERFALL</div>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <h2 className="title" data-aos="fade-right">*/}
      {/*      Подход к разработке веб-приложений*/}
      {/*    </h2>*/}
      {/*    <p className="text" data-aos="fade-up">*/}
      {/*      Мы — команда кастомной разработки, действующая как цех с минимальной*/}
      {/*      административной нагрузкой на технологические процессы.*/}
      {/*      Это позволяет нам предлагать нашим клиентам конкурентные цены*/}
      {/*      на разработку мобильных приложений.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="horizontal-line" data-aos="fade-right"></div>
      <h2 className="title" data-aos="fade-right">
        Наши возможности в сфере услуг веб-разработки
      </h2>
      <p className="text" data-aos="fade-up">
        Расширяя команды наших клиентов, мы обеспечиваем полный жизненный цикл
        разработки, включая UI/UX дизайн для собственных мобильных и
        веб-приложений, который помогает инновационным компаниям и признанным
        брендам достигать своих бизнес-целей.
      </p>
    </div>
  );
};

export default DescriptionBlock;
