"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userNameSchema } from "@/app/lib/validators";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { updateUsername } from "@/actions/users";
import { BarLoader } from "react-spinners";
import { getLatestUpdates } from "@/actions/dashboard";
import { format } from "date-fns";

interface UpcomingMeeting {
  id: string;
  eventId: string;
  userId: string;
  name: string;
  email: string;
  additionalInfo: string;
  startTime: Date;
  endTime: Date;
  meetLink: string;
  googleEventId: string;
  createdAt: Date;
  updatedAt: Date;
  event: {
    title: string;
  };
}

const Dashboard = () => {
  const { isLoaded, user } = useUser();
  const [origin, setOrigin] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userNameSchema),
  });

  useEffect(() => {
    setValue("username", user?.username);
  }, [isLoaded]);

  useEffect(() => {
    // Safely set the origin in the client environment
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const { loading, error, fn: fnUpdateUsername } = useFetch(updateUsername);

  const onSubmit = async (data: any) => {
    fnUpdateUsername(data.username);
  };

  const { loading: loadindUpdates, data: UpcomingMeetings, fn: fnUpdates } = useFetch(getLatestUpdates);

  useEffect(() => {
    (async () => await fnUpdates())();
  }, []);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName}</CardTitle>
        </CardHeader>
        {/* Latest Updates */}
        <CardContent>
          {!loadindUpdates ? (
            <div>
              {UpcomingMeetings && UpcomingMeetings.length > 0 ? (
                <ul>
                  {UpcomingMeetings.map((meeting: UpcomingMeeting) => (
                    <li key={meeting.id}>
                      - {meeting.event.title} on {format(new Date(meeting.startTime), "MMM d, yyyy h:mm a")} with {meeting.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No upcoming meetings</p>
              )}
            </div>
          ) : (
            <p>Loading Updates</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span>{origin}</span>
                <Input {...register("username")} placeholder="username" />
              </div>

              {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message as string}</p>}
              {error && <p className="text-sm text-red-500 mt-1">{error?.message}</p>}
            </div>
            {loading && <BarLoader color="#2563EB" className="mb-4" width={"100%"} />}
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
