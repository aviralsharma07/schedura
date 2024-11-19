import { getUserAvailability } from "@/actions/availability";
// import { getUserAvailability } from "@/actions/jsAvailability";
import { defaultAvailability } from "./data";
import AvailabilityForm from "./_components/availability-form";

const AvailabilityPage = async () => {
  const availability = await getUserAvailability();
  return <AvailabilityForm initialData={availability || defaultAvailability} />;
};

export default AvailabilityPage;
