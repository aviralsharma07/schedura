import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar, Clock, Video } from "lucide-react";
import React from "react";

type Meeting = {
  id: string;
  eventId: string;
  userId: string;
  name: string;
  email: string;
  additionalInfo: string | null; // No null as per your example
  startTime: Date;
  endTime: Date;
  meetLink: string;
  googleEventId: string;
  createdAt: Date;
  updatedAt: Date;
  event: {
    id: string;
    title: string;
    description: string | null; // Allow null for optional descriptions
    duration: number;
    userId: string;
    isPrivate: boolean;
    createdAt: Date;
    updatedAt: Date;
    user: {
      name: string | null; // Allow null for optional names
      email: string;
    };
  };
};

interface MeetingListProps {
  meetings: Meeting[]; // Array of meetings
  type: "upcoming" | "past"; // Restrict type to specific strings
}

const MeetingList = ({ meetings, type }: MeetingListProps) => {
  if (meetings.length === 0) {
    return <p>No {type} meetings found.</p>;
  }
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {meetings.map((meeting) => (
        <Card key={meeting.id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{meeting.event.title}</CardTitle>
            <CardDescription>with {meeting.name}</CardDescription>
            <CardDescription>&quot;{meeting.additionalInfo}&quot;</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{format(new Date(meeting.startTime), "MMMM d,yyyy")}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 h-4 w-4" />
              <span>
                {format(new Date(meeting.startTime), "h:mm a")} - {format(new Date(meeting.endTime), "h:mm a")}
              </span>
            </div>
            {meeting.meetLink && (
              <div className="flex items-center">
                <Video className="mr-2 h-4 w-4" />
                <a href={meeting.meetLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Join Meeting
                </a>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="destructive">Cancel meeting</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MeetingList;
