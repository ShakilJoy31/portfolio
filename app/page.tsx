import LandingHome from "@/components/Theme1/LandingPage";
import { BASE_URL } from "@/constants/routeConstant";
export default async function Home() {
  const res = await fetch(BASE_URL + "/user-information/get-user-information", { cache: 'no-store' });
  const data = await res?.json();

  // Service data
  const serviceRes = await fetch(BASE_URL + "/service/get-service-information", { cache: 'no-store' });
  const serviceData = await serviceRes?.json();


  // Education data
  const educationRes = await fetch(BASE_URL + "/education-experience/get-education", { cache: 'no-store' });
  const educationData = await educationRes?.json();

  // Education data
  const experienceRes = await fetch(BASE_URL + "/education-experience/get-experience", { cache: 'no-store' });
  const experienceData = await experienceRes?.json();

  //  skills data
  const skillsRes = await fetch(BASE_URL + "/skills/get-skills", { cache: 'no-store' });
  const skillsData = await skillsRes?.json();

  //  Projects data
  const projectRes = await fetch(BASE_URL + "/project/get-projects", { cache: 'no-store' });
  const projectData = await projectRes?.json();

  //  Projects data
  const pricingRes = await fetch(BASE_URL + "/pricing/get-pricing", { cache: 'no-store' });
  const pricingData = await pricingRes?.json();

  //  Client data
  const clientRes = await fetch(BASE_URL + "/client/get-client-feedback", { cache: 'no-store' });
  const clientData = await clientRes?.json();

  //  Stories data
  const storiesRes = await fetch(BASE_URL + "/stories/get-stories", { cache: 'no-store' });
  const storiesData = await storiesRes?.json();
  
  return (
    <LandingHome data={data} serviceData={serviceData} educationData={educationData} skillsData={skillsData} projectData={projectData} pricingData={pricingData} clientData={clientData} storiesData={storiesData} experienceData={experienceData}></LandingHome>
  );
}
