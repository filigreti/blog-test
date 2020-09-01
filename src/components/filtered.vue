<template>
  <main>
    <div
      @click="
        $router.push({
          name: 'View',
          params: {
            id: post.id,
          },
        })
      "
      v-for="post in filterByText"
      :key="post.id"
    >
      <div class="mt-4 font-body text-2xl text-gray-700 font-light uppercase">
        {{ post.title }}
      </div>
      <div class="py-2 text-gray-700 text-sm font-body tracking-wide">
        <text-highlight :queries="text">{{
          post.content | truncate(150, "....")
        }}</text-highlight>
      </div>
    </div>
  </main>
</template>

<script>
import TextHighlight from "vue-text-highlight";
import { mapGetters } from "vuex";
export default {
  components: {
    TextHighlight,
  },
  props: ["text"],
  computed: {
    ...mapGetters(["getContent"]),
    filterByText() {
      return this.getContent.filter((x) => {
        return x.content.includes(this.text);
      });
    },
  },
  filters: {
    truncate: function (text, length, suffix) {
      return text.substring(0, length) + suffix;
    },
  },
  mounted() {
    let m = `I adore Fall Guys. Since launch, I've been playing the jellybean racing game almost daily and I've racked myself up a respectable number of wins.`;
    m.split("\n")[5];
    console.log(m, "what");
  },
};
</script>

<style>
</style>