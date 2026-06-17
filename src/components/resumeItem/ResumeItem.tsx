import { Key } from "react";
import "./resumeItem.scss";

type Props = {
  company?: string;
  titleHtml: string;
  date: string;
  content: Array<{ __html: string }>;
};

function CompanyLogo({ company }: { company: string }) {
  switch (company.toLowerCase()) {
    case "docusign":
      return (
        <div className="companyLogo docusign">
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQFJh4R0ibULEg/company-logo_200_200/company-logo_200_200/0/1712837162469/docusign_logo?e=1783555200&v=beta&t=vLh3mhmFp8PI1slCBSA1TVuoDG18T6DsEPQML3P23tg" 
            alt="DocuSign"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    case "sustainability economics":
      return (
        <div className="companyLogo sustainability">
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQGY0r6M6tee3g/company-logo_200_200/B56ZlgfgP0KIAI-/0/1758260495782/sustainabilityeconomics_logo?e=1783555200&v=beta&t=LSxN1gCjh2aOLDB_lwxHIRCMEK57IuxChmncG1SUefU" 
            alt="Sustainability Economics"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    case "syvora":
      return (
        <div className="companyLogo syvora">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E0BAQEQI19GHxey4A/company-logo_200_200/company-logo_200_200/0/1721293831046/syvora_logo?e=1783555200&v=beta&t=RnxcHhh_9oFx4xdhxyV_BWiiwNTpis8B8t_OboActHM" 
            alt="Syvora"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    case "opensense labs":
      return (
        <div className="companyLogo opensense">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQEuYH3uFuLVuw/company-logo_200_200/B4DZfKqggFHkAI-/0/1751451830744/opensenselabs_logo?e=1783555200&v=beta&t=ATUw9aVZGxzwwyzMtitvVe4HUcjsDk-5YQxO484QfLs" 
            alt="OpenSense Labs"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    case "areksoft technologies":
      return (
        <div className="companyLogo areksoft">
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQEra7OI5QDPUQ/company-logo_200_200/B56Ziz3x3RHQAI-/0/1755364401036/areksoft_technologies_logo?e=1783555200&v=beta&t=Wf2mhInKZ_1HFMEjvOV4jkXZRurNxT8MT_LmJNLWHDE" 
            alt="Areksoft Technologies"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    default:
      return (
        <div className="companyLogo default">
          <div className="fallbackLetter">{company.charAt(0).toUpperCase()}</div>
        </div>
      );
  }
}

export default function ResumeItem({ company, titleHtml, date, content }: Props) {
  return (
    <div className="resumeItem">
      {company ? <CompanyLogo company={company} /> : <span className="circle"></span>}
      <h3 dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <span>{date}</span>
      <ul>
        {content.map((line, i: Key) => (
          line ? <li key={i} dangerouslySetInnerHTML={line}></li> : null
        ))}
      </ul>
    </div>
  );
}
