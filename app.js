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
      let newAge = this.age + 5;
      return newAge;
    },
    favoriteNumber() {
      let randomNumber = Math.random();
      return randomNumber;
    },
  },
});
app.mount("#assignment");
