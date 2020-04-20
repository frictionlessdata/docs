.PHONY: templates


LEAD := $(shell head -n 1 LEAD.md)


all: list

install:
	pip install -r requirements.txt

readme:
	pip install md-toc
	md_toc -p README.md github --header-levels 3
	sed -i '/(#frictionless-data-implementations)/,+1d' README.md

repos:
	python scripts/repos.py

templates:
	sed -i -E "s/@(\w*)/@$(LEAD)/" .github/issue_template.md
	sed -i -E "s/@(\w*)/@$(LEAD)/" .github/pull_request_template.md

status:
	python scripts/status.py > STATUS.md

teams:
	python scripts/teams.py > TEAMS.md
