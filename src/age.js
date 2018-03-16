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

}
