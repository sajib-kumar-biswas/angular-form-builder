export interface Choice {
  statement: string;
  options: string[];
  multiple_answer: boolean;
  required: boolean;
  type: string;
  showFront: boolean;
}
