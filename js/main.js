const thumbElem = document.querySelector(".my-thumbnail");

const { createApp } = Vue;

createApp({
  data() {
    return {
      interval: null,
      isIntervalActive: true,
      activeIndex: 0,
      greetings: "test vue",
      isNext: true,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  created() { //una sola volta all'avvio della pagina
    this.startInt();
  },
  methods: {
    showNext: function () {
      this.activeIndex === this.images.length - 1
        ? (this.activeIndex = 0)
        : this.activeIndex++;
    },
    showPrev: function () {
      this.activeIndex > 0
        ? this.activeIndex--
        : (this.activeIndex = this.images.length - 1);
    },
    clearInt: function () {
      console.log("stop:", this.isIntervalActive);

      clearInterval(this.interval);
    },
    startInt: function () {
      this.interval = setInterval(() => {

        this.isNext ? this.showNext() : this.showPrev();
        console.log("start:", this.isIntervalActive);
      }, 3000);
    },
    handleStart: function () {
      this.isIntervalActive ? this.clearInt() : this.startInt();
      this.isIntervalActive = !this.isIntervalActive
    }
  },
}).mount("#app");
