import Appointment from "./appointment.model";
import Barber from "./barber.model";

export default interface Client{
    id: number | null;
    name: string;
    appointment: Array<Appointment>;
    barber: Barber;
    amount: number;
}