import Appointment from "./appointment.model";
import Client from "./client.model";
import Service from "./service.model";

interface Barber{
    id: number | null;
    name: string;
    username:string;
    color: string;
    password: string;
    appointments: Array<Appointment> | null;
    services: Array<Service> | null;
    clients: Array<Client> | null;
}

export default Barber;