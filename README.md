# kyiv
A data scraping server for serving any helpful links

## backlog

### mvp
- [x] skeleton
- [ ] ci/cd deploy to cloud; get running url
- [ ] mvp of data files in json file
- [ ] /api/v1/ endpoint, authentication
- [ ] /api/v1/topics
- [ ] /api/v1/services
- [ ] /api/v1/advice

## tech stack
List of techs we decided on. If you want to add, please discuss in the channel.

- node.js
- express.js

## data

### storage
- v1 - simple json file
- v2 - db; possibly airtable

### schema
- uid: string
- title: string
- description: string
- services: list of strings
- summary: string
- url: list of strings
- location: string (just country/city name for now)
- service-area: "local"|"city"|"region"|"country"|"global"

### services
- food
- transportation
- short term shelter
- long term shelter
- medical advice
- legal advice
- general advice

### Sources
- https://www.medonet.pl/zdrowie,bezkoshtovna-medichna-pdtrimka-dlya-osb-z-ukrani--de-znaiti-dopomogu-,artykul,69290573.html
- https://eurodesk.eu/2022/03/04/information-for-ukraine/
- https://foodtank.com/news/2022/03/organizations-providing-relief-in-ukraine/


### API
```
GET /api/v1/topics
[
  "ukraine-refugees",
  "darfur-refugees",
]
```

```
GET /api/v1/services
GET /api/v1/services?topic="ukraine refugees"
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
GET /api/v1/advice?topic=ukraine-refugees&keywords=transportation&location=kiyv
[
  {
  },
  {
  }
]
```

```
PUT /api/v1/translate
TBD
```

```
```

