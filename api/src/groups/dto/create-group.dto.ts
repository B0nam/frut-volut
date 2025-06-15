export class CreateGroupDto {
  nome: string;
  descricao: string;
  imagem: string;
  publico: boolean;
  senha?: string;
}
