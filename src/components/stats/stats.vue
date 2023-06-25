<template>
  <section>
    <h2>Top Market Statistics</h2>
    <p>The top NFTs on _________  , ranked by volume, floor price and other statistics.</p>
    <div>
      <button>
        <span>Marketplace Perfomence</span>
      </button>
      <div>
        <button>
        <span>Last 7 Days</span>
        </button>
        <button>
          <span>All Categories</span>
        </button>
      </div>
    </div>
    <board/>
    <div>
      <button>
        <span>&lt; 1-100</span>
      </button>
      <button>
        <span>101-200 &gt;</span>
      </button>
    </div>
  </section>
</template>

<script>
  import board from "@/components/stats/board.vue";

  export default {
    components: {
      board,
    }
  }
</script>