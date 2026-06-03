export type EventCategory = "torneio" | "treino" | "workshop" | "encontro";

export type Event = {
  id: string;
  title: string;
  description?: string;
  category: EventCategory;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
  image?: string;
};
