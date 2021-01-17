class Person {
  hobbies = [];
  skills = [];

  constructor(gender, birthYear) {
    this.gender = gender;
    this.birthYear = birthYear;
  }

  getGender() {
    return this.gender;
  }

  setName(name) {
    this.name = name;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getName() {
    return this.name;
  }

  getLastName() {
    return this.lastName;
  }

  getBirthYear() {
    return this.birthYear;
  }

  ageThisYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - this.birthYear;

    return age;
  }

  addHobbie(hobbie){
    this.hobbies.push(hobbie);
  }

  removeHobbie(hobbie){
    const newHobbies = this.hobbies.filter(item => item !== hobbie);
    this.hobbies = newHobbies;
  }

  addSkill(skill){
    const skillName = skill.toLowerCase();
    this.skills.push(skillName);
  }

  removeSkill(skill){
    const index = this.skills.indexOf(skill);
    if(index >= 0) {
      this.skills.splice(index, 1);
    }
  }
}
  
class Lucas extends Person {
  myFullName() {
    if(this.name && this.lastName){
      return `My full name is ${this.name} ${this.lastName}`;
    }

    return 'Incomplete name!';
  }

  seeMyHobbies() {
    if(this.hobbies.length === 0){
      return 'Hobbies not found';
    }

    let allHobbies = '';    
    this.hobbies.forEach((hobbie, index) => allHobbies += `${index + 1} -> ${hobbie}\n`);

    return allHobbies;
  }

  skillCheck(skill) {
    const skillName = skill.toLowerCase();

    if(this.skills.includes(skillName)) {
      return `I have this skill: ${skillName}`;
    }

    return "I don't have this skill";
  }

  myPresentation() {
    let presentation = `Hello! This year i will be ${this.ageThisYear()} years old, my gender is ${this.gender}.\n`;

    if(this.name){
      presentation += `My name is ${this.name} ${this.lastName ? this.lastName: ''}.\n`;
    }

    if(this.hobbies.length > 0) {
      presentation += 'Some of my hobbies are:'
      this.hobbies.forEach((hobbie, index) => {
        presentation += `${index === 0 ? '' : ','} ${hobbie}`;
      })

      presentation += '.\n';
    }

    if(this.skills.length > 0) {
      presentation += 'Some of my skills are:'
      this.skills.forEach((skill, index) => {
        presentation += `${index === 0 ? '' : ','} ${skill}`;
      })

      presentation += '.\n';
    }

    return presentation;
  }
}

// Implementation example:

// Required (gender and birth year).
const lucas = new Lucas('male', 1998);
console.log(lucas.getGender());
console.log(lucas.getBirthYear());

// Name and last name.
lucas.setName('Lucas');
lucas.setLastName('Cunha');
console.log(lucas.myFullName());

// Age.
console.log(lucas.ageThisYear());

// Hobbies.
lucas.addHobbie('Play a game');
lucas.addHobbie('Travel');
lucas.removeHobbie('Play a game');
console.log(lucas.seeMyHobbies());

// Skills.
lucas.addSkill('HTML');
lucas.addSkill('CSS');
lucas.addSkill('JavaScript');
lucas.removeSkill('html')
console.log(lucas.skillCheck('css'));

// Presentation.
console.log(lucas.myPresentation());