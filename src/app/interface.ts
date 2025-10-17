interface Offer {
  id: number;
  title: string;
  description?: string;
  expires?: Date | null;
}

interface User{
  id:number,
   name: string,
      email: string,
      password: string,
      subscriptions?: []
}