export interface Story {
    id: number;
    storyTitle: string;
    date: string;
    client: string;
    service: string;
    projectType: string;
    description: string;
    images: string[]; // Assuming images are stored as an array of URLs
    createdAt: string;
    updatedAt: string;
}

export interface StoryResponse {
    message: string;
    stories: Story[];
}
