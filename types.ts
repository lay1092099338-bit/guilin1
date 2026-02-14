
export interface Attraction {
  name: string;
  description: string;
  tags: string[];
  image: string;
}

export interface DayPlan {
  day: number;
  title: string;
  route: string;
  driveTime: string;
  highlights: string[];
  attractions: Attraction[];
  tips: string;
}
