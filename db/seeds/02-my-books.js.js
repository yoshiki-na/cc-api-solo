/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("table_name").del();
  await knex("books").insert([
    {
      id: 6,
      name: "ダイヤのA",
      genre: "sports",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "高校野球マンガ。相手校含め、登場するメインキャラアツすぎる。個人的にはACTⅡの方が沢村が強くなってて好き。推しキャラは御幸、成宮、真田",
    },
    {
      id: 7,
      name: "ベイビーステップ",
      genre: "sports",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "テニスマンガ。高校からテニスを始めて3年で世界トップランカーを倒すという、現実的にはありえない快進撃だが、差し引いても面白い。推しキャラはタクマさんとなっちゃん",
    },
    {
      id: 8,
      name: "Giant Killing",
      genre: "sports",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "サッカー監督マンガ。スターが怪我で引退して監督に就任するところからスタート。飄々としている性格だが、かわすところと締めるところのメリハリは尊敬不可避。あと金言が多すぎる。ジャイキリ金言まとめをつくりたいぐらい。推しキャラは達海さん、椿、ジーノ",
    },
    {
      id: 9,
      name: "宇宙兄弟",
      genre: "home",
      recommender_name: "Tsubasa Kouta",
      recommender_memo:
        "実家の田んぼの整地問題から、家族に「Home」を教えてもらった作品（39巻より）。Code Chrysalisが我々のHOMEになるか…",
    },
    {
      id: 10,
      name: "信じていた仲間達にダンジョン奥地で殺されかけたがギフト『無限ガチャ』でレベル9999の仲間達を手に入れて元パーティーメンバーと世界に復讐＆『ざまぁ！』します",
      genre: "tensei",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "最近はやりの転生系マンガ。超強い相手が超強そうに登場してくるが、主人公サイドに手も足も出ずボコられるのがおもろい。推しキャラはメイ",
    },
    {
      id: 11,
      name: "僕以外全員転生者かよ",
      genre: "tensei",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "転生系マンガ。転生系でありがちの復讐・無双系と思いきや、超ギャグ系。連載終了してしまったのが残念すぎる。推しキャラは げぺ丸（下の子に激似w）",
    },
    {
      id: 12,
      name: "追放されたチート付与魔術師は気ままなセカンドライフを謳歌する。～俺は武器だけじゃなく、あらゆるものに『強化ポイント』を付与できるし、俺の意思でいつでも効果を解除できるけど、残った人たち大丈夫？～",
      genre: "munou",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "最近はやりの「無能を追放したら実は最強だった」系マンガ。マジメに冒険する気がなく全力のギャグがマジでおもろい。手抜き風の絵も味があるというか強みとして活かしてきてる。と思いきやガチマジメパートもあり侮れない。推しキャラはエルシー",
    },
    {
      id: 13,
      name: "のだめカンタービレ",
      genre: "music",
      recommender_name: "Yoshiki Nakamura",
      recommender_memo:
        "音楽系ギャグマンガ。ギャグと音楽のバランスがよく、最近はYouTubeで曲が聞けるのでクラシックの教養としてもよき（昔はなかった…）。人生で唯一ドラマをちょっと見た作品。推しキャラは千明先輩（玉木宏）",
    },
  ]);
};
