import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, params) {
	const { cabinId } = params;

	try {
		const [cabin, bookedDates] = Promise.all([
			getCabin(cabinId),
			getBookedDatesByCabinId(cabinId),
		]);
		return Response.json({ cabin, bookedDates });
	} catch {
		return Response.json("Cabin is not found");
	}
}
