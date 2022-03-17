# kyiv
A data scraping server for serving any helpful links

## backlog
- [x] skeleton
- [ ] ci/cd deploy to cloud; get running url
- [ ] mvp of data files in json file
- [ ] /api/v1/ endpoint, authentication

## tech stack
List of techs we decided on. If you want to add, please discuss in the channel.

- node.js
- express.js

## data

### storage
- v1 - simple json file
- v2 - db; possibly airtable

### schema
- title: string
- description: string
- keywords: list of strings
- summary: string
- url: list of strings
- location: string (just country/city name for now)

### keywords
- food
- transportation
- short term shelter
- long term shelter
- medical advice
- legal advice
- general advice

### API

```
GET /api/v1/topics
[
  "ukraine refugees",
  "darfur refugees",
]
```

```
GET /api/v1/keywords
GET /api/v1/keywords?topic="ukraine refugees"
[
  "food",
  "transportation",
  "short term shelter",
  "long term shelter",
  "medical advice",
  "legal advice",
  "general advice"
]
```

```
GET /api/v1/advice?topic=ukraine&keywords=food,transportation&location=kiyv
[
  {
  },
  {
  }
]
```
