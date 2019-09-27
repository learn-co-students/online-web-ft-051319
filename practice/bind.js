class Fundraiser {
  constructor(name){
    this.name = name
    this.donations = 0
  }

  makeDonation(amount){
    console.log(this);
    this.donations += amount
    return this.donations
  }

  recruitVolunteer(volObj){
    volObj.collectDonation = this.makeDonation.bind(this)
    return volObj
  }
}

class Component {
  constructor(props){
    this.props = props
  }
}



// let chris = new Volunteer("Chris")
// let school = new Fundraiser("School Fundraiser")
//
// school.recruitVolunteer(chris)
//
// console.log(chris);



// const cancerFundraiser = {
//   name: "Cancer Fundraiser",
//   totalDonations: 0,
// }
//
// function donate(amount){
//   this.totalDonations += amount
//   console.log(this);
// }

//donate.apply(cancerFundraiser, [450])
//takes in an array

//donate.call(cancerFundraiser, 450)
//no array

//let donateToCancer = donate.bind(cancerFundraiser)
//saving to a variable, not invoking it
