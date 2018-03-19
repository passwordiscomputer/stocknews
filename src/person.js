export class Person{
  constructor(birthDate){
    this.birthDate = new Date(birthDate);
    this.current = new Date(Date.now());
    this.baseAge =  this.current.getFullYear() - this.birthDate.getFullYear();

  }
  age(planet){
    return (`On planet: ${planet} you are ${this.getYearsOnPlanet(planet, this.baseAge)} years old.`);
  }

  expectancy(lifeExpectancy, planet){
    let remainingYears = lifeExpectancy - this.baseAge;
    return remainingYears >= 0 ?
    `On planet: ${planet} you have ${this.getYearsOnPlanet(planet, remainingYears)} years til your inevitable death` :
    `On planet: ${planet} you have lived past your predetermined death by ${-(this.getYearsOnPlanet(planet, remainingYears))} years`
  }

  getYearsOnPlanet(planet, years) {
    switch (planet) {
    case 'Mercury':
      return Math.ceil(years / 0.24);
    case 'Venus':
      return Math.ceil(years / 0.62);
    case 'Mars':
      return Math.ceil(years / 1.88);
    case 'Jupiter':
      return Math.ceil(years / 11.86);
    default:
      return years;
    }
  }
}
