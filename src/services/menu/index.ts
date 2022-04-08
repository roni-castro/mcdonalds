import client from '../../config/api';
import { MenuResponse } from './interface';

export async function getMenu(): Promise<MenuResponse> {
  const { data } = await client.get('/menu');

  return data;
}
