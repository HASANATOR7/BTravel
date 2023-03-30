<template>
  <header class="header_ticket"></header>
  <div class="ticket">
    <div class="container">
      <div class="ticket_content">
        <div class="ticket_left">
          <div class="ticket_search">
            <h1 class="ticket_search_text">Поиск</h1>
            <span class="ticket_input_text">Город/ Отель</span>
            <input
              class="ticket_search_input"
              type="text"
              placeholder="Город/Отель"
            />
            <span class="ticket_input_text">Дата заезда</span>
            <input class="ticket_search_input" type="date" />
            <span class="ticket_input_text">Дата выезда</span>
            <input class="ticket_search_input" type="date" />
            <div id="v-model-select" class="demo">
              <select class="ticket_search_input4" v-model="selected">
                <option disabled value="">1 взрослый</option>
                <option>2 взрослых</option>
                <option>3 взрослых</option>
                <option>2 прозлых 1 ребенок</option>
              </select>
            </div>
            <button class="ticket_search_btn">Искать</button>
          </div>

          <div class="ticket_budget">
            <h1 class="ticket_budget_text">Ваш бюджет (за ночь)</h1>
            <label class="checkbox-ios">
              <input type="checkbox" />
              <span class="checkbox-ios-switch"></span>
              <p class="checkbox_text">Установить свой бюджет</p>
            </label>
            <div class="check_box">
              <input
                type="checkbox"
                class="custom-checkbox"
                id="first"
                name="first"
              />
              <label class="checkbox_ptice" for="first">US $0 - US $50</label>
              <p class="checkbox_place">33</p>
              <input
                type="checkbox"
                class="custom-checkbox"
                id="second"
                name="second"
              />
              <label class="checkbox_ptice" for="second"
                >US $50 - US $100</label
              >
              <p class="checkbox_place2">231</p>
              <input
                type="checkbox"
                class="custom-checkbox"
                id="third"
                name="third"
              />
              <label class="checkbox_ptice" for="third"
                >US $100 - US $150</label
              >
              <p class="checkbox_place3">345</p>
              <input
                type="checkbox"
                class="custom-checkbox"
                id="fourth"
                name="fourth"
              />
              <label class="checkbox_ptice" for="fourth"
                >US $150 - US $200</label
              >
              <p class="checkbox_place4">301</p>
              <input
                type="checkbox"
                class="custom-checkbox"
                id="fifth"
                name="fifth"
              />
              <label class="checkbox_ptice" for="fifth">US $200 +</label>
              <p class="checkbox_place5">301</p>
            </div>
          </div>
        </div>
        <div class="ticket_right">
          <div class="ticket_right_box">
            <div class="box_left">
              <img
                class="box_img"
                src="../assets/ticket/ticket_img.png"
                alt=""
              />
            </div>
            <img
              class="box_line"
              src="../assets/ticket/ticket_line.svg"
              alt=""
            />
            <div class="descript">
              <div class="right_top">
                <h3 class="top_text">Хостел Нью-Йорк</h3>
                <p class="top_title">Отзывы</p>
              </div>
              <p class="descript_span">
                Ciutat Vella, Барселона - 1.1 км от центра
              </p>
              <p class="descript_span2">Доступ к метро - 1 км от пляжа</p>
              <div class="descript_place">
                <h2 class="place_text">Одноместный номер</h2>
                <p class="place_title">1 одноместный номер</p>
                <p class="place_breakfast">Завтрак включен</p>
                <p class="place_free">
                  БЕСПЛАТНАЯ отмена бронирование / Предоплата не требуется
                </p>
                <div class="look">
                  <div class="look_btn">
                    <p class="look_btn_text">осталось 2 места</p>
                    <button class="look_click">Посмотреть</button>
                  </div>
                  <div class="look_price">
                    <p class="look_price_night">17 ночей</p>
                    <p class="look_price_man">1 взрослый</p>
                    <p class="look_price_dollar">$2 879</p>
                    <p class="look_price_list">
                      может взиматься дополнительная плата
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ticket_right_box">
            <div class="box_left">
              <img
                class="box_img"
                src="../assets/ticket/ticket_img2.png"
                alt=""
              />
            </div>
            <img
              class="box_line"
              src="../assets/ticket/ticket_line.svg"
              alt=""
            />
            <div class="descript">
              <div class="right_top">
                <h3 class="top_text">Родамон Хостел</h3>
                <p class="top_title">Отзывы</p>
              </div>
              <p class="descript_span">
                Ciutat Vella, Барселона - 1.1 км от центра
              </p>
              <p class="descript_span2">Доступ к метро - 1 км от пляжа</p>
              <div class="descript_place">
                <h2 class="place_text">Одноместный номер</h2>
                <p class="place_title">1 одноместный номер</p>
                <p class="place_breakfast">Завтрак включен</p>
                <p class="place_free">
                  БЕСПЛАТНАЯ отмена бронирование / Предоплата не требуется
                </p>
                <div class="look">
                  <div class="look_btn">
                    <p class="look_btn_text">осталось 2 места</p>
                    <button class="look_click">Посмотреть</button>
                  </div>
                  <div class="look_price">
                    <p class="look_price_night">17 ночей</p>
                    <p class="look_price_man">1 взрослый</p>
                    <p class="look_price_dollar">$969</p>
                    <p class="look_price_list">
                      может взиматься дополнительная плата
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
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
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
ul,
body {
  margin: 0;
}
.header_ticket {
  background: #1c9fe3;
  width: 1440px;
  height: 120px;
}

.ticket {
  &_content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 200px;
  }
  &_search {
    width: 425px;
    height: 591px;
    background: #ffffff;
    border-radius: 8px;
    margin-top: 70px;
  }
  &_search_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #1e1e1e;
    margin-left: 36px;
    padding-top: 17px;
    margin-bottom: 15px;
  }

  &_input_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #1e1e1e;
    margin-left: 36px;
  }

  &_search_input {
    width: 358px;
    height: 60px;
    left: 36px;
    top: 404px;
    border: none;
    background: #ebe8e8;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #1e1e1e;
    margin-bottom: 15px;
    margin-left: 36px;
    margin-top: 8px;
  }

  &_search_input4 {
    width: 358px;
    height: 60px;
    left: 36px;
    top: 404px;
    border: none;
    background: #ebe8e8;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #1e1e1e;
    margin-top: 25px;
    margin-bottom: 30px;
    margin-left: 36px;
  }

  &_search_btn {
    width: 358px;
    height: 60px;
    left: calc(50% - 358px / 2 + 2.5px);
    top: 494px;
    border: none;
    background: #1c9fe3;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #f6f6f6;
    margin-left: 36px;
  }

  &_budget {
    width: 425px;
    height: 438px;
    left: 130px;
    top: 821px;
    background: #ffffff;
    border-radius: 8px;
    margin-top: 30px;
  }

  &_budget_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #1e1e1e;
    padding-top: 38px;
    margin-left: 38px;
  }
}

.checkbox-ios {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
  display: flex;
}
.checkbox-ios .checkbox-ios-switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 56px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25%/50%;
  vertical-align: top;
  background: #888888;
  transition: 0.2s;
  margin-left: 38px;
  margin-top: 25px;
}
.checkbox-ios .checkbox-ios-switch:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  transition: 0.15s;
}
.checkbox-ios input[type="checkbox"] {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox-ios
  input[type="checkbox"]:not(:disabled):active
  + .checkbox-ios-switch:before {
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
}
.checkbox-ios input[type="checkbox"]:checked + .checkbox-ios-switch {
  background: limegreen;
}
.checkbox-ios input[type="checkbox"]:checked + .checkbox-ios-switch:before {
  transform: translateX(28px);
}
.checkbox_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #1e1e1e;
  margin-left: 20px;
  padding-top: 8px;
}

.check_box {
  margin-top: 45px;
  margin-left: 38px;
  display: flex;
  flex-wrap: wrap;
  width: 349px;
  height: 230px;
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox:checked + label::before {
  border-color: #1c9fe3;
  background-color: #1c9fe3;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.checkbox_ptice {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #1e1e1e;
}
.checkbox_place {
  margin-left: 141px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #808080;
}
.checkbox_place2 {
  margin-left: 117px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #808080;
}
.checkbox_place3 {
  margin-left: 104px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #808080;
}
.checkbox_place4 {
  margin-left: 105px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #808080;
}
.checkbox_place5 {
  margin-left: 175px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #808080;
}

.ticket_right {
  margin-top: 70px;
}

.ticket_right_box {
  width: 714px;
  height: 393px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  margin-bottom: 20px;
}

.box_img {
  margin-top: 15px;
  margin-left: 13px;
}
.box_line {
  height: 250px;
  margin-left: 20px;
  margin-top: 117px;
}

.right_top {
  width: 354px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.descript {
  width: 365.18px;
  height: 363px;
  margin-left: 11px;
}

.top_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #1e1e1e;
}

.top_title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #1e1e1e;
}

.descript_span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #1e1e1e;
  margin-top: 10px;
  margin-bottom: 10px;
}
.descript_span2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #1e1e1e;
  margin-top: 0px;
  margin-bottom: 0px;
}

.descript_place {
  width: 347px;
  height: 119px;
  margin-top: 15px;
}

.place_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
}

.place_title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #1e1e1e;
  margin-top: 5px;
}

.place_breakfast {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #1e1e1e;
  margin-top: 15px;
  margin-bottom: 0px;
}

.place_free {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #08590b;
  margin-top: 5px;
}

.look {
  display: flex;
  justify-content: space-between;

  &_btn_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #8b8888;
    margin-top: 32px;
    margin-bottom: 8px;
  }
  &_click {
    width: 150px;
    height: 45px;
    background: #1c9fe3;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    border: none;
  }

  &_price {
    width: 119px;
    height: 134px;
  }

  &_price_night {
    width: 85px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    color: #1e1e1e;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 18px;
  }

  &_price_man {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    color: #1e1e1e;
    margin-top: 0px;
    margin-left: 18px;
    margin-bottom: 0px;
  }
  &_price_dollar {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #1e1e1e;
    margin-left: 19px;
    margin-top: 5px;
    margin-bottom: 0px;
  }

  &_price_list {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    color: #1e1e1e;
    margin-top: 15px;
  }
}
</style>