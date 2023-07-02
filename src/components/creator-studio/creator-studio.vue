<template>
  <div>
    <descr/>
    <div>
      <h4>Expand Your Market Like Others,</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis.</p>
    </div>
    <board/>
    <div>
      <button>
        <span>Create Now</span>
      </button>
      <button>
        <span>Customize Now</span>
      </button>
    </div>
  </div>
</template>

<script>
  import descr from "@/components/creator-studio/descr.vue";
  import board from "@/components/creator-studio/board.vue";

  export default {
    components: {
      descr, board,
    }
  }
</script>