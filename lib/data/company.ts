export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  establishedYear: number;
  corporateHeadquarters: {
    label: string;
    addressLine1: string;
    suite: string;
    city: string;
    provinceState: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  };
  operationalCenterNote: string;
  contacts: {
    tollFreePhone: string;
    tollFreeDisplay: string;
    secondaryPhone: string;
    secondaryPhoneDisplay: string;
    email: string;
    supportEmail: string;
  };
  operatingHours: string;
  capacityWorkstations: number;
  socials: {
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  verifiedStats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Virtual Stack",
  legalName: "Virtual Stack Technologies Inc.",
  tagline: "Scale Your Business With a Team You Can Trust",
  shortDescription:
    "Virtual Stack provides customer support, back-office operations, sales support, and dedicated remote teams built around the way your business works.",
  establishedYear: 2011,
  corporateHeadquarters: {
    label: "Main Office",
    addressLine1: "500 4th Avenue SW",
    suite: "Suite 2500",
    city: "Calgary",
    provinceState: "AB",
    postalCode: "T2P 2V6",
    country: "Canada",
    fullAddress: "500 4th Avenue SW, Suite 2500, Calgary, T2P 2V6",
  },
  operationalCenterNote:
    "Operating continuously since 2011 with corporate offices in Western Canada and 24/7/365 multi-timezone delivery infrastructure.",
  contacts: {
    tollFreePhone: "+18889100868",
    tollFreeDisplay: "+1 (888) 910-0868",
    secondaryPhone: "+18338002022",
    secondaryPhoneDisplay: "+1 (833) 800-2022",
    email: "info@virtualstack.us",
    supportEmail: "support@virtualstack.us",
  },
  operatingHours: "24 Hours / 7 Days / 365 Days a Year",
  capacityWorkstations: 200,
  socials: {
    facebook: "https://www.facebook.com/VirtualStack.us",
    linkedin: "https://www.linkedin.com/company/virtual-stack",
    twitter: "https://twitter.com/VirtualStackUS",
    instagram: "https://www.instagram.com/virtualstack.us",
  },
  verifiedStats: [
    {
      label: "Workstation Capacity",
      value: "200+",
      description: "Dedicated operational workstations configured for secure client workflows",
    },
    {
      label: "Operational Coverage",
      value: "24/7/365",
      description: "Continuous global support coverage across all North American time zones",
    },
    {
      label: "Operating Since",
      value: "2011",
      description: "Over a decade of continuous operational reliability and service delivery",
    },
    {
      label: "Cloud Architecture",
      value: "100%",
      description: "Fully redundant cloud telephony, VOIP infrastructure, and biometric security",
    },
  ],
};
