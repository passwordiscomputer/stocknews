import {Age} from './../src/Age.js';

describe('Age', function() {
  let birthDate = "Wed Jan 29 1992"
  let normalPersonAge = new Age(birthDate)
  let oldPersonAge = new Age("Jan 29 1930")
  it('creates a new instance of the age class using the users birthdate', function() {
    expect(normalPersonAge.birthDate.toDateString()).toEqual(birthDate)
  });
  it('gives the users age in earth years ;)', function(){
    expect(normalPersonAge.earthYears()).toEqual(26)
  });
  it('gives us the users age in mercury years', function(){
    expect(normalPersonAge.mercuryYears()).toEqual(109)
  });
  it('gives us the users age in Venus years', function(){
    expect(normalPersonAge.venusYears()).toEqual(42)
  });
  it('gives us the users age in Mars years', function(){
    expect(normalPersonAge.marsYears()).toEqual(14)
  });
  it('gives us the users age in Jupiter years', function(){
    expect(normalPersonAge.jupiterYears()).toEqual(3)
  });
  it('determines how much longer a user has to live on earth', function(){
    expect(normalPersonAge.earthExpectancy()).toEqual(78 - normalPersonAge.earthYears())
  });
  it('determines how long a person has lived past the proper age on earth', function(){
    expect(oldPersonAge.earthExpectancy()).toEqual(78 - oldPersonAge.earthYears())
  });
  it('determines how much longer a user has to live on Mercury', function(){
    expect(normalPersonAge.mercuryExpectancy()).toEqual(217)
  });
  it('determines how much longer a user has to live on Venus', function(){
    expect(normalPersonAge.venusExpectancy()).toEqual(84)
  });
  it('determines how much longer a user has to live on mars', function(){
    expect(normalPersonAge.marsExpectancy()).toEqual(28)
  });
  it('determines how much longer a user has to live on jupiter', function(){
    expect(normalPersonAge.jupiterExpectancy()).toEqual(74)
  });
});
