export interface InvoiceStatus {
  id: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'failed' | 'processing';
  message?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FaqItem {
  question: string;
  answer: string;
}
