---
title: "Gatsby の GraphQL で日時が UTC 表記になる"
date: "2021-03-04T12:29:00Z"
description: ""
image: ""
---

Gatsby の GraphQL で使える日時フォーマット関数が UTC での日時文字列を返却しており困った話。

## 概要

日本時間の朝 8:58 に公開した記事の公開日が前日の日付で表示されている事に気づいた。一方で記事の URL Path は日本時間での公開日時になっており、ブログ内でのタイムゾーンが一貫してないことに気づき、困った。

## なぜ

Gatsby の GraphQL では `date` をフォーマットする `formatString` という関数が使えて、それをこのブログ内の日付表示で使っている。日時は `2021-03-04 08:58 +0900` のようなタイムゾーン付きの形式で渡っているので日本時間の日付文字列が出力されると思い込んでいたが、そんなことはなかったのだった。

## このブログは UTC でいきます

日本時間に統一されるようにしようかと思ったが、別に JST にこだわる必要ないよね、と開き直って UTC に統一することにした。コミットは[こちら](https://github.com/kosukeohmura/kosukeohmura.com/commit/14ff90c8dd41435bca2557bc6fe6c529f9ba6f86)。記事のテンプレを生成する簡単なシェルスクリプトを少し修正しただけ。

### 参考

ギークハウスのときの知り合いの種さんも同じことに困っていた。

- [GatsbyのGraphQLでformatStringは使うべきではない](https://mtane0412.com/gatsby-graphql-formatstring-problem/)
- [GraphQL Query Options Reference | Gatsby](https://www.gatsbyjs.com/docs/graphql-reference/#dates)
