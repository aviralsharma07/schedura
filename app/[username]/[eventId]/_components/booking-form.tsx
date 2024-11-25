"use client";
import { bookingSchema } from "@/app/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Event } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface DataProps {
  name: string;
  email: string;
  date: string;
  time: string;
  additionalInfo: string;
}

type AvailabilitySlot = {
  date: string; // Date in "yyyy-MM-dd" format
  slots: string[]; // Array of available time slots in "HH:mm" format
};

type BookingFormProps = {
  event: Event; // Prisma Event type
  availability: AvailabilitySlot[]; // Custom type for availability
};

const BookingForm = ({ availability }: BookingFormProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: zodResolver(bookingSchema),
  });

  const availableDays = availability.map((day) => new Date(day.date));

  const timeSlots = selectedDate ? availability.find((day) => day.date === format(selectedDate, "yyyy-MM-dd"))?.slots || [] : [];

  useEffect(() => {
    if (selectedDate) {
      setValue("date", format(selectedDate, "yyyy-MM-dd"));
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime) {
      setValue("time", selectedTime);
    }
  }, [selectedTime]);

  const onSubmit = async (data: DataProps) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-8 p-10 border bg-white">
      <div className="md:h-96 flex flex-col md:flex-row gap-5">
        <div className="w-full">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setSelectedTime(null);
            }}
            disabled={[{ before: new Date() }]}
            modifiers={{
              available: availableDays,
            }}
            modifiersStyles={{
              available: { background: "lightblue", borderRadius: 100 },
            }}
          />
        </div>
        <div className="w-full h-full md:overflow-scroll no-scrollbar">
          {selectedDate && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <Button key={slot} onClick={() => setSelectedTime(slot)} variant={selectedTime === slot ? "default" : "outline"}>
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedTime && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input {...register("name")} placeholder="Your Name" />
            {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
          </div>
          <div>
            <Input {...register("email")} placeholder="Your Email" type="email" />
            {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
          </div>
          <div>
            <Textarea {...register("additionalInfo")} placeholder="Additional Information" />
            {errors.additionalInfo && <p className="text-red-500 text-sm">{String(errors.additionalInfo.message)}</p>}
          </div>
          <Button>Schedule Event</Button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
