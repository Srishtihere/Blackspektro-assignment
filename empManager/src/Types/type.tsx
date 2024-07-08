interface empDetailsData {
  id: number;
  name: string;
  role: string;
  address: string;
  DOB: string;
  isActive: boolean;
}

interface orgDetails {
  name: string;
  address: string;
  phoneNumber: string;
  headquarter: string;
  founder: string;
  date: string;
}

export type { empDetailsData, orgDetails };
