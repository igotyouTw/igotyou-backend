import os
import channels

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "realtime.settings.base")
channel_layer = channels.asgi.get_channel_layer()

