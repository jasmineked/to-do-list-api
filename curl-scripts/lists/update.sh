#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists/:id"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "list": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "tasks": "'"${TASK}"'"
    }
  }'

echo
