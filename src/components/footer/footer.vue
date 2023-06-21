<template>
  <footer>
    <div>
      <h2>LOGO</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque donec non pellentesque ut.</li>
      </ul>
    </div>

    <div>
      <h3>About</h3>
      <ul>
        <li>Product</li>
        <li>Resource</li>
        <li>Term & Condition</li>
        <li>FAQ</li>
      </ul>
    </div>

    <div>
      <h3>Company</h3>
      <ul>
        <li>Our Team</li>
        <li>Partner With Us</li>
        <li>Privacy & Policy</li>
        <li>Features</li>
      </ul>
    </div>

    <div>
      <h3>Contact</h3>
      <ul>
        <li>+012 3456789</li>
        <li>adorableprogrammer@gmail.com</li>
      </ul>
      <div class="social-container">
        <img src="@/assets/svg/footer-youtube.svg" alt="">
        <img src="@/assets/svg/footer-discord.svg" alt="">
        <img src="@/assets/svg/footer-instagram.svg" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 1.2);
    height: calc(100vw / 7.13);
    margin: calc(100vw / 11.08) auto calc(100vw / 28.5) auto;
  }

  h2 {
    font-size: calc(100vw / 72);
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #6c5dd3;
    text-align: left;
  }

  h3 {
    font-size: calc(100vw / 72);
    margin: 0;
    padding: 0;
    font-weight: bold;
    text-align: left;
  }

  ul {
    margin: 0;
    padding: 0;
    max-width: calc(100vw / 5);
  }

  li {
    font-size: calc(100vw / 96);
    font-weight: medium;
    list-style: none;
    opacity: 0.5;
    text-align: left;
    margin: calc(100vw / 72) 0px;
  }

  .social-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 9.29);
    height: calc(100vw / 57.6);
  }

  img {
    width: calc(100vw / 57.6);
    height: calc(100vw / 57.6);
  }
</style>