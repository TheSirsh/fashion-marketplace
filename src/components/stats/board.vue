<template>
  <table>
    <tr>
      <th>Collection</th>
      <th>Volume</th>
      <th>24H%</th>
      <th>7D%</th>
      <th>Floor Price</th>
      <th>Owners</th>
      <th>Items</th>
    </tr>
    <tr v-for="stat in stats">
      <td>{{ stat.collection }}</td>
      <td>{{ stat.volume }}</td>
      <td>{{ stat.day }}</td>
      <td>{{ stat.week }}</td>
      <td>{{ stat.price }}</td>
      <td>{{ stat.owner }}</td>
      <td>{{ stat.items }}</td>
    </tr>

  </table>
</template>

<script>
  export default {
    data() {
      return {
        stats: [
          { collection: "Adidas", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { collection: "Nike", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { collection: "Lacoste", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { collection: "Zalando", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { collection: "Zara", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { collection: "Cartier", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
          { collection: "Hermes", volume: "27,966.76", day: "+92.96", week: "-16.38", price: "12.99", owners: "5.9K", items: "10K", },
        ],
      }
    },
  }
</script>