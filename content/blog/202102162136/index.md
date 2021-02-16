---
title: "Gatsby でブログを作った"
date: "2021-02-16 21:36 +0900"
description: ""
image: ""
---

気軽に書ける自分のブログが欲しくなって [Gatsby](https://www.gatsbyjs.com/) でブログを作った。これまでは[はてなブログでブログを書いていて](https://bnpb.hatenablog.com/)、大体は満足していたのだけど、独自ドメインにするのにコストがかかるのと、[r7kamura.com](https://r7kamura.com/) や [ishkawa.org](https://ishkawa.org/) のような非常にシンプルなブログを持つことに少し憧れていたので、頑張って自分のブログを作ることにした。このところアウトプットをろくにせず生きているので、これを機にブログを書くようになると良いなと思っている。

## Gatsby を選ぶまで

最初はスマホの Notion アプリからも更新できるように [Notion Blog](https://github.com/ijjk/notion-blog) を使って作っていたけど、仕組み上 Notion での見た目が再現されない場合があることと、内部的に Notion のプライベート API を使っているので安定した運用が難しいと感じたことから途中で止めた。

スマホでの投稿は諦めるとして、Markdown からブログをいい感じに生成してくれる、静的サイトジェネレータとして Gatsby を選んだ。[Hugo](https://gohugo.io/) と迷ったが、困ったら JS でゴリ押しできるのと、普段触れない React や GraphQL といった技術に軽く触れたかったのが理由。Starter には [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) を選んだ。Contributor の [@kylemathews
](https://twitter.com/kylemathews) の bio に Gatsby の Founder だと書いてあったので、信頼できそうと思った。

## 少しカスタマイズしてみて

Starter を自分好みの見た目にするためにちょっといじった。GraphQL ではこういうクエリを書くんだな、とか、JS や CSS の書き方を見てなるほどと思った。あまりドキュメントも読まず雰囲気で作業してしまったので、そのへんは追って理解していきたい。

自分の経験として Web フロントエンドに触ってはいるものの、HTML や CSS はデザイナーからもらい、そこにロジックを入れこむ仕事が多かったので、思うような見た目にするのはそれなりに難しかった。

## ホスティング

これまで静的サイトの公開には GitHub Pages を使っていたけど、今回は Netlify を使ってみた。GitHub リポジトリと連携してあり、master ブランチに変更があったらデプロイされる。HTTPS 化まで簡単にできて満足している。

## ソースコード

[こちら](https://github.com/KosukeOhmura/kosukeohmura.com)に置いてあるので、気になる方は見てみてください。
