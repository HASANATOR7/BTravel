<template>
  <header class="header_money"></header>
  <section class="money">
    <div class="container">
      <div class="money_content">
        <h2 class="money_text">Вы можете получить лучший отдых в рассрочку</h2>
        <p class="money_span">Наша рассрочка без переплат!</p>
        <img class="money_bg_img" src="../assets/money/money_img.svg" alt="" />
      </div>
    </div>
  </section>

  <section class="bank">
    <div class="container">
      <div class="bank_content">
        <div class="block">
          <div class="block_top">до 30 дней и 0%</div>
          <ul class="block_title">
            <li class="block_spes">Не нужно ничего платить сразу</li>
            <li class="block_spes2">Нет переплаты</li>
            <li class="block_spes3">
              Выплатить без % можно до 30 дней после покупки
            </li>
            <li class="block_spes4">Для путешествий до 250 000 ₽</li>
            <li class="block_spes5">
              Если рассрочка не выплачена за срок до 30 дней, она превращается в
              кредит с процентной ставкой от 1,9% в месяц на срок до 12 месяцев
            </li>
          </ul>
        </div>
        <div class="block">
          <div class="block_top">120 дней и 5,26%</div>
          <ul class="block_title">
            <li class="block_spes">Не нужно ничего платить сразу</li>
            <li class="block_spes2">Переплата: 5,26% цены путешествия</li>
            <li class="block_spes3">
              Выплатить без % можно в течение 120 дней после покупки
            </li>
            <li class="block_spes4">Для путешествий от 80 000 до 250 000 ₽</li>
            <li class="block_spes5">
              Если рассрочка не выплачена за 120 дней, она превращается в кредит
              с процентной ставкой от 1,9% в месяц на срок до 12 месяцев
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="bank2">
    <div class="container">
      <div class="bank2_content">
        <img class="bank2_svg" src="../assets/money/bank2_img.svg" alt="" />
        <p class="bank2_text">
          Рассрочку предоставляет наш партнер Kyrgyzstan Bank - онлайн-сервис,
          помогающий своим клиентам покупать товары и услуги в рассрочку: без
          поручителей, первоначального взноса и необходимости лично приходить в
          офис.
        </p>
      </div>
    </div>
  </section>
  <section class="step">
    <div class="container">
      <div class="step_content">
        <h4 class="step_text">
          Купить тур или отель в рассрочку можно всего в три шага
        </h4>
        <img class="step_img" src="../assets/money/step_svg.svg" alt="" />

        <div class="step_box">
          <div class="step_title">
            <h2 class="step_title_text">Выберите тип оплаты «в рассрочку»</h2>
            <p class="step_title_ref">
              Введите на странице бронирования всю нужную информацию и
              паспортные данные. Потом переключите способ оплаты на «рассрочку»
              и нажмите «забронировать».
            </p>
          </div>
          <div class="step_title2">
            <h2 class="step_title_text2">
              Заполните анкету и подтвердите личность с помощью телефона
            </h2>
            <p class="step_title_ref">
              Заполните анкету, открывшуюся в новом окне. Затем снимите себя на
              телефон и прикрепите видео к анкете.
            </p>
          </div>
          <div class="step_title3">
            <h2 class="step_title_text3">
              Введите код из SMS в окне оформления рассрочки
            </h2>
            <p class="step_title_ref">
              Анкета проходит проверку около 15 минут. Затем вам придет SMS c
              кодом подтверждения. Введите его в окне оформления рассрочки. Всё,
              путешествие забронировано!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer_content">
        <div class="footer_left">
          <img src="../assets/Homepage/footer/footer_logo.svg" alt="" />
          <p class="footer_text">
            Удобство является нашим приоритетом, чтобы удовлетворить наших
            клиентов, и мы предоставляем все функции, которые вы можете легко и
            быстро использовать.
          </p>
        </div>
        <div class="footer_right">
          <ul class="footer_list1">
            <li class="footer_span">Как забронировать?</li>
            <li class="footer_span">Свяжитесь с нами</li>
            <li class="footer_span">Центр помощи</li>
          </ul>
          <ul class="footer_list">
            <h3 class="footer_list_hug">Услуги</h3>
            <li class="footer_span">Направления</li>
            <li class="footer_span">Полет</li>
            <li class="footer_span">Проживание</li>
          </ul>
          <ul class="footer_list">
            <h3 class="footer_list_hug">Соц. сети</h3>
            <li class="footer_span">Facebook</li>
            <li class="footer_span">Twitter</li>
            <li class="footer_span">
              <a
                class="footer_httm"
                href="https://www.instagram.com/b_travelkg/"
                >Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>
      <span class="footer_name">Privacy Policy</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header_money {
  background: #1c9fe3;
  width: 100%;
  height: 120px;
  position: absolute;
}

.money {
  // width: 1440px;
  height: 740px;
  background: #f6f6f6;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0) 42%, #50cdcd 95%);
  filter: drop-shadow(0px 11px 29px rgba(8, 15, 22, 0.25));
  border-radius: 0px 0px 16px 16px;

  &_text {
    width: 578px;
    height: 190px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    letter-spacing: -1.12px;
    color: #1c9fe3;
    padding-top: 190px;
  }

  &_span {
    width: 476px;
    height: 28px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;

    color: #1c9fe3;
  }
  &_bg_img {
    position: absolute;
    margin-left: 480px;
    margin-top: -270px;
  }
}

.block_title {
  margin-top: 33px;
  margin-left: 31px;
  margin-right: 31px;
}

.bank_content {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}

.block {
  width: 560px;
  height: 543px;
  border: 1px solid #009fd8;
  border-radius: 0px 0px 16px 16px;
  margin-left: 10px;
}

.block_top {
  width: 560px;
  height: 140px;
  background: #009fd8;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block_spes {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #1e1e1e;
  border-bottom: 1px solid #c3c3c3;
  padding-bottom: 17px;
}

.block_spes2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #1e1e1e;
  border-bottom: 1px solid #c3c3c3;
  padding-bottom: 21px;
  margin-top: 22px;
}
.block_spes3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #1e1e1e;
  border-bottom: 1px solid #c3c3c3;
  margin-top: 17px;
  padding-bottom: 23px;
}
.block_spes4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #1e1e1e;
  border-bottom: 1px solid #c3c3c3;
  margin-top: 16px;
  padding-bottom: 25px;
}
.block_spes5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #1e1e1e;
  border-bottom: 1px solid #c3c3c3;
  margin-top: 14px;
  padding-bottom: 10px;
  width: 350px;
  height: 59px;
}

.bank2_content {
  margin-top: 70px;
}

.bank2_svg {
  margin-left: 549px;
}

.bank2_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  width: 884px;
  height: 84px;
  color: #1e1e1e;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 148px;
}

.step {
  &_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    color: #1e1e1e;
    width: 750px;
    height: 104px;
    display: flex;
    text-align: center;
    margin-left: 215px;
    margin-top: 120px;
  }

  &_img {
    margin-left: 182px;
    margin-top: 45px;
  }

  &_title {
    width: 361px;
    height: 137px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &_title_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #1e1e1e;
    width: 221px;
    height: 44px;
  }

  &_title_text2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #1e1e1e;
    width: 361px;
    height: 44px;
  }

  &_title_text3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #1e1e1e;
    width: 361px;
    height: 44px;
  }

  &_title_ref {
    width: 361px;
    height: 85px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #1e1e1e;
  }

  &_box {
    display: flex;
    justify-content: space-between;
    margin-top: 55px;
    margin-bottom:188px ;
  }
}
</style>