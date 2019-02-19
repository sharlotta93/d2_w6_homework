const Park = function (name, ticket, dinosaurs) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function(dino) {
  this.dinosaurs.push(dino)
}

Park.prototype.removeDino = function() {
  this.dinosaurs.pop()
}

Park.prototype.mostPopularDino = function() {
  let maxNumber = 0
  let maxDino
  for (let dino of this.dinosaurs) {
    if (dino['guestsAttractedPerDay'] > maxNumber) {
      maxNumber = dino['guestsAttractedPerDay'];
      maxDino = dino;
    }
  }
  return maxDino.species;
}

Park.prototype.findSpecies = function(species) {
  for (let dino of this.dinosaurs) {
    if (dino.species === species) {
      return dino
    }
  }
}

Park.prototype.removeSpecies = function(species) {
  let arrayOfDinos = []
  for (let dino of this.dinosaurs) {
    if (dino.species != species) {
       arrayOfDinos.push(dino);
    }
  }
  return arrayOfDinos;
}

Park.prototype.totalVisitADay = function() {
  let total = 0;
  for (let dino of this.dinosaurs) {
    total += dino['guestsAttractedPerDay']
    }
  return total
}

Park.prototype.totalVisitAYear = function() {
  let total = this.totalVisitADay() * 365;
  return total;
}
Park.prototype.totalSales = function() {
  let total = this.totalVisitAYear() * 25;
  return total;
}

Park.prototype.speciesCount = function() {
  let arr = this.dinosaurs;
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let dino = arr[i].diet;
    counts[dino] = counts[dino] ? counts[dino] + 1 : 1;
  }
 return counts;
}



module.exports = Park;
