const app = require('../../app')
const request = require('supertest')

describe("Index router", () => {
  describe("GET /",  () => {
    it("returns with success", async () => {
      const response = await request(app)
        .get('/')
        .send()
        .expect(200)
      expect(response.body).toEqual({
        msg: 'OK'
      })
    })
  })

  
  describe("GET /jokenpo", () => {

      it("returns empate if papel and papel are given", async () => {
          const response = await request(app)
            .get('/jokenpo?player1=papel&player2=papel')
            .send()
            .expect(200)
          expect(response.body).toEqual({
            result: "empate"
          })
      })

      it("returns empate if pedra and pedra are given", async () => {
        const response = await request(app)
          .get('/jokenpo?player1=pedra&player2=pedra')
          .send()
          .expect(200)
        expect(response.body).toEqual({
          result: "empate"
        })
    })
      
      it("returns papel if papel and pedra are given", async () => {
          const response = await request(app)
            .get('/jokenpo?player1=papel&player2=pedra')
            .send()
            .expect(200)
          expect(response.body).toEqual({
            result: "papel"
          })
      })

      it("returns papel if pedra and papel are given", async () => {
        const response = await request(app)
          .get('/jokenpo?player1=pedra&player2=papel')
          .send()
          .expect(200)
        expect(response.body).toEqual({
          result: "papel"
        })
    })
      
  })

})


// GET /jokenpo?player1=pedra&player2=papel
// {
//    "result": "papel"
// }