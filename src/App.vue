<template>
  <div>
    <div
      :class="
        $route.name == 'View'
          ? ' all w-3/5    absolute right-0  justify-between                '
          : ''
      "
      class="py-8 px-10"
    >
      <div class="flex w-full items-center justify-between">
        <h1
          @click="$router.push('/')"
          class="uppercase text-lg font-display antialiased text-gray-700 font-bold tracking-wide cursor-pointer"
        >
          Blog
        </h1>
        <svg
          v-show="!active && $route.name == 'Home'"
          @click="active = true"
          class="w-6 h-6 fill-current text-gray-700 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M352.46 220a20 20 0 00-20-20h-206a20 20 0 100 40h206a20 20 0 0020-20zM126.46 280a20 20 0 100 40h125.11a20 20 0 100-40H126.46z"
          />
          <path
            d="M173.46 472h-66.89c-22.06 0-40-17.94-40-40V80c0-22.06 17.94-40 40-40h245.89c22.06 0 40 17.94 40 40v123a20 20 0 1040 0V80c0-44.11-35.89-80-80-80H106.57c-44.11 0-80 35.89-80 80v352c0 44.11 35.89 80 80 80h66.89a20 20 0 100-40z"
          />
          <path
            d="M467.88 289.57a60.06 60.06 0 00-84.83-.01l-109.8 109.56a20 20 0 00-5.02 8.34l-23.9 78.73a20 20 0 0024.47 25.08l80.72-22.36a20 20 0 008.8-5.12l109.57-109.36a60.07 60.07 0 000-84.86zm-134.1 162.2l-40.62 11.25 11.89-39.13 74.09-73.93 28.29 28.3-73.65 73.5zm105.84-105.64l-3.88 3.87-28.29-28.29 3.87-3.85c7.8-7.8 20.48-7.8 28.28 0 7.8 7.8 7.8 20.48.01 28.27zM332.46 120h-206a20 20 0 100 40h206a20 20 0 100-40z"
          />
        </svg>
        <svg
          @click="open"
          v-if="$route.name == 'View'"
          style="width: 24px; height: 24px;"
          class="fill-current text-gray-700 cursor-pointer"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16"
          />
        </svg>
      </div>
    </div>
    <router-view ref="allRoute" @toggle="editData" />
    <form
      @submit.prevent="sendPost"
      v-if="active"
      class="right-0 top-0 mt-8 p-6 shadow-md rounded-tl-md max-w-md w-full fixed h-screen bg-lynx"
    >
      <div class="flex justify-between items-center">
        <div
          class="uppercase text-lg font-display antialiased text-gray-700 font-bold tracking-widey"
        >
          Write Blog
        </div>
        <svg
          @click="closeCreatePost"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 365.696 365.696"
          class="w-5 cursor-pointer h-5 fill-current text-gray-700"
        >
          <path
            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
          />
        </svg>
      </div>
      <div class="mt-8">
        <input
          type="text"
          class="input text-xs font-body text-gray-700 pl-6"
          maxlength="70"
          placeholder="Title"
          name=""
          id=""
          required
          v-model="args.title"
        />
        <input
          type="url"
          class="input mt-4 text-xs font-body text-gray-700 pl-6"
          placeholder="Image Link"
          name=""
          id=""
          required
          v-model="args.img"
        />
        <input
          type="text"
          class="input mt-4 text-xs font-body text-gray-700 pl-6"
          maxlength="20"
          placeholder="Author"
          name=""
          id=""
          required
          v-model="args.author"
        />

        <textarea
          name=""
          class="input mt-4 rounded-lg font-body text-gray-700 pl-6 text-sm"
          placeholder="Content"
          id=""
          rows="15"
          required
          v-model="args.content"
        ></textarea>

        <button
          class="bg-hash mt-3 focus:outline-none hover:bg-gray-800 font-body text-white text-xs py-2 px-8 leading-5 rounded-xs uppercase"
        >
          Submit
        </button>
      </div>
    </form>
    <form
      @submit.prevent="editAll"
      v-if="edit"
      class="right-0 top-0 mt-8 p-6 shadow-md rounded-tl-md max-w-md w-full fixed h-screen bg-lynx"
    >
      <div class="flex justify-between items-center">
        <div
          class="uppercase text-lg font-display antialiased text-gray-700 font-bold tracking-widey"
        >
          Edit Blog
        </div>
        <svg
          @click="closeEditPost"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 365.696 365.696"
          class="w-5 cursor-pointer h-5 fill-current text-gray-700"
        >
          <path
            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
          />
        </svg>
      </div>
      <div class="mt-8">
        <input
          type="text"
          class="input text-xs font-body text-gray-700 pl-6"
          maxlength="70"
          placeholder="Title"
          name=""
          id=""
          required
          v-model="args.title"
        />
        <input
          type="url"
          class="input mt-4 text-xs font-body text-gray-700 pl-6"
          placeholder="Image Link"
          name=""
          id=""
          required
          v-model="args.img"
        />
        <input
          type="text"
          class="input mt-4 text-xs font-body text-gray-700 pl-6"
          maxlength="20"
          placeholder="Author"
          name=""
          id=""
          required
          v-model="args.author"
        />

        <textarea
          name=""
          class="input mt-4 rounded-lg font-body text-gray-700 pl-6 text-sm"
          placeholder="Content"
          id=""
          rows="15"
          required
          v-model="args.content"
        ></textarea>

        <button
          class="bg-hash mt-3 focus:outline-none hover:bg-gray-800 font-body text-white text-xs py-2 px-8 leading-5 rounded-xs uppercase"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      edit: false,
      args: {
        title: "",
        content: "",
        author: "",
        img: "",
        id: "",
      },
    };
  },
  methods: {
    open() {
      this.$refs.allRoute.highlightModal();
    },
    sendPost(x) {
      let k = { ...this.args };
      k.id = this.$store.state.blogContent.length + 1;
      this.$store.commit("addToBlog", k);
      this.reset();
      this.active = false;
    },
    editData(x) {
      this.edit = true;
      this.args.title = x.title;
      this.args.content = x.content;
      this.args.img = x.img;
      this.args.author = x.author;
      this.args.id = x.id;
    },

    editAll() {
      let k = { ...this.args };
      this.$store.commit("editPost", k);
      this.reset();
      this.edit = false;
    },

    reset() {
      this.args.title = "";
      this.args.content = "";
      this.args.author = "";
      this.args.img = "";
      this.args.id = "";
    },
    closeCreatePost() {
      this.active = false;
      this.reset();
    },
    closeEditPost() {
      this.edit = false;
      this.reset();
    },
  },
  mounted() {},
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fifty {
  width: 50%;
}
.bright {
  filter: brightness(0.95);
}
.bright:hover {
  filter: brightness(1);
}
.img-cont:hover .del {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background: white;
  transition: 1s ease-in;
  transition: opacity 1s ease-out;
  cursor: pointer;
  border-top-right-radius: 2px;
  opacity: 0.8;
}
.input {
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}
.input:focus {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
.input {
  border: 0;
  outline: 0;
  border-radius: 320px;
  padding: 0.8rem;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}
</style>