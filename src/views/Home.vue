<template>
  <div class="home">
    <div class="mt-10 text-center font-body">
      <h4 class="text-sm text-gray-700">Welcome to the</h4>
      <h1
        class="mt-2 text-4xl font-light tracking-wide uppercase text-gray-800 font-display"
      >
        SenseHawk Blog Test
      </h1>

      <div class="mt-12 text-xs text-gray-700 font-body">
        Mode:
        <span
          @click="mode = 'classic'"
          class="px-2 cursor-pointer"
          :class="{ ' underline': mode == 'classic' }"
          >Classic
        </span>
        |
        <span
          @click="mode = 'titled'"
          :class="{ ' underline': mode == 'titled' }"
          class="px-2 cursor-pointer"
        >
          Tiled</span
        >
      </div>
    </div>
    <div :class="mode == 'classic' ? ' px-32' : 'px-40'" class="mt-20">
      <div
        v-for="content in getContent"
        :key="content.id"
        class="flex h-70 mb-24"
      >
        <div class="max-w-xs relative img-cont">
          <img
            :src="content.img"
            :class="
              mode == 'classic'
                ? ' w-full h-full bright rounded-sm   object-cover  '
                : ''
            "
            alt=""
          />
          <div
            @click="removePost(content)"
            class="del hidden absolute bottom-0 del"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-64 0 512 512"
            >
              <path
                d="m256 80h-32v-48h-64v48h-32v-80h128zm0 0"
                fill="#62808c"
              />
              <path
                d="m304 512h-224c-26.507812 0-48-21.492188-48-48v-336h320v336c0 26.507812-21.492188 48-48 48zm0 0"
                fill="#e76e54"
              />
              <path
                d="m384 160h-384v-64c0-17.671875 14.328125-32 32-32h320c17.671875 0 32 14.328125 32 32zm0 0"
                fill="#77959e"
              />
              <path
                d="m260 260c-6.246094-6.246094-16.375-6.246094-22.625 0l-41.375 41.375-41.375-41.375c-6.25-6.246094-16.378906-6.246094-22.625 0s-6.246094 16.375 0 22.625l41.375 41.375-41.375 41.375c-6.246094 6.25-6.246094 16.378906 0 22.625s16.375 6.246094 22.625 0l41.375-41.375 41.375 41.375c6.25 6.246094 16.378906 6.246094 22.625 0s6.246094-16.375 0-22.625l-41.375-41.375 41.375-41.375c6.246094-6.25 6.246094-16.378906 0-22.625zm0 0"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div
          @click="
            $router.push({
              name: 'View',
              params: {
                id: content.id,
              },
            })
          "
          class="ml-12 py-2"
        >
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500 font-light">
              {{ moment().format("HH.MM.YYYY") }}
            </div>
            <svg
              @click.stop="edit(content)"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              enable-background="new 0 0 510.115 510.115"
              class="w-4 h-4 fill-current text-gray-700 mr-20 cursor-pointer"
              viewBox="0 0 510.115 510.115"
            >
              <g>
                <path
                  d="m349.967 494.891h-242.387l5.98-7.127c.001-.001.003-.003.004-.004.001-.002.002-.003.004-.005l61.307-73.058c2.663-3.173 2.249-7.904-.924-10.566-3.173-2.664-7.904-2.249-10.566.924l-56.49 67.318-17.78-14.92 257.827-307.247 17.78 14.92-180.713 215.351c-2.663 3.173-2.249 7.904.924 10.566 3.172 2.663 7.903 2.248 10.566-.924l239.051-284.871c17.18-20.473 13.969-51.551-7.156-69.28l-28.43-23.855c-21.127-17.728-52.291-15.496-69.471 4.977l-320.984 382.51s-.001.001-.001.001-.001.001-.001.001l-6.751 8.045c-1.192 1.421-1.815 3.232-1.75 5.085l2.892 82.111c.156 4.402 2.201 8.569 5.612 11.432 2.855 2.396 6.444 3.691 10.097 3.691.481 0 331.362-.076 331.362-.076 4.143 0 7.5-3.357 7.5-7.5s-3.359-7.499-7.502-7.499zm-332.815-21.454 22.197 18.627-20.689 2.9c-.226.034-.414-.098-.509-.178-.095-.079-.255-.247-.263-.47zm80.021 10.521-37.828 5.302-42.903-36.002-1.344-38.175.08-.095 82.076 68.875zm-19.549-36.148-21.47-18.017 204.462-243.652c2.663-3.173 2.249-7.904-.924-10.566-3.174-2.664-7.904-2.249-10.566.924l-204.462 243.652-19.845-16.653 257.827-307.247 19.845 16.654-32.741 39.017c-2.663 3.173-2.249 7.904.924 10.566 1.405 1.18 3.116 1.755 4.817 1.755 2.141 0 4.266-.911 5.749-2.679l32.741-39.017 21.469 18.016zm263.36-421.078c11.862-14.138 33.549-15.539 48.338-3.129l28.43 23.855c14.79 12.412 17.171 34.011 5.309 48.147l-27.233 32.453-7.757-6.509c-3.174-2.664-7.904-2.248-10.566.924-2.663 3.173-2.249 7.904.924 10.566l7.757 6.509-11.82 14.085-82.077-68.873 11.819-14.084 49.813 41.8c1.405 1.18 3.116 1.755 4.817 1.755 2.141 0 4.266-.911 5.749-2.679 2.663-3.173 2.249-7.904-.924-10.566l-49.814-41.8z"
                />
                <path
                  d="m502.615 494.891h-113.279c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h113.279c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
              </g>
            </svg>
          </div>
          <div
            class="mt-4 font-body text-2xl pr-48 text-gray-700 font-light uppercase"
          >
            {{ content.title }}
          </div>
          <div class="pr-32 py-2 text-gray-700 text-sm font-body tracking-wide">
            {{ content.content | truncate(250, "....") }}
          </div>
          <div class="text-xs font-light text-gray-600 font-body">
            By {{ content.author }}
          </div>

          <button
            class="bg-hash mt-3 focus:outline-none hover:bg-gray-800 font-body text-white text-xs py-2 px-8 leading-5 rounded-xs"
          >
            READ MORE
          </button>
        </div>
      </div>
      <div v-if="getContent.length == 0">
        <div
          class="mt-4 font-body text-2xl pr-48 text-gray-700 font-light uppercase"
        >
          <span class="text-blue-300">There</span> are currently no
          <span class="text-red-600">posts</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      mode: "classic",
      moment,
    };
  },
  computed: {
    ...mapGetters(["getContent"]),
  },
  watch: {
    mode(x) {
      if (x == "classic") {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "#EEECEC";
      }
    },
  },
  methods: {
    removePost(x) {
      this.$store.commit("deletePost", x);
    },
    edit(x) {
      this.$emit("toggle", x);
    },
  },
  filters: {
    truncate: function (text, length, suffix) {
      return text.substring(0, length) + suffix;
    },
  },
};
</script>

