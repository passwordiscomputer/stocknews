import {Age} from './../src/Age.js';

describe('Age', function() {
  let birthDate = "Wed Jan 29 1992"
  let userAge = new Age(birthDate)
  it('creates a new instance of the age class using the users birthdate', function() {
    expect(userAge.birthDate.toDateString()).toEqual(birthDate)
  });
  it('gives the users age in earth years ;)', function(){
    expect(userAge.earthYears()).toEqual(26)
  });
  it('gives us the users age in mercury years', function(){
    expect(userAge.mercuryYears()).toEqual(109)
  });
  it('gives us the users age in Venus years', function(){
    expect(userAge.venusYears()).toEqual(42)
  });
  it('gives us the users age in Mars years', function(){
    expect(userAge.marsYears()).toEqual(14)
  });
  it('gives us the users age in Jupiter years', function(){
    expect(userAge.jupiterYears()).toEqual(3)
  });
  it('determines how much longer a user has to live on earth', function(){
    expect(userAge.earthExpectancy()).toEqual(78 - userAge.earthYears())
  });

});
