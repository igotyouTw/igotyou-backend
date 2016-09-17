from django.shortcuts import render, redirect
from django.db import transaction
import haikunator

from .models import Room

def about(request):
    return render(request, "chat/about.html")

def new_room(request):
    """
    Randomluy create a new room, and redirect to it.
    """
    new_room = None
    while not new_room:
        with transaction.atomic():
            label = haikunator.haikunate()
            if Room.objects.filter(label=label).exists():
                continue
        new_room = Room.objects.create(label=label)
    return redirect(chat_room, label=label)

def chat_room(request, label):
    """
    Room view - show the room, with latest messages.

    The template for this view has the business to send and stream
    messages, so see the templates for where the magic happen.
    """
    # If the room with the given label doesn't exist, automatically create if
    # upon first visit.
    room, created = Room.objects.get_or_create(label=label)

    # We want to show the last 50 messages, ordered most-recent-last
    messages = reversed(room.messages.order_by('-timestamp')[:50])

    return render(request, "chat/room.html", {
        'room': room,
        'messages': messages
    })

