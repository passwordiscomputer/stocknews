import {Person} from './../src/person.js';

describe('Age', function() {
  let person1 = new Person('Jan 29, 1992')

  it('gives the users age in earth years ;)', function(){
    expect(person1.age("Earth")).toEqual('On planet: Earth you are 26 years old.')
  });
  it('gives the users age in mmercury years ;', function(){
    expect(person1.age("Mercury")).toEqual('On planet: Mercury you are 109 years old.')
  });
  it('gives the users years remaining of life', function(){
    expect(person1.expectancy(52, 'Earth')).toEqual('On planet: Earth you have 26 years til your inevitable death')
  });
  it('gives the users years remaining of life', function(){
    expect(person1.expectancy(24, 'Earth')).toEqual('On planet: Earth you have lived past your predetermined death by 2 years')
  })
});
