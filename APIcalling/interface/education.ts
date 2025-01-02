export interface Education {
  id: number;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  createdAt: string;
  updatedAt: string;
}

export interface EducationResponse {
  message: string;
  education: Education[];
}





// Experience response

export interface Experience {
  id: number;
  organization: string;
  role: string;
  startYear: string;
  endYear: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExperienceResponse {
  message: string;
  experience: Experience[];
}