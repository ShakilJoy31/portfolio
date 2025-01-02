export interface Service {
    id: number;
    serviceTitle: string;
    serviceName: string;
    serviceDescription: string;
    serviceLogo: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  }
  
  export interface ServicesResponse {
    message: string;
    services: Service[];
  }
  