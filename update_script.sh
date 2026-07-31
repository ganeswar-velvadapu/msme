#!/usr/bin/env bash

set -e

sudo systemctl stop msme.service
rm -rf .next
pnpm build
sudo systemctl restart msme.service
