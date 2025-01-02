export interface Project {
    id: number;
    projectType: string;
    projectName: string;
    projectLink: string;
    projectImages: string[]; // Array of image URLs
    createdAt: string;
    updatedAt: string;
}

export interface ProjectsResponse {
    message: string;
    projects: Project[];
}
