export interface Comments {
  title: string;
  parent_id: number;
  post_id: number;
  child: any[];
  created_at: Date;
  updated_at: Date;
  id?: number;
}
