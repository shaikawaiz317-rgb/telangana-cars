import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    id: bigint;
    name: string;
    message: string;
    phone: string;
    timestampNanos: bigint;
}
export interface Car {
    id: bigint;
    zeroToSixty: string;
    name: string;
    description: string;
    imageUrl: string;
    brand: string;
    topSpeed: bigint;
    horsepower: bigint;
    engine: string;
}
export interface backendInterface {
    deleteInquiry(id: bigint): Promise<void>;
    getAllCars(): Promise<Array<Car>>;
    getAllInquiries(): Promise<Array<ContactForm>>;
    getCarById(id: bigint): Promise<Car>;
    getInquiryById(id: bigint): Promise<ContactForm | null>;
    submitInquiry(name: string, phone: string, message: string): Promise<bigint>;
    updateInquiry(id: bigint, name: string, phone: string, message: string): Promise<void>;
}
