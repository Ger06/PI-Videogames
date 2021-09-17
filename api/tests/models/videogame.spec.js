const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('Videogame', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', async () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
      it('should throw error if description is null', (done) => {
        Videogame.create({description: 'Mario do something'})
          .then(()=> done(new Error('It requires valid description')))
          .catch(()=> done());
      });
      it('should work when both name and description are valid', async () => {
        Videogame.create({ name: 'Super Mario Bros', description: 'Mario limpia cañerias' });
      });
      it('should throw error if platforms is null', (done) => {
        Videogame.create({platforms: 'playstation'})
          .then(()=> done(new Error('Platforms is required')))
          .catch(()=> done());
      });
      it('should work when name, description, platforms are valid', async () => {
        Videogame.create({ name: 'Super Mario Bros', description: 'Mario limpia cañerias', platforms: 'Playstation' });
      });
    });
  });
});


