<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__naz">С нами путешествия легче</h1>
        <p class="hero__taxt">
          Нам доверяют 2 миллиона путешественников. B-Travel является наиболее
          полным поставщиком услуг в сфере путешествий, перелетов и проживания в
          Кыргызстане.
        </p>
        <div class="hero__serch">
          <div class="btn">
            <img
              class="btn_icon"
              src="../assets/Homepage/Vector(2).svg"
              alt=""
            />
            <input
              class="btn_input"
              type="text"
              placeholder="   Город или отель"
            />
            <input class="btn_input_date" type="date" />
            <input class="btn_input_date" type="date" />
            <div id="v-model-select" class="demo">
              <select class="btn_left" v-model="selected">
                <option disabled value="">Количество чел.</option>
                <option>1 взрослых</option>
                <option>2 взрослых</option>
                <option>3 взрослых</option>
                <option>2 прозлых 1 ребенок</option>
              </select>
            </div>
            <router-link to="/ticket">
              <button class="btn_btn2">
                <img src="../assets/Homepage/hero/serch.svg" alt="" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="nav">
    <div class="container">
      <div class="nav__content">
        <h2 class="nav__text">Гиды для вашего следующего отпуска</h2>
        <p class="nav__police">
          Ознакомьтесь с подборкой популярных продуктов на этой неделе, которые
          могут привлечь ваше внимание
        </p>
        <div class="nav__list">
          <button class="nav__btn__all">Все</button>
          <button class="nav__btn2">Трендовые</button>
          <button class="nav__btn2">Популярные</button>
          <button class="nav__btn2">Особенные</button>
          <button class="nav__btn2">Рекомендации</button>
          <button class="nav__btn2">Топ поисков</button>
        </div>
      </div>
      <div class="nav_card">
        <ul class="card__table">
          <li class="card_list">
            <img src="../assets/Homepage/section/nav_card1.png" alt="" />
            <div class="card__info">
              <h4 class="card__name">Мост Риальто, Италия</h4>
              <p class="card__price">$ 66.99</p>
            </div>
            <span class="card_text"
              >Мост Риальто — один из четырех мостов, пересекающих Великий
              Венецианский канал в Италии, это...</span
            >
            <button class="card_btn">Читать далее</button>
          </li>
          <li class="card_list">
            <img src="../assets/Homepage/section/nav_card2.png" alt="" />
            <div class="card__info">
              <h4 class="card__name">Каноэ Праху, Бали, Индонезия</h4>
              <p class="card__price">$ 88.22</p>
            </div>
            <span class="card_text">
              Настоятельно рекомендуется попробовать насладиться природным
              туризмом на праху при посещении Бали</span
            >
            <button class="card_btn">Читать далее</button>
          </li>
          <li class="card_list">
            <img src="../assets/Homepage/section/nav_card3.png" alt="" />
            <div class="card__info">
              <h4 class="card__name">Пустыня Сахара, Марокко</h4>
              <p class="card__price">$ 66.90</p>
            </div>
            <span class="card_text">
              Если вы отправляетесь в Марокко, посещение пустыни Сахара должно
              быть в верхней части вашего списка.</span
            >
            <button class="card_btn">Читать далее</button>
          </li>
          <li class="card_list">
            <img src="../assets/Homepage/section/nav_card4.png" alt="" />
            <div class="card__info">
              <h4 class="card__name">Пирамиды Хеопса, Египет</h4>
              <p class="card__price">$ 55.22</p>
            </div>
            <span class="card_text">
              Одно из Чудес Света расположено в Египте. Посещение пирамид должно
              украсить ваше пребывание в Египте.</span
            >
            <button class="card_btn">Читать далее</button>
          </li>
          <li class="card_list">
            <img src="../assets/Homepage/section/nav_card5.png" alt="" />
            <div class="card__info">
              <h4 class="card__name">Каппадокия, Турция</h4>
              <p class="card__price">$ 80.88</p>
            </div>
            <span class="card_text">
              Уникальное место на Земле с чрезвычайно удивительным ландшафтом в
              Турции.</span
            >
            <button class="card_btn">Читать далее</button>
          </li>
          <li class="card_list">
            <img src="../assets/Homepage/section/nav_card6.png" alt="" />
            <div class="card__info">
              <h4 class="card__name">Кыргызстан</h4>
              <p class="card__price">$ 99.99</p>
            </div>
            <span class="card_text">
              Пожалуй лучше места на земле вы не найдете. Тут есть абсолютно
              все! Приезжайте и Наслаждайтесь!</span
            >
            <button class="card_btn">Читать далее</button>
          </li>
        </ul>
        <div class="card__swipe">
          <button class="card_pag">Назад</button>
          <ul class="card_number">
            <li>
              <button class="card__setup">1</button>
            </li>
            <li>
              <button class="card__set">2</button>
            </li>
            <li>
              <button class="card__set">3</button>
            </li>
            <li>
              <button class="card__set">4</button>
            </li>
            <li>
              <button class="card__set">5</button>
            </li>
            <li>
              <button class="card__set">...</button>
            </li>
          </ul>
          <button class="card_pog">Вперед</button>
        </div>
      </div>
    </div>
  </section>
  <section class="info">
    <div class="container">
      <div class="info__content">
        <div class="info__block">
          <div class="block__Left">
            <img src="../assets/Homepage/info/info_block.svg" alt="" />
          </div>
          <div class="block__right">
            <h5 class="block_zag">Безопасно сохраненные списки</h5>
            <p class="block_text">
              Аккуратно расположен для вашего удобства. Перейти к сохраненным на
              верхней панели навигации, где мы сохраняем ваши сохраненные
              элементы. Мы группируем их по категориям. Всего в нескольких
              кликах от начала вашего путешествия! Когда вы хотите совершить
              покупку в Сохраненные.
            </p>
            <button class="block__btn">Читать далее</button>
          </div>
        </div>

        <div class="info__block2">
          <div class="block2__left">
            <h5 class="block_zag">Оповещение о цене на рейс</h5>
            <p class="block_text">
              Мгновенное уведомление Вы получите уведомление, как только цены на
              рейс будут соответствовать вашему бюджету, поэтому вы сможете
              забронировать нужный рейс в нужное время. Вам нужно только
              заполнить информацию о желаемом рейсе, например, время вылета.
            </p>
            <button class="block__btn2">Найдите это здесь</button>
          </div>
          <div class="block2__right">
            <img src="../assets/Homepage/info/info_block2.svg" alt="" />
          </div>
        </div>

        <div class="info__block3">
          <div class="block3__Left">
            <img src="../assets/Homepage/info/info_block3.svg" alt="" />
          </div>
          <div class="block3__right">
            <h5 class="block_zag">Быстрый выбор Мест</h5>
            <p class="block_text">
              Заполните данные о пассажирах сейчас, быстро выберите пассажиров
              позже. Быстрый выбор пассажира избавил вас от необходимости
              вводить одни и те же данные пассажира каждый раз при бронировании.
            </p>
            <button class="block__btn">Проверьте здесь</button>
          </div>
        </div>

        <div class="info__block4">
          <div class="block4__left">
            <h5 class="block_zag">Легкий перенос</h5>
            <p class="block_text">
              Нет больше погони за авиакомпанией. Изменить рейс можно всего в
              несколько кликов. Easy Reshedule в конечном счете экономит ваше
              время! Откройте свой электронный билет В разделе «Мое
              бронирование» откройте электронный билет на рейс, который вы
              хотите перенести.
            </p>
            <button class="block__btn2">Читать далее</button>
          </div>
          <div class="block2__right">
            <img src="../assets/Homepage/info/info_block4.svg" alt="" />
          </div>
        </div>

        <div class="info__block5">
          <div class="block3__Left">
            <img src="../assets/Homepage/info/info_block5.svg" alt="" />
          </div>
          <div class="block3__right">
            <h5 class="block_zag">Гарантия пребывания</h5>
            <p class="block_text">
              Как подать заявку на получение гарантии пребывания. Следуйте 4
              шагам, описанным ниже. Откройте приложение B-Travel. На главной
              странице коснитесь меню «Мое бронирование» в нижней части
              страницы, выберите «Просмотреть...
            </p>
            <button class="block__btn">Читать далее</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="review">
    <div class="container">
      <div class="review__content">
        <h4 class="review_text">Ваши Отзывы</h4>
        <ul class="review_block">
          <li class="review_list">
            <div class="review_list_type">
              <div class="review_type_left">
                <img src="../assets/Homepage/rev/avatar.svg" alt="" />
                <h3 class="review_name">Antonio</h3>
              </div>
              <div class="review_type_right">
                <img
                  class="review_star"
                  src="../assets/Homepage/rev/review-star.svg"
                  alt=""
                />
                <span class="review_number">4,8</span>
              </div>
            </div>
            <p class="review_list_span">
              Сервис и обслуживание просто Топ! Все на высшем уровне. Отлично
              отдохнул за долгое время, а B-Travel отдельное спасибо!
            </p>
          </li>
          <li class="review_list">
            <div class="review_list_type">
              <div class="review_type_left">
                <img
                  class="review_avatar"
                  src="../assets/Homepage/rev/avatar2.svg"
                  alt=""
                />
                <h3 class="review_name">Maria</h3>
              </div>
              <div class="review_type_right">
                <img
                  class="review_star"
                  src="../assets/Homepage/rev/review-star.svg"
                  alt=""
                />
                <span class="review_number">4,0</span>
              </div>
            </div>
            <p class="review_list_span">
              Сервис и обслуживание просто Топ! Все на высшем уровне. Отлично
              отдохнул за долгое время, а B-Travel отдельное спасибо!
            </p>
          </li>
          <li class="review_list">
            <div class="review_list_type">
              <div class="review_type_left">
                <img
                  class="review_avatar"
                  src="../assets/Homepage/rev/avatar3.svg"
                  alt=""
                />
                <h3 class="review_name">Antonio</h3>
              </div>
              <div class="review_type_right">
                <img
                  class="review_star"
                  src="../assets/Homepage/rev/review-star.svg"
                  alt=""
                />
                <span class="review_number">4,3</span>
              </div>
            </div>
            <p class="review_list_span">
              Сервис и обслуживание просто Топ! Все на высшем уровне. Отлично
              отдохнул за долгое время, а B-Travel отдельное спасибо!
            </p>
          </li>
          <li class="review_list">
            <div class="review_list_type">
              <div class="review_type_left">
                <img
                  class="review_avatar"
                  src="../assets/Homepage/rev/avatar3.svg"
                  alt=""
                />
                <h3 class="review_name">Antonio</h3>
              </div>
              <div class="review_type_right">
                <img
                  class="review_star"
                  src="../assets/Homepage/rev/review-star.svg"
                  alt=""
                />
                <span class="review_number">4,3</span>
              </div>
            </div>
            <p class="review_list_span">
              Сервис и обслуживание просто Топ! Все на высшем уровне. Отлично
              отдохнул за долгое время, а B-Travel отдельное спасибо!
            </p>
          </li>
          <li class="review_list">
            <div class="review_list_type">
              <div class="review_type_left">
                <img
                  class="review_avatar"
                  src="../assets/Homepage/rev/avatar2.svg"
                  alt=""
                />
                <h3 class="review_name">Antonio</h3>
              </div>
              <div class="review_type_right">
                <img
                  class="review_star"
                  src="../assets/Homepage/rev/review-star.svg"
                  alt=""
                />
                <span class="review_number">4,3</span>
              </div>
            </div>
            <p class="review_list_span">
              Сервис и обслуживание просто Топ! Все на высшем уровне. Отлично
              отдохнул за долгое время, а B-Travel отдельное спасибо!
            </p>
          </li>
          <li class="review_list">
            <div class="review_list_type">
              <div class="review_type_left">
                <img
                  class="review_avatar"
                  src="../assets/Homepage/rev/avatar.svg"
                  alt=""
                />
                <h3 class="review_name">Antonio</h3>
              </div>
              <div class="review_type_right">
                <img
                  class="review_star"
                  src="../assets/Homepage/rev/review-star.svg"
                  alt=""
                />
                <span class="review_number">4,3</span>
              </div>
            </div>
            <p class="review_list_span">
              Сервис и обслуживание просто Топ! Все на высшем уровне. Отлично
              отдохнул за долгое время, а B-Travel отдельное спасибо!
            </p>
          </li>
        </ul>
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
.hero {
  width: 1440px;
  height: 860px;
  background: url(../assets/Homepage/hero/img_bg.svg);
  background-size: cover;
  background-position: center;

  &__content {
    position: absolute;
  }
  &__naz {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    color: #f6f6f6;
    margin-top: 172px;
    margin-left: 62px;
  }
  &__taxt {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #f6f6f6;
    width: 800px;
    height: 44px;
    margin-left: 190px;
    margin-top: 50px;
  }
}
.hero__serch {
  width: 1090px;
  height: 110px;
  background: rgba(246, 246, 246, 0.5);
  border-radius: 50px;
  margin-top: 95px;
  margin-left: 45px;
}
.btn {
  background: #f6f6f6;
  border-radius: 50px;
  width: 1062px;
  height: 76px;
  position: absolute;
  margin-top: 17px;
  margin-left: 14px;
  display: flex;
}
.btn_input {
  width: 349px;
  height: 72px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #808080;
  border: none;
  margin-left: 54px;
  background: #f6f6f6;
  border-right: 1px solid #808080;
  cursor: pointer;
}

.btn_icon {
  margin-top: 26.33px;
  position: absolute;
  margin-left: 30.67px;
}
.btn_input_date {
  width: 180px;
  height: 72px;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #808080;
  border-right: 1px solid #808080;
  background: #f6f6f6;
}
.btn_left {
  width: 180px;
  height: 76px;
  display: flex;
  background: #f6f6f6;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
}
.btn_btn2 {
  background: #1c9fe3;
  border-radius: 100px;
  width: 76px;
  height: 76px;
  border: none;
  margin-left: 37px;
}
.left_icon {
  width: 16.33px;
  height: 7px;
  margin-left: 61px;
  padding-top: 34px;
  cursor: pointer;
}
.left_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
  margin-left: 20px;
  padding-top: 8px;
}

.nav {
  background: #f6f6f6;

  &__text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    padding-top: 64px;
    color: #1e1e1e;
    text-align: center;
    margin-top: -15px;
  }

  &__police {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #808080;
    width: 780px;
    height: 44px;
    text-align: center;
    margin-left: 200px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    margin-top: 41px;
  }

  &__btn2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border: 1px solid #808080;
    border-radius: 50px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    width: 165px;
    height: 62px;
  }
}

.nav__btn2:active {
  background: #1c9fe3;
  font-family: "Montserrat";
  font-style: normal;
  border: none;
  font-weight: 500;
  font-size: 18px;
  color: #f6f6f6;
  border-radius: 50px;
  width: 165px;
  height: 62px;
}
.nav__btn__all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border: 1px solid #808080;
  width: 90px;
  height: 62px;
  background: #1c9fe3;
  font-family: "Montserrat";
  font-style: normal;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 18px;
  color: #f6f6f6;
}
.card__table {
  margin-top: 67px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card__info {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
}
.card__name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}
.card__price {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
}
.card_list {
  width: 353px;
  height: 420px;
  margin-bottom: 80px;
}
.card_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #808080;
}
.card_btn {
  width: 132px;
  height: 40px;
  background: #1c9fe3;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  color: #f6f6f6;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: none;
  margin-top: 20px;
}
.card_pag {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 167px;
  height: 62px;
  left: 0px;
  top: 0px;
  border: 1px solid #808080;
  border-radius: 50px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #808080;
}
.card_pog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 167px;
  height: 62px;
  left: 1013px;
  top: 0px;
  background: #1c9fe3;
  border-radius: 100px;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #f6f6f6;
}
.card__setup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 60px;
  height: 62px;
  border: 1px solid #808080;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #f6f6f6;
  background: #1c9fe3;
}
.card__set {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 60px;
  height: 62px;
  border: 1px solid #808080;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
}
.card__swipe {
  display: flex;
  justify-content: space-between;
}
.card_number {
  display: flex;
  width: 510px;
  justify-content: space-between;
}
.info {
  background: #f6f6f6;
}
.info__block {
  display: flex;
  padding-top: 50px;
}
.block__right {
  width: 528px;
  height: 306px;
  padding-top: 74px;
  margin-left: 151px;
}
.block_zag {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #1e1e1e;
}
.block_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #808080;
}
.block__btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 168px;
  height: 46px;
  background: #1c9fe3;
  border-radius: 30px;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #f6f6f6;
}
.info__block2 {
  display: flex;
  justify-content: space-between;
}
.block2__left {
  width: 528px;
  height: 306px;
  padding-top: 83px;
}
.block2__righ {
  margin-left: 20px;
}
.block__btn2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 186px;
  height: 46px;
  background: #1c9fe3;
  border-radius: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #f6f6f6;
  border: none;
}
.info__block3 {
  display: flex;
  justify-content: space-between;
  padding-top: 132px;
}
.block3__right {
  width: 528px;
  height: 110px;
  padding-top: 121px;
}
.info__block4 {
  display: flex;
  justify-content: space-between;
}
.block4__left {
  width: 528px;
  height: 262px;
  padding-top: 139px;
}
.info__block5 {
  display: flex;
  justify-content: space-between;
  padding-top: 21px;
}

.review {
  background: #f6f6f6;
  padding-top: 130px;

  &_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #1e1e1e;
    text-align: center;
  }

  &_name {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #1e1e1e;
    margin-left: 10px;
  }

  &_list {
    width: 341px;
    height: 172px;
    margin-bottom: 70px;
  }
  &_list_type {
    display: flex;
    border-bottom: 1px solid #a3a3a3;
    justify-content: space-between;
    margin-bottom: 18px;
    align-items: center;
  }
  &_block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 70px;
  }
  &_list_span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #808080;
  }

  &_type_left {
    display: flex;
    align-items: center;
  }
  &_type_right {
    display: flex;
    align-items: center;
  }
  &_star {
    width: 29px;
    height: 29px;
  }
  &_number {
    width: 26px;
    height: 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #808080;
  }
  &_avatar {
    width: 56px;
    height: 56px;
  }
}

.footer {
  width: 1440px;
  height: 454px;
  background: #1c9fe3;

  &_content {
    display: flex;
    justify-content: space-between;
    padding-top: 99px;
    border-bottom: 1px solid #f6f6f6;
    margin-bottom: 36px;
  }

  &_text {
    width: 280px;
    height: 102px;
    left: 130px;
    top: 177px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #f6f6f6;
    margin-bottom: 25px;
  }

  &_right {
    display: flex;
    padding-top: 10px;
  }
  &_list {
    margin-left: 64px;
  }
  &_span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    padding-top: 15px;
  }
  &_list1 {
    padding-top: 50px;
  }
  &_list_hug {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 30px;
  }

  &_name {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
  &_httm{
    color:#ffffff;
  }
}
</style>