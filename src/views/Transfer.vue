<template>
  <header class="header_transfer"></header>
  <div class="transfer">
    <div class="container">
      <div class="transfer_content">
        <div class="transfer_content_left">
          <h1 class="transfer_text">
            Опоздали на рейс или хотели перенести дату?
          </h1>
          <p class="transfer_title">Позвоните по этим номерам:</p>

          <div class="transfer_box">
            <div class="box_left">
              <h2 class="box_text">Центр помощи:</h2>
              <ul class="box_list">
                <li class="box_number">0(312)-555-555</li>
                <li class="box_number">0(312)-555-555</li>
              </ul>
            </div>
            <div class="box_right">
              <h3 class="box_text">Отдел бронирования:</h3>
              <ul class="box_list">
                <li class="box_number">0(312)-555-555</li>
                <li class="box_number">0(312)-555-555</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="transfer_content_right">
          <img
            class="transfer_img"
            src="../assets/transfer/transfer_img.svg"
            alt=""
          />
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
.header_transfer {
  background: #1c9fe3;
  width: 100%;
  height: 120px;
}

.transfer {
  &_content {
    display: flex;
    justify-content: space-between;
    padding-top: 120px;
    margin-bottom: 120px;
  }

  &_img {
    width: 519px;
    height: 482px;
  }

  &_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    color: #263238;

    width: 558px;
    height: 201px;
  }

  &_title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #617f8d;
  }

  &_box {
    display: flex;
    margin-top: 50px;
  }
}

.box_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #263238;
}

.box_number {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #617f8d;
  margin-bottom: 5px;
}

.box_right {
  margin-left: 63px;
}

.box_list {
  margin-top: 10px;
}
</style>