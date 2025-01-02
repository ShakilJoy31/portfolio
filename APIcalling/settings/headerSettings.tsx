import { BASE_URL } from "@/constants/routeConstant";

export async function fetchSettings() {
    try {
      const response = await fetch(`${BASE_URL}/settings/get-header-settings`, {
        cache: "no-store",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch settings");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch settings:", error);
      return null;
    }
  }
  