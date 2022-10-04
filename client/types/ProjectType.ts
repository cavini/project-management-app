import { Client } from "./ClientType";

export interface Project {
    name: string,
    id: string,
    status: string,
    description: string,
    client: Client
}