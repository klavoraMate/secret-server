#!/usr/bin/env bash
cd server

set -o errexit

poetry install

python manage.py migrate