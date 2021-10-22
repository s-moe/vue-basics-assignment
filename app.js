const app = Vue.createApp({
  data() {
    return {
      name: "Sarah",
      age: 37,
    };
  },
  methods: {
    ageInFiveYears() {
      let newAge = this.age + 5;
      return newAge;
    },
  },
});
app.mount("#assignment");
