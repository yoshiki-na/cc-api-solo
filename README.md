# cc-api-solo

My first solo project

# about

仮：Recommended Manga Library（RML）
おすすめしたいマンガのタイトル、ジャンル、メモとおすすめした人をまとめた API

# DB 設計

- DB 名：rm_library
- テーブル名：books

* id increments, PK
* name varchar (100) , unique, notnull
* genre varchar (100), notnull
* recommender_name varchar (100), notnull
* recommender_memo varchar (255)

# エンドポイント設計

- GET /api/books - 本の一覧を取得し、JSON で返す（SELECT）
- POST /api/books - 本の一覧に JSON で渡した body を追加（INSERT）
- PUT /api/books/:idOrName - 対象の本の情報を、JSON で渡した body に一括更新（UPDATE）
- DELETE /api/books/:idOrName - 対象の本を一覧から削除（DELETE）

---

## 時間あれば

- GET /api/books/recommender/:name - 本の一覧から、特定の推薦者が推薦した本を抜粋し、JSON で返す（SELECT）
- PATCH /api/books/:idOrName - 対象の本の情報を、JSON で渡した body に部分更新（UPDATE）
