// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "192.168.1.242",
    port: 3000
  },
  css: ['~/assets/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/f4d0f13239.js",
          crossorigin: "anonymous"
        },
        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
        },
        // {
        //   src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
        //   integrity: "sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==",
        //   crossorigin: "anonymous",
        //   referrerpolicy: "no-referrer"
        // }
        
      ],
      title: "Murft",
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css",
      //     integrity: "sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==",
      //     crossorigin: "anonymous",
      //     referrerpolicy: "no-referrer"
      //   }
      // ]
    },
  },
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],
  modules: [
    'vue3-carousel-nuxt'
  ]
})


// const buttons = document.getElementsByClassName("carousel__pagination-button");

// Array.from(buttons).forEach((element) => {
//   element.remove()
// })