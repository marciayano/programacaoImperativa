const superHeroes = [
  {
    name: "Wonder Woman",
    power: "fly",
    greenting: function(){
      return "Hi, I am " + this.name;
    }
  },
  {
    name: "Iron Man",
    power: "laser",
    greeting: function(){
      return "Hi, I am " + this.name;
    }
  },
  {
    name: "Sailor Moon",
    power: "lunar power",
    greeting: function(){
      return "In the name of the moon, I will right wrong and triumph over evil"
    }
  }
];

module.exports = superHeroes;