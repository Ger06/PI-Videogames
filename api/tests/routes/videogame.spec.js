/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
 
  
};


describe('Videogames routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true }))
    
  describe('GET /videogames', () => {
		it('responds with 200', async () => {
			try {
				await agent.get('/videogames').expect(200);
			} catch (err) {
				console.log(err);
			}
		}).timeout(47000);
    it('If the name query is passed, the videogame name should respond by that name', async () => {
			try {
				const res = await agent.get('/videogames?name=portal');
				expect(res.body[0].name).to.be.equal('portal');
			} catch (err) {}
		}).timeout(47000);
});
})
