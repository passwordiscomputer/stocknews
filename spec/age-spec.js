import {Person} from './../src/person.js';

describe('Age', function() {
  let person1 = new Person('Jan 29, 1992')

  it('gives the users age in earth years ;)', function(){
    expect(person1.age("Earth")).toEqual('On planet: Earth you are 26 years old.')
  });
});
