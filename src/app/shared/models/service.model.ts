import Appointment from "./appointment.model";
import Barber from "./barber.model";

export default interface Service{
    id: number | null;
    name: string;
    value: number;
    appointment: Array<Appointment> | null;
    barbers: Array<Barber>;
}