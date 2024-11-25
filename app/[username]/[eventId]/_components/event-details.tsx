import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Event } from "@prisma/client";
import { Calendar, Clock } from "lucide-react";
import React from "react";

type EventWithUser = Event & {
  user: {
    name: string | null;
    username: string | null;
    email: string;
    imageUrl: string | null;
  };
};

const EventDetails = ({ event }: { event: EventWithUser }) => {
  const { user } = event;
  return (
    <div className="p-10 lg:w-1/3 bg-white">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <div className="flex items-center mb-4">
        <Avatar className="w-12 h-12 mr-4">
          <AvatarImage src={user.imageUrl!} alt={user.name!} />
          <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
        </div>
      </div>

      <div className="flex items-center mb-2">
        <Clock className="mr-2" />
        <span>{event.duration} minutes</span>
      </div>
      <div className="flex items-center mb-4">
        <Calendar className="mr-2" />
        <span>Google Meet</span>
      </div>
      <p className="text-gray-700">{event.description}</p>
    </div>
  );
};

export default EventDetails;
