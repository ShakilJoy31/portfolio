export interface SocialMediaLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  github: string;
}

export interface User {
  id: number;
  name: string;
  profession: string;
  wordDescription: string;
  slidingDescription: string;
  availableFor: string;
  biography: string;
  cv: string;
  socialMedia: SocialMediaLinks;
  password: string;
  profilePicture: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  officeAddress: string;
  businessEmail: string;
  contactNo: string;

}

export interface UserResponse {
  message: string;
  user: User;
}