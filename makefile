# This makefile was auto-generated by Quickstart. You are free to modify it as you please.
# To find out more about Make, visit https://www.gnu.org/software/make/

sass:
	sass ./scss/bootstrap.scss ./public/css/styles.css

sass-min:
	sass ./scss/bootstrap.scss ./public/css/styles.css --style compressed

lint:
	npx eslint "*/**/*.{js,jsx,ts,tsx}"
	npx stylelint "*/**/*.{scss,css}"

lint-fix:
	npx eslint "*/**/*.{js,jsx,ts,tsx}" --fix
	npx stylelint "*/**/*.{scss,css}" --fix

build:
	npm run-script build
