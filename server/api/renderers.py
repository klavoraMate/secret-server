from rest_framework.renderers import JSONRenderer, BaseRenderer
from xml.etree.ElementTree import Element, tostring


class XMLRenderer(BaseRenderer):
    """XMLRenderer is a custom renderer class that extends the BaseRenderer class from Django Rest Framework.
    It is used to render the response data into XML format.
    """
    media_type = 'application/xml'
    format = 'xml'

    def render(self, data, media_type=None, renderer_context=None):
        """This method is used to convert the response data into XML format.

        Parameters:
        data (dict): The response data to be rendered.
        media_type (str, optional): The media type of the response. Defaults to None.
        renderer_context (dict, optional): Extra context provided by the view. Defaults to None.

        Returns:
        str: The response data rendered into XML format.
        """
        root = Element('Secret')
        for key,value in data.items():
            child = Element(key)
            child.text = str(value)
            root.append(child)
        xml_str = tostring(root, encoding='unicode')
        xml_str = '<?xml version="1.0" encoding="UTF-8"?>\n' + xml_str
        return xml_str


class JSONRenderer(JSONRenderer):
    """JSONRenderer is a custom renderer class that extends the JSONRenderer class from Django Rest Framework.
    It is used to render the response data into JSON format.
    """
    media_type = 'application/json'
    format = 'json'
