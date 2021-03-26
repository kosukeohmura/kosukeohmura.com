#!/bin/bash

set -ue -o pipefail

dir="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

now=$(date -u '+%Y%m%d%H%M')
posted_at=$(date -u '+%Y-%m-%dT%H:%M:00Z')

most_recent=$(ls -1 "$dir"/content/blog | tail -1)

mv "$dir"/content/blog/"$most_recent" "$dir"/content/blog/$now
sed -i '' "s/^date: \"[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}T[0-9]\{2\}:[0-9]\{2\}:[0-9]\{2\}Z\"$/date: \"$posted_at\"/" "$dir"/content/blog/"$now"/index.md

echo renamed "$dir"/content/blog/"$most_recent"/index.md to "$dir"/content/blog/"$now"/index.md
