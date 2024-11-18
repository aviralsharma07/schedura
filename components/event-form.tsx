"use client";
import { eventSchema } from "@/app/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { createEvent } from "@/actions/events";
import useFetch from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";

type EventFormData = z.infer<typeof eventSchema>;

interface EventFormProps {
  onSubmitForm: () => void;
}

const EventForm = ({ onSubmitForm }: EventFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      duration: 30,
      isPrivate: true,
    },
  });

  const { loading, error, fn: fnCreateEvent } = useFetch(createEvent);
  const onSubmit = async (data: any) => {
    await fnCreateEvent(data);
    if (!loading && !error) onSubmitForm();
    router.refresh();
  };

  return (
    <form className="px-5 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Event Title
        </label>
        <Input id="title" {...register("title")} className="mt-1" />
        {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message as string}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Event Description
        </label>
        <Input id="title" {...register("description")} className="mt-1" />
        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message as string}</p>}
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Event Duration (minutes)
        </label>
        <Input
          id="title"
          {...register("duration", {
            valueAsNumber: true,
          })}
          type="number"
          className="mt-1"
        />
        {errors.duration && <p className="text-sm text-red-500 mt-1">{errors.duration.message as string}</p>}
      </div>

      <div>
        <label htmlFor="isPrivate" className="block text-sm font-medium text-gray-700">
          Event Privacy
        </label>
        <Controller
          name="isPrivate"
          control={control}
          render={({ field }) => (
            <Select value={field.value ? "true" : "false"} onValueChange={(value) => field.onChange(value === "true")}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Private</SelectItem>
                <SelectItem value="false">Public</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.isPrivate && <p className="text-sm text-red-500 mt-1">{errors.isPrivate.message as string}</p>}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <Button type="submit" disabled={loading!}>
        {loading ? "Submitted..." : "Create Event"}
      </Button>
    </form>
  );
};

export default EventForm;
