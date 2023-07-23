<template>
  <table>
    <tr>
      <th class="fth">Collection</th>
      <th>Volume</th>
      <th>24H%</th>
      <th>7D%</th>
      <th>Floor Price</th>
      <th>Owners</th>
      <th>Items</th>
    </tr>
    <tr v-for="stat in stats" class="data">
      <td>
        <div class="container">
          <span class="number">{{ stat.id }}</span>
          <img :src="setImage(stat.img)" :alt="stat.alt" class="img">
          <span class="label">{{ stat.collection }}</span>
        </div>
      </td>
      <td>
        <img src="@/assets/svg/etherium.svg" alt="Etherium" class="etherium">
        {{ stat.volume }}
      </td>
      <td class="green">{{ stat.day }}</td>
      <td class="red">{{ stat.week }}</td>
      <td>
        <img src="@/assets/svg/etherium.svg" alt="Etherium" class="etherium">
        {{ stat.price }}
      </td>
      <td>{{ stat.owners }}</td>
      <td>{{ stat.items }}</td>
    </tr>

  </table>
</template>

<script>
  export default {
    data() {
      return {
        stats: [
          { id: "1", img: "1", alt: "Adidas", collection: "Adidas", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { id: "2", img: "2", alt: "Nike", collection: "Nike", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { id: "3", img: "3", alt: "Lacoste", collection: "Lacoste", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { id: "4", img: "4", alt: "Zalando", collection: "Zalando", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { id: "5", img: "5", alt: "Zara", collection: "Zara", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { id: "6", img: "6", alt: "Cartier", collection: "Cartier", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { id: "7", img: "7", alt: "Hermes", collection: "Hermes", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/stats-img${src}.jpg`)
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    height: calc(100vw / 1.6);
    border-collapse: collapse;
    margin: calc(100vw / 14.4) auto calc(100vw / 28.8) auto;
  }

  th {
    font-size: 0.9rem;
    font-weight: 600;
    border-bottom: 0.5px solid #ffffff;
    margin: 0;
    padding: 0;
  }

  td {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
    font-weight: 500;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .number {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .img {
    display: inline-block;
    width: calc(100vw / 28.8);
    height: calc(100vw / 28.8);
    border-radius: 50%;
    margin: 0px calc(100vw / 144) 0px calc(100vw / 57.6);
  }

  .label {
    display: inline-block;
    font-size: 0.9rem;
  }

  .fth {
    text-align: left;
    padding-left: calc(100vw / 53.33);
  }

  tr:first-child{
    height: calc(100vw / 20.28);
  }

  .data {
    font-size: 0.8rem;
    height: calc(100vw / 12);
  }

  .data:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .etherium {
    width: calc(100vw / 130.91);
    height: calc(100vw / 84.71);
    margin-right: calc(100vw / 180);
  }

  .green{
    color: #0acf41
  }

  .red {
    color: #ff2222
  }
</style>