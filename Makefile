install:
	npm ci

build:
	npm run build

start:
	npm start

lint:
	npx eslint .

deploy:
	npm run deploy

.PHONY: build
