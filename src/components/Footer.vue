<template>
  <footer class="footer">
    <div class="footer__logo">
      <img src="../assets/images/light-logo.png" alt="logo">
    </div>
    <div class="footer__service">
      <h3 class="service__title">客戶服務</h3>
      <ul class="service__list">
        <li class="service__list--shipping-description">運送說明</li>
        <li class="service__list--product-exchange">退換貨相關</li>
        <li class="service__list--payment-information">付款資訊</li>
        <li class="service__list--faq">FAQ</li>
      </ul>
    </div>
    <div class="footer__about">
      <h3 class="about__title">關於我們</h3>
      <ul class="about__list">
        <li class="about__list--story">品牌故事</li>
        <li class="about__list--media">媒體聯繫</li>
        <li class="about__list--press-kit">Press kit</li>
      </ul>
    </div>
    <div class="footer__information">
      <h3 class="information__title">資訊</h3>
      <ul class="information__list">
        <li class="information__list--privacy">隱私權政策</li>
        <li class="information__list--cookie">Cookie</li>
        <li class="information__list--gdpr">GDPR</li>
      </ul>
    </div>
    <div class="footer__follow">
      <h3 class="follow__title">追蹤ALPHA Shop</h3>
      <div class="follow__phone">+886 02123-45678</div>
      <div class="follow__list">
        <img src="../assets/images/light-fb-icon.png" alt="">
        <img src="../assets/images/light-ig-icon.png" alt="">
        <img src="../assets/images/light-whatsapp-icon.png" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
// 將footer改成flexbox可達到與螢幕自動伸縮
.footer {
  display: flex;
  justify-content: space-between;
  margin-left: 10rem;
  width: 76%;

  > .footer__service > .service__title,
    .footer__about > .about__title,
    .footer__information > .information__title,
    .footer__follow > .follow__title {
      margin-bottom: 1rem;
    }

  > .footer__service,
    .footer__about,
    .footer__information,
    .footer__follow {
      margin: 3rem 0;
    }

  > .footer__logo {
    margin-top: 6.5rem;
  }

}
</style>