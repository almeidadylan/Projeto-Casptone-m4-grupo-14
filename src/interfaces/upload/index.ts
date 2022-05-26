export interface IUpload {
  id: string;
  name: string;
  key: string;
  size: number;
  url: string;
}

export interface ICreateMusic {
  name: string;
  url: string;
  id_user: string;
  id_category: string;
  letter?: string;
  size?: number;
}

export interface IDeleteMusic {
  id: string;
  token: string;
}
