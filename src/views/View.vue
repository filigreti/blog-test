<template>
  <div class="about">
    <div class="flex w-full">
      <div class="w-2/5 h-screen top-0 sticky">
        <img class="w-full h-full object-cover bright" :src="post.img" alt="" />
      </div>
      <div class="pt-24 pl-10 pr-8 w-3/5">
        <div>
          <div class="text-xs text-gray-500 font-body">
            Home | Blog | {{ post.title }}
          </div>
          <div
            class="mt-12 font-body text-2xl pr-20 text-gray-800 font-light uppercase"
          >
            {{ post.title }}
          </div>
          <div class="text-xs font-light text-gray-600 font-body pt-2">
            By {{ post.author }}
          </div>
        </div>
        <highlightable
          @highlight="onHighlight"
          class="text-sm pr-16 pb-10 text-gray-700 font-thin tracking-wider font-body mt-6"
        >
          <p>
            {{ post.content }}
          </p>
        </highlightable>
      </div>
    </div>
    <form
      @submit.prevent="sendPost"
      v-if="active"
      class="right-0 top-0 mt-8 p-6 shadow-md rounded-tl-md max-w-md w-full fixed bg-lynx"
    >
      <div
        class="flex border-b pb-3 border-gray-400 justify-between items-center"
      >
        <div
          class="uppercase text-lg font-display antialiased text-gray-700 font-bold tracking-widey"
        >
          Highlights
        </div>
        <svg
          @click="active = false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 365.696 365.696"
          class="w-5 cursor-pointer h-5 fill-current text-gray-700"
        >
          <path
            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
          />
        </svg>
      </div>
      <p
        class="text-sm font-light text-gray-600 font-body pt-8"
        v-if="texts.length == 0"
      >
        You have no hightlighted words
      </p>
      <div class="mt-4">
        <div class="mb-3" v-for="(text, index) in texts" :key="index">
          <div class="flex items-center">
            <p
              @click="review(text)"
              class="text-sm cursor-pointer hover:text-gray-700 font-light text-gray-600 font-body"
            >
              {{ text }}
            </p>
            <svg
              class="w-3 ml-3 h-3 cursor-pointer"
              @click="removeText(index)"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512;"
              xml:space="preserve"
            >
              <path
                style="fill: #ff3636;"
                d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z M61,256  c0-107.401,87.599-195,195-195c40.499,0,79.501,12.599,112.8,36.299L256,210.099L97.301,368.8C73.599,335.499,61,296.499,61,256z   M256,451c-40.499,0-79.501-12.601-112.8-36.301l271.5-271.5c23.701,33.3,36.3,72.3,36.3,112.801C451,363.399,363.401,451,256,451z"
              />
              <path
                style="fill: #f40000;"
                d="M512,256c0,140.7-115.3,256-256,256v-61c107.401,0,195-87.601,195-195  c0-40.501-12.599-79.501-36.301-112.8L256,301.899v-91.8l112.8-112.8C335.501,73.599,296.499,61,256,61V0C396.7,0,512,115.3,512,256  z"
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
    <form
      v-if="preview"
      class="left-0 overflow-y-auto top-0 mt-8 p-6 pb-10 h-screen shadow-md rounded-tr-md max-w-md w-full fixed bg-lynx"
    >
      <div
        class="flex border-b pb-3 border-gray-400 justify-between items-center"
      >
        <div
          class="uppercase text-lg font-display antialiased text-gray-700 font-bold tracking-widey"
        >
          Previews
        </div>
        <svg
          @click="preview = false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 365.696 365.696"
          class="w-5 cursor-pointer h-5 fill-current text-gray-700"
        >
          <path
            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
          />
        </svg>
      </div>
      <div class="overflow-y-auto">
        <filtered :text="text" />
      </div>
    </form>
  </div>
</template>

<script>
import highlightable from "@/components/highlightable";
import data from "@/helpers/data";
import { mapGetters } from "vuex";
import filtered from "@/components/filtered";
export default {
  data() {
    return {
      post: {},
      data,
      active: false,
      texts: [],
      text: "",
      preview: false,
    };
  },
  components: {
    highlightable,
    filtered,
  },
  computed: {
    ...mapGetters(["getContent"]),
  },
  watch: {
    $route(to, from) {
      if (to) {
        let iniPost = this.getContent.find((x) => {
          return x.id == this.$route.params.id;
        });
        this.post = iniPost;
        this.active = false;
        this.preview = false;
      }
    },
  },

  methods: {
    removeText(x) {
      this.$delete(this.texts, x);
    },
    highlightModal() {
      this.active = true;
    },

    onHighlight(text) {
      let format = text.replace(/[^a-zA-Z0-9 ]/g, "");
      let k = this.texts.includes(format);
      if (k) {
        alert("Word already Exists");
      } else {
        this.active = true;
        this.texts.unshift(format);
      }
    },
    review(x) {
      this.text = x;
      this.preview = true;
    },
  },
  mounted() {
    let iniPost = this.getContent.find((x) => {
      return x.id == this.$route.params.id;
    });
    this.post = iniPost;
  },
};
</script>