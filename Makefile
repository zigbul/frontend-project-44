install:
	npm ci

brain-games:
	brain-even
	brain-calc
	brain-gcd
	brain-progression
	brain-prime

publish:
	npm publish --dry-run

lint:
	npx eslint