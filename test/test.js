const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../server");
const { describe, beforeEach, it } = require("node:test");
chai.should();
chai.use(chaiHttp);

describe("API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/books - return JSON of all books", () => {
    it("should return status code 200", async () => {
      const res = await request.get("/api/books");
      res.should.have.status(200);
    });

    it("should return JSON", async () => {
      const res = await request.get("/api/books");
      //JSONの判定
    });

    it("should return xxx in JSON", async () => {
      const res = await request.get("/api/books");
      // JSONの中身の確認
    });

    it("should return yyy in JSON", async () => {
      const res = await request.get("/api/books");
      // JSONの中身の確認
    });

    it("should return zzz in JSON", async () => {
      const res = await request.get("/api/books");
      // JSONの中身の確認
    });
  });
});
