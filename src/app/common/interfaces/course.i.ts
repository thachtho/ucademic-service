export interface ICourseEntity {
  id?: number | null;
  start: number;
  end: number;
  organizationId: number;
  name: string;
}
