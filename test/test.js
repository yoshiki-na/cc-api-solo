const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../server");
const { describe, beforeEach, it } = require("node:test");
chai.should();
chai.use(chaiHttp);

describe("Required API server feature, ", () => {
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
      // JSONの判定
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

  describe("POST /api/books - create new book data", () => {
    it("should return status code 201", async () => {
      const res = await request.post("/api/books").send(req);
      res.should.have.status(201);
    });

    it("should return JSON", async () => {
      const res = await request.post("/api/books").send(req);
      // POSTで追加した本がJSON形式でGETで取れるかの判定
    });

    it("should return xxx in JSON", async () => {
      const res = await request.post("/api/books").send(req);
      // POSTでnameのユニークキー制約に引っかかるかの判定
    });

    it("should return yyy in JSON", async () => {
      const res = await request.post("/api/books").send(req);
      // POSTでnotnull制約に引っかかるかの判定
    });

    it("should return zzz in JSON", async () => {
      const res = await request.post("/api/books").send(req);
      // POSTで定義していないカラムへの挿入が弾かれるかの判定
    });
  });

  describe("PUT /api/books/:idOrName - update book information", () => {
    // PUT対象データ //
    // {
    //   id: 5,
    //   name: "chrysalis",
    //   genre: "test",
    //   recommender_name: "seed",
    //   recommender_memo: "CC研修",
    // },
    describe("by id", () => {
      it("should return status code 200", async () => {
        const res = await request.put("/api/books/5").send(req);
        res.should.have.status(200);
      });

      it("should return JSON", async () => {
        const res = await request.put("/api/books/5").send(req);
        // PUTで追加した本がJSON形式でGETで取れるかの判定
      });

      it("should return xxx in JSON", async () => {
        const res = await request.put("/api/books/5").send(req);
        // PUTでnameのユニークキー制約に引っかかるかの判定
      });

      it("should return yyy in JSON", async () => {
        const res = await request.put("/api/books/5").send(req);
        // PUTでnotnull制約に引っかかるかの判定
      });

      it("should return zzz in JSON", async () => {
        const res = await request.put("/api/books/5").send(req);
        // PUTで定義していないカラムへの挿入が弾かれるかの判定
      });
    });

    describe("by name", () => {
      it("should return status code 200", async () => {
        const res = await request.put("/api/books/chrysalis").send(req);
        res.should.have.status(200);
      });

      it("should return JSON", async () => {
        const res = await request.put("/api/books/chrysalis").send(req);
        // PUTで追加した本がJSON形式でGETで取れるかの判定
      });

      it("should return xxx in JSON", async () => {
        const res = await request.put("/api/books/chrysalis").send(req);
        // PUTでnameのユニークキー制約に引っかかるかの判定
      });

      it("should return yyy in JSON", async () => {
        const res = await request.put("/api/books/chrysalis").send(req);
        // PUTでnotnull制約に引っかかるかの判定
      });

      it("should return zzz in JSON", async () => {
        const res = await request.put("/api/books/chrysalis").send(req);
        // PUTで定義していないカラムへの挿入が弾かれるかの判定
      });
    });
  });

  describe("DELETE /api/books/:idOrName - not return any", () => {
    it("should return status code 204 (no content)", async () => {
      const res = await request.delete("/api/books/:idOrName");
      res.should.have.status(204);
    });

    it("should return JSON", async () => {
      const res = await request.delete("/api/books/:idOrName");
      // 対象データが削除されているかの確認
    });

    it("should return xxx in JSON", async () => {
      const res = await request.delete("/api/books/:idOrName");
      // 対象データがない場合の確認
    });
  });
});

describe("Optional test, ", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("PATCH /api/books/:idOrName - update book information, partially", () => {
    // PATCH対象データ //
    // {
    //   id: 5,
    //   name: "chrysalis",
    //   genre: "test",
    //   recommender_name: "seed",
    //   recommender_memo: "CC研修",
    // },
    describe("by id", () => {
      it("should return status code 200", async () => {
        const res = await request.patch("/api/books/5").send(req);
        res.should.have.status(200);
      });

      it("should return JSON", async () => {
        const res = await request.patch("/api/books/5").send(req);
        // PATCHで追加した本がJSON形式でGETで取れるかの判定
      });

      it("should return xxx in JSON", async () => {
        const res = await request.patch("/api/books/5").send(req);
        // PATCHでnameのユニークキー制約に引っかかるかの判定
      });

      it("should return yyy in JSON", async () => {
        const res = await request.patch("/api/books/5").send(req);
        // PATCHでnotnull制約に引っかかるかの判定
      });

      it("should return zzz in JSON", async () => {
        const res = await request.patch("/api/books/5").send(req);
        // PATCHで定義していないカラムへの挿入が弾かれるかの判定
      });
    });

    describe("by name", () => {
      it("should return status code 200", async () => {
        const res = await request.patch("/api/books/chrysalis").send(req);
        res.should.have.status(200);
      });

      it("should return JSON", async () => {
        const res = await request.patch("/api/books/chrysalis").send(req);
        // PATCHで追加した本がJSON形式でGETで取れるかの判定
      });

      it("should return xxx in JSON", async () => {
        const res = await request.patch("/api/books/chrysalis").send(req);
        // PATCHでnameのユニークキー制約に引っかかるかの判定
      });

      it("should return yyy in JSON", async () => {
        const res = await request.patch("/api/books/chrysalis").send(req);
        // PATCHでnotnull制約に引っかかるかの判定
      });

      it("should return zzz in JSON", async () => {
        const res = await request.patch("/api/books/chrysalis").send(req);
        // PATCHで定義していないカラムへの挿入が弾かれるかの判定
      });
    });
  });
});
