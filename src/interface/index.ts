export interface IKbbiArti {
  kelas_kata: string;
  deskripsi: string;
}

export interface IKbbiData {
  lema: string;
  arti: Array<IKbbiArti>;
}

export interface IApiResponse {
  status: boolean;
  message: string;
  data: Array<IKbbiData>;
}