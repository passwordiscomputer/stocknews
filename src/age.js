export class Age{
  constructor(birthDate){
    this.birthDate = new Date (birthDate);
  }
  earthYears(){
    let current = new Date(Date.now());
    return current.getFullYear() - this.birthDate.getFullYear();
  }
  mercuryYears(){
    return Math.ceil(this.earthYears()/.24);
  }
  venusYears(){
    return Math.ceil(this.earthYears()/.62);
  }
  marsYears(){
    return Math.ceil(this.earthYears()/1.88);
  }
  jupiterYears(){
    return Math.ceil(this.earthYears()/11.86);
  }
  earthExpectancy(){
    return (78 - this.earthYears());
  }
  mercuryExpectancy(){
    return Math.ceil(this.earthExpectancy()/.24);
  }
  venusExpectancy(){
    return Math.ceil(this.earthExpectancy()/.62);
  }
  marsExpectancy(){
    return Math.ceil(this.earthExpectancy()/1.88);
  }
  jupiterExpectancy(){
    return Math.ceil(78 - this.earthExpectancy()/11.86);
  }

}
