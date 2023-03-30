<template>
  <div class="body2">
    <header class="header">
      <div class="container">
        <div class="header__content">
          <div class="header__logo">
            <router-link to="/">
              <img src="./assets/Homepage/header/header__logo.svg" alt="" />
            </router-link>
          </div>
          <ul class="header__list">
            <router-link to="/partner">
              <li class="header__text">Партнерство</li>
            </router-link>
            <router-link to="/money">
              <li class="header__text">Рассрочка</li>
            </router-link>
            <router-link to="/tour">
              <li class="header__text">Туры</li>
            </router-link>
            <router-link to="/transfer">
              <li class="header__text2">Как перенести?</li>
            </router-link>
          </ul>
          <div class="header__btn">
            <ul class="btn__list2">
              <li>
                <img
                  class="btn__icon"
                  src="./assets/Homepage/header/btn-icon_flag.svg"
                  alt=""
                />
              </li>
              <li class="btn__textru">РУ</li>
              <li>
                <img
                  class="btn__icon2"
                  src="./assets/Homepage/header/btn_icon2.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template> 

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.footer_httm {
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

button {
  cursor: pointer;
}
.body2 {
  background: #f6f6f6;
  width: 1440px;
}
.container {
  width: 1180px;
  margin-left: 130px;
  
}

li {
  list-style: none;
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: #aaaaaa;
}
.header {
  position: absolute;
  width: 1440px;
  z-index: 2;

  &__list {
    display: flex;
    margin-left: 195px;
  }
  &__content {
    display: flex;
    align-items: center;
    margin-top: 23px;
  }

  &__text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #f6f6f6;
    margin-right: 35px;
    cursor: pointer;
    position: relative;
    width: 120px;
    text-align: center;
  }

  &__text::after {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    top: 130%;
    left: 17%;
    background: #f6f6f6;
    transition: 0.3s;
    opacity: 0;
  }
  &__text:hover::after{
    opacity: 1;
  }

  &__text2{
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #f6f6f6;
    margin-right: 35px;
    cursor: pointer;
    position: relative;
  }
  &__text2::after{
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    top: 130%;
    left: 20%;
    background: #f6f6f6;
    transition: 0.3s;
    opacity: 0;
  }
  &__text2:hover::after{
    opacity: 1;
  }
  
  &__btn {
    width: 135px;
    height: 46px;
    margin-left: 100px;
    padding: 0;
    border: none;
    background: transparent;
  }
}
.btn__icon {
  width: 26px;
  height: 26px;
}
.btn__textru {
  width: 25px;
  height: 22px;
  margin: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #f6f6f6;
}
.btn__list2 {
  display: flex;
  justify-content: space-between;
}
.btn__icon2 {
  width: 24px;
  height: 24px;
}
</style>
