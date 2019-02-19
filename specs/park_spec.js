const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dinosaurs

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Velociraptor', 'omnivore', 40);
    dino3 = new Dinosaur('Diplodocus', 'herbivore', 60);

    dinosaurs = [dino1, dino2, dino3]
    park = new Park('Jurrasic Park', 25, dinosaurs);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticket;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function() {
    dino = new Dinosaur('Diplodocus', 'herbivore', 50);
    park.addDino(dino);
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDino();
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, 'Diplodocus');
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findSpecies('t-rex');
    assert.deepStrictEqual(actual, dino1);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    const actual = park.removeSpecies('t-rex');
    assert.strictEqual(actual.length, 2);
  });

  it('Calculate the total number of visitors per day', function() {
    const actual = park.totalVisitADay();
    assert.strictEqual(actual, 150);
  });

  it('Calculate the total number of visitors per year', function() {
    const actual = park.totalVisitAYear();
    assert.strictEqual(actual, 54750);
  });

  it('Calculate the total revenue from ticket sales for one year', function() {
    const actual = park.totalSales();
    assert.strictEqual(actual, 1368750);
  });

});
