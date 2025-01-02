export interface Client {
    id: number;
    clientName: string;
    clientProfession: string;
    feedback: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
}

export interface ClientResponse {
    message: string;
    feedback: Client[];
}
