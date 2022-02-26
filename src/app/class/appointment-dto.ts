import { BarberShopModel } from "./barber-shop-model";
import { UserModel } from "./user-model";

export class AppointmentDTO {
    id!: number;
    timeSelected!: Date;
    dateSelected!: Date;
    status! : string;
    barbershopModel! : BarberShopModel;
    customerModel! : UserModel;
    hairdresserModel! : UserModel
}
