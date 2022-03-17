# kyiv
A data scraping server for serving any helpful links

## backlog
- [x] skeleton
- [ ] ci/cd deploy to cloud; get running url
- [ ] mvp of data files in json file

## tech stack
List of techs we decided on. If you want to add, please discuss in the channel.

- node.js
- express.js

## data

### storage
- v1 - simple json file

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
