#!/bin/bash

dir="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

now=$(date '+%Y%m%d%H%M')
posted_at=$(date '+%Y-%m-%d %H:%M +0900')

mkdir content/blog/$now
cat - << EOS > content/blog/$now/index.md
---
title: ""
date: "$posted_at"
description: ""
image: ""
---
EOS

echo created "$dir"/content/blog/$now/index.md
