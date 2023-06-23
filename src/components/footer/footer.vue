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
        <li v-for="about in abouts">
          {{ about.text }}
        </li>
      </ul>
    </div>

    <div>
      <h3>Company</h3>
      <ul>
        <li v-for="company in companies">
          {{ company.text }}
        </li>
      </ul>
    </div>

    <div>
      <h3>Contact</h3>
      <ul>
        <li v-for="contact in contacts">
          {{ contact.text }}
        </li>
      </ul>
      <div class="social-container">
        <img v-for="social in socials" :src="setImage(social.src)" :alt="social.alt">
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        abouts: [
          { text: "Product", },
          { text: "Resource", },
          { text: "Term & Condition", },
          { text: "FAQ", },
        ],
        companies: [
          { text: "Our Team", },
          { text: "Partner With Us", },
          { text: "Privacy & Policy", },
          { text: "Features", },
        ],
        contacts: [
          { text: "+012 3456789", },
          { text: "adorableprogrammer@gmail.com", },
        ],
        socials: [
          { src: "youtube", alt: "YouTube", },
          { src: "discord", alt: "Discord", },
          { src: "instagram", alt: "Instagram", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/svg/footer-${src}.svg`)
      },
    },
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
    margin: 0;
    padding: 0;
    font-weight: 700;
    color: #6c5dd3;
    text-align: left;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-align: left;
  }

  ul {
    margin: 0;
    padding: 0;
    max-width: calc(100vw / 5);
  }

  li {
    font-size: 0.75rem;
    font-weight: 500;
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