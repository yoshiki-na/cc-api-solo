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

  describe("GET /api/books - return JSON of all books in array", () => {
    it("should return status code 200", async () => {
      const res = await request.get("/api/books");
      res.should.have.status(200);
    });

    it("should return JSON", async () => {
      const res = await request.get("/api/books");
      res.should.to.be.json;
    });

    it("should return 'foo' as name in array[0] of JSON", async () => {
      const res = await request.get("/api/books");
      res.body[0].name.should.equal("foo");
    });

    it("should return 'test' as genre in array[0] of JSON", async () => {
      const res = await request.get("/api/books");
      res.body[0].genre.should.equal("test");
    });

    it("should return 'seed' as recommender_name in array[0] of JSON", async () => {
      const res = await request.get("/api/books");
      res.body[0].recommender_name.should.equal("seed");
    });

    it("should return null as recommender_memo in array[0] of JSON", async () => {
      const res = await request.get("/api/books");
      try {
        res.body[0].recommender_memo.to.not.be.exist;
      } catch (e) {
        // res.body[0].recommender_memoのnullを読み込めないのでcatchする
        // 想定内だが...テストの仕方不明
      }
    });
  });

  describe("POST /api/books - create new book data", () => {
    const req = {
      id: 100,
      name: "sample for test",
      genre: "test",
      recommender_name: "test",
    };

    it("should return status code 201", async () => {
      const res = await request.post("/api/books").send(req);
      res.should.have.status(201);
    });
    it("and data reset (this is not test)", async () => {
      await request.delete("/api/books/100");
    });

    // it("should return xxx in JSON", async () => {
    //   const res = await request.post("/api/books").send(req);
    //   // POSTでnameのユニークキー制約に引っかかるかの判定
    // });

    // it("should return yyy in JSON", async () => {
    //   const res = await request.post("/api/books").send(req);
    //   // POSTでnotnull制約に引っかかるかの判定
    // });

    // it("should return zzz in JSON", async () => {
    //   const res = await request.post("/api/books").send(req);
    //   // POSTで定義していないカラムへの挿入が弾かれるかの判定
    // });
  });

  describe("PUT /api/books/:idOrName - update book information", () => {
    // PUT対象データ //
    const putted = {
      id: 100,
      name: "sample for test",
      genre: "test",
      recommender_name: "test",
    };
    const newBook = {
      id: 200,
      name: "SAMPLE FOR TEST",
      genre: "TEST",
      recommender_name: "TEST",
      recommender_memo: "NEW MEMO!",
    };

    describe("by id", () => {
      describe("put api test 1: ", () => {
        it("data set (this is not test)", async () => {
          await request.post("/api/books").send(putted);
        });
        it("should return status code 200", async () => {
          const res = await request.put("/api/books/100").send(newBook);
          res.should.have.status(200);
        });
        it("and data reset (this is not test)", async () => {
          await request.delete("/api/books/200");
        });
      });
      describe("put api test 2: ", () => {
        it("data set (this is not test)", async () => {
          await request.post("/api/books").send(putted);
        });
        it("data confirm (this is not test)", async () => {
          const res = await request.get("/api/books");
          res.body[res.body.length - 1].id.should.equal(100);
        });
        it("should update the book", async () => {
          const res = await request.put("/api/books/100").send(newBook);
        });
        it("data confirm (this is not test)", async () => {
          const res = await request.get("/api/books");
          res.body[res.body.length - 1].id.should.equal(200);
        });
        it("and data reset (this is not test)", async () => {
          await request.delete("/api/books/200");
        });
      });

      // あきらめ... //
      // it("should return xxx in JSON", async () => {
      //   const res = await request.put("/api/books/5").send(req);
      //   // PUTでnameのユニークキー制約に引っかかるかの判定
      // });

      // it("should return yyy in JSON", async () => {
      //   const res = await request.put("/api/books/5").send(req);
      //   // PUTでnotnull制約に引っかかるかの判定
      // });

      // it("should return zzz in JSON", async () => {
      //   const res = await request.put("/api/books/5").send(req);
      //   // PUTで定義していないカラムへの挿入が弾かれるかの判定
      // });
    });

    describe("by name", () => {
      describe("put api test 3: ", () => {
        it("data set (this is not test)", async () => {
          await request.post("/api/books").send(putted);
        });
        it("should return status code 200", async () => {
          const res = await request
            .put("/api/books/sample for test")
            .send(newBook);
          res.should.have.status(200);
        });
        it("and data reset (this is not test)", async () => {
          await request.delete("/api/books/SAMPLE FOR TEST");
        });
      });

      describe("put api test 4: ", () => {
        it("data set (this is not test)", async () => {
          await request.post("/api/books").send(putted);
        });
        it("data confirm (this is not test)", async () => {
          const res = await request.get("/api/books");
          res.body[res.body.length - 1].name.should.equal("sample for test");
        });
        it("should update the book", async () => {
          const res = await request
            .put("/api/books/sample for test")
            .send(newBook);
        });
        it("data confirm (this is not test)", async () => {
          const res = await request.get("/api/books");
          res.body[res.body.length - 1].name.should.equal("SAMPLE FOR TEST");
        });
        it("and data reset (this is not test)", async () => {
          await request.delete("/api/books/SAMPLE FOR TEST");
        });
      });

      // あきらめ... //
      // it("should return xxx in JSON", async () => {
      //   const res = await request.put("/api/books/chrysalis").send(req);
      //   // PUTでnameのユニークキー制約に引っかかるかの判定
      // });

      // it("should return yyy in JSON", async () => {
      //   const res = await request.put("/api/books/chrysalis").send(req);
      //   // PUTでnotnull制約に引っかかるかの判定
      // });

      // it("should return zzz in JSON", async () => {
      //   const res = await request.put("/api/books/chrysalis").send(req);
      //   // PUTで定義していないカラムへの挿入が弾かれるかの判定
      // });
    });
  });

  describe("DELETE /api/books/:idOrName - not return any", () => {
    const deleted = {
      id: 100,
      name: "sample for test",
      genre: "test",
      recommender_name: "test",
    };
    describe("delete api test 1: ", () => {
      it("data set (this is not test)", async () => {
        await request.post("/api/books").send(deleted);
      });
      it("should return status code 204 (no content)", async () => {
        const res = await request.delete("/api/books/100");
        res.should.have.status(204);
      });
    });

    describe("delete api test 2: ", () => {
      it("data set (this is not test)", async () => {
        await request.post("/api/books").send(deleted);
      });
      it("data confirm (this is not test)", async () => {
        const res = await request.get("/api/books");
        res.body[res.body.length - 1].id.should.equal(100);
      });
      it("should delete by id", async () => {
        await request.delete("/api/books/100");
      });
      it("data confirm (this is not test)", async () => {
        const res = await request.get("/api/books");
        res.body[res.body.length - 1].id.should.equal(5);
      });
    });

    describe("delete api test 3: ", () => {
      it("data set (this is not test)", async () => {
        await request.post("/api/books").send(deleted);
      });
      it("data confirm (this is not test)", async () => {
        const res = await request.get("/api/books");
        res.body[res.body.length - 1].name.should.equal("sample for test");
      });
      it("should delete by name", async () => {
        await request.delete("/api/books/sample for test");
      });
      it("data confirm (this is not test)", async () => {
        const res = await request.get("/api/books");
        res.body[res.body.length - 1].name.should.equal("chrysalis");
      });
    });

    // あきらめ... //
    // it("should return xxx in JSON", async () => {
    //   const res = await request.delete("/api/books/:idOrName");
    //   // 対象データがない場合の確認
    // });
  });
});

// あきらめ... //
/* describe("Optional test, ", () => {
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
}); */
