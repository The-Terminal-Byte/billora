import type { InvoiceStatus } from '@billora/shared';

const labels: Record<InvoiceStatus, string> = {
  DRAFT: 'Draft',
  SENT: 'Sent',
  PARTIALLY_PAID: 'Partially paid',
  PAID: 'Paid',
  OVERDUE: 'Overdue',
  CANCELLED: 'Cancelled',
};

export function StatusBadge({ status }: { status: InvoiceStatus }) {
  return <span className={`status-badge status-${status.toLowerCase().replace('_', '-')}`}>{labels[status]}</span>;
}
