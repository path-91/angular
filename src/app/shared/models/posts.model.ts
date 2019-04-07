class Posts {
  constructor(
    public title: string,
    public text: string,
    public created_at: Date,
    public updated_at: Date,
    public id?: number,
  ) {}
}
