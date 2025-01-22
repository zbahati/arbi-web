export interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Contact {
  name: string;
  role: string;
  email: string;
  phone?: string;
  skype?: string;
}

export interface Partner {
  name: string;
  logo?: string;
}