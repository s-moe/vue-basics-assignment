const app = Vue.createApp({
  data() {
    return {
      name: "Sarah",
      age: 37,
      image:
        "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    favoriteNumber() {
      let randomNumber = Math.random();
      return randomNumber;
    },
  },
});
app.mount("#assignment");
