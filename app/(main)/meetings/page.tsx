import { getUserMeetings } from "@/actions/meetings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { Suspense } from "react";
import MeetingList from "./_components/meeting-list";

export const metadata = {
  title: "Your Meetings | Schedura",
  descripiton: "View and manage all your upcoming meetings and appointments",
};

const MeetingPage = () => {
  return (
    <Tabs defaultValue="upcoming">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">
        <Suspense fallback={<div>Loading Upcoming Meetings</div>}>
          <UpcomingMeetings />
        </Suspense>
      </TabsContent>
      <TabsContent value="past">
        <Suspense fallback={<div>Loading Past Meetings</div>}>
          <PastMeetings />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

async function UpcomingMeetings() {
  const meetings = await getUserMeetings("upcoming");
  return <MeetingList meetings={meetings} type="upcoming" />;
}

async function PastMeetings() {
  const meetings = await getUserMeetings("past");
  return <MeetingList meetings={meetings} type="past" />;
}

export default MeetingPage;
