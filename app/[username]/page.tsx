import { getUserByUsername } from "@/actions/users";
import EventCard from "@/components/event-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }: { params: { username: string } }) {
  const user = await getUserByUsername(params.username);
  if (!user) {
    return {
      title: "User not found",
      description: "The user you are looking for does not exist",
    };
  }

  return {
    title: `${user.name}'s Profile Page | Schedura`,
    description: `Welcome to ${user.name}'s scheduling page. Select an event below to book a call with them.`,
    image: user.imageUrl,
  };
}

const UserPage = async ({ params }: { params: { username: string } }) => {
  const { username } = params;
  const user = await getUserByUsername(username);
  if (!user) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={user.imageUrl!} alt={user.name!} />
          <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
        </Avatar>

        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600 text-center">Welcome to my Scheduling page. Please select an event below to book a call with me.</p>
      </div>

      {user.events.length === 0 ? (
        <p className="text-center text-gray-600">No public events available</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {user.events.map((event) => (
            <EventCard key={event.id} event={event} username={params.username} isPublic />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPage;
