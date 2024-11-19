"use client";

import { DAYS_OF_WEEK } from "@/app/lib/constants";
import { availabilitySchema } from "@/app/lib/validators";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { timeSlots } from "../data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvailabilityFormValues } from "@/app/lib/types";
import { updateUserAvailability } from "@/actions/availability";
import useFetch from "@/hooks/use-fetch";

type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
type FieldPath = `${Day}.isAvailable` | `${Day}.startTime` | `${Day}.endTime` | "timeGap";
type ValueType = string | undefined;

const AvailabilityForm = ({ initialData }: { initialData: AvailabilityFormValues }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AvailabilityFormValues>({
    resolver: zodResolver(availabilitySchema),
    defaultValues: {
      ...initialData,
    },
  });
  const { fn: updateAvailability, loading, error } = useFetch(updateUserAvailability);
  const onSubmit = async (data: AvailabilityFormValues) => {
    await updateAvailability(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {DAYS_OF_WEEK.map((day) => {
        const isAvailable = watch(`${day}.isAvailable` as FieldPath);
        const dayErrors = errors[day as keyof typeof errors];
        const endTimeError = (dayErrors as Record<string, any>)?.endTime;

        return (
          <div key={day} className="flex items-center space-x-4 mb-4">
            <Controller
              name={`${day}.isAvailable` as FieldPath}
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    checked={field.value as boolean}
                    onCheckedChange={(checked) => {
                      setValue(`${day}.isAvailable` as FieldPath, checked);
                      if (!checked) {
                        setValue(`${day}.startTime` as FieldPath, "09:00");
                        setValue(`${day}.endTime` as FieldPath, "17:00");
                      }
                    }}
                  />
                );
              }}
            />

            <span className="w-24">{day.charAt(0).toUpperCase() + day.slice(1)}</span>

            {isAvailable && (
              <>
                <Controller
                  name={`${day}.startTime` as FieldPath}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Select onValueChange={field.onChange} value={field.value as ValueType}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Start Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
                <span>to</span>
                <Controller
                  name={`${day}.endTime` as FieldPath}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Select onValueChange={field.onChange} value={field.value as ValueType}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="End Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
                {endTimeError?.message && <span className="text-red-500 text-sm mt-1">{endTimeError.message}</span>}
              </>
            )}
          </div>
        );
      })}

      <div className="flex items-center space-x-4">
        <span className="w-48">Minimum gap before booking (minutes): </span>
        <Input
          type="number"
          {...register("timeGap", {
            valueAsNumber: true,
          })}
          className="w-32"
        />
        {errors.timeGap && <span className="text-red-500 text-sm mt-1">{errors.timeGap.message}</span>}
      </div>

      {error && <span className="text-red-500 text-sm mt-1">{error?.message}</span>}
      <Button type="submit" className="mt-5" disabled={loading!}>
        {loading ? "Updating..." : "Update Availability"}
      </Button>
    </form>
  );
};

export default AvailabilityForm;
