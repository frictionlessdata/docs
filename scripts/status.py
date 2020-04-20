import yaml
from jinja2 import Template


# Helpers

def render_status():
    status = read_data('status')
    with open('scripts/status.md') as file:
        template = Template(file.read())
        document = template.render(status=status)
        print(document)


def read_data(name):
    with open('scripts/%s.yml' % name) as file:
        return list(yaml.safe_load_all(file))[0]

# Main

if __name__ == '__main__':
    render_status()
