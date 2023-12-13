from rest_framework.renderers import JSONRenderer, BaseRenderer
from xml.etree.ElementTree import Element, tostring


class XMLRenderer(BaseRenderer):
    media_type = 'application/xml'
    format = 'xml'

    def render(self, data, media_type=None, renderer_context=None):
        root = Element('Secret')
        for key,value in data.items():
            child = Element(key)
            child.text = str(value)
            root.append(child)
        xml_str = tostring(root, encoding='unicode')
        xml_str = '<?xml version="1.0" encoding="UTF-8"?>\n' + xml_str
        return xml_str


class JSONRenderer(JSONRenderer):
    media_type = 'application/json'
    format = 'json'
