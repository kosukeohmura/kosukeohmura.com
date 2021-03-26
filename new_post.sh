#!/bin/bash

set -ue -o pipefail

dir="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

now=$(date -u '+%Y%m%d%H%M')
posted_at=$(date -u '+%Y-%m-%dT%H:%M:00Z')

mkdir "$dir"/content/blog/$now
cat - << EOS > content/blog/$now/index.md
---
title: ""
date: "$posted_at"
description: ""
image: ""
---
EOS

echo created "$dir"/content/blog/$now/index.md
