<template>
  <section class="partner">
    <div class="cotainer">
      <div class="partner_content">
        <div class="partner_left">
          <h2 class="partner_text">С нами вы построите отличную карьеру</h2>
          <p class="partner_span">
            Свяжитесь с нами и получите лучшую партнерскую программу...
          </p>
          <button class="partner_btn">Связаться</button>
        </div>
        <div class="partner_right">
          <img
            class="partner_img"
            src="../assets/Partner/partner_img.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section class="blocks">
    <div class="container">
      <div class="blocks_content">
        <div class="block1">
          <h3 class="block1_text">10 лет в тревел cфере</h3>
          <p class="block1_title">
            Мы в мире тревел-услуг и монетизации трафика с 2011 г.
          </p>
          <img
            class="block1_img"
            src="../assets/Partner/block1_img.svg"
            alt=""
          />
        </div>
        <div class="block2">
          <img
            class="block_svg"
            src="../assets/Partner/partner_svg2.svg"
            alt=""
          />
        </div>
        <div class="block3">
          <img
            class="block_svg"
            src="../assets/Partner/partner_svg3.svg"
            alt=""
          />
        </div>
        <div class="block4">
          <img
            class="block_svg"
            src="../assets/Partner/partner_svg4.svg"
            alt=""
          />
        </div>
        <div class="block5">
          <img
            class="block_svg"
            src="../assets/Partner/partner_svg5.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section class="part_block">
    <div class="container">
      <div class="part_block_content">
        <h1 class="part_block_text">Наши партнеры</h1>
        <p class="part_block_title">Стань нашим новым партнером</p>
        <div class="part_block_icon">
          <img src="../assets/Partner/part_nitro.svg" alt="" />
          <img class="part_block_shoro" src="../assets/Partner/part_shoro.svg" alt="" />
          <img src="../assets/Partner/part_kyrgyz.svg" alt="" />
        </div>
        <img class="part_block_avangard"  src="../assets/Partner/part_angard.svg" alt="">
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
body {
  margin: 0 auto;
}

.partner {
  background: url(../assets/Partner/parther_logo.png);
  height: 740px;
  width: 1440px;
  background-size: cover;
  background-position: center;

  &_text {
    width: 578px;
    height: 190px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    color: #f6f6f6;
  }

  &_content {
    display: flex;
    justify-content: center;
    padding-top: 174px;
    position: absolute;
    width: 1440px;
    height: 565px;
    top: 0px;
    background: linear-gradient(180deg, rgba(41, 43, 55, 0) 42%, #1b1d29 95%);
    filter: drop-shadow(0px 11px 29px rgba(8, 15, 22, 0.25));
    border-radius: 0px 0px 16px 16px;
  }

  &_span {
    width: 476px;
    height: 56px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    color: #f6f6f6;
    margin-top: 20px;
  }
  &_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 55px;
    gap: 10px;
    width: 227px;
    height: 51px;
    background: #1c9fe3;
    border-radius: 8px;
    border: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #f6f6f6;
  }
  &_img {
    background: #292b36;
    width: 628px;
    height: 566px;
    border-radius: 16px;
  }
}

.blocks {
  background: #f6f6f6;

  &_content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 150px;
  }
}
.block1 {
  width: 318px;
  height: 262px;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.3);
  border-radius: 16px;
  margin-bottom: 21px;
  display: flex;
  flex-wrap: wrap;

  &_text {
    width: 238px;
    height: 64px;
    left: 40px;
    top: 30px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 31px;
    letter-spacing: -0.64px;
    padding-top: 30px;
    margin-left: 40px;

    color: #1e1e1e;
  }

  &_title {
    width: 130px;
    height: 88px;
    left: 40px;
    top: 108px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin-left: 40px;
    color: #1e1e1e;
  }

  &_img {
    margin-left: 169.59px;
    margin-top: 101.88px;
    overflow: hidden;
    border-radius: 16px;
    position: absolute;
  }
}
.block2 {
  width: 496px;
  height: 262px;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.3);
  border-radius: 16px;
  margin-bottom: 21px;
  overflow: hidden;
}
.block3 {
  width: 318px;
  height: 262px;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.3);
  border-radius: 16px;
  margin-bottom: 21px;
}
.block4 {
  width: 580px;
  height: 262px;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.3);
  border-radius: 16px;
}
.block5 {
  width: 580px;
  height: 262px;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.3);
  border-radius: 16px;
}

.block_svg {
  padding: 0;
  margin: 0;
  border-radius: 16px;
  position: relative;
  z-index: -0.5;
}

.part_block {

  margin-top: 105px;
  margin-bottom: 91px;
  &_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: #1e1e1e;
    margin-left: 445px;

  }

  &_title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #808080;
    margin-left: 424px;
  }

  &_icon {
    display: flex;
    justify-content: space-between;
  }

  &_shoro{
    padding-top: 93px;
  }
  &_avangard{
    margin-left: 390px;
  }
}
</style>