import BaseDictEnum from './baseDictEnum.js';

export const ShipmentStatus = {
  OPEN: new BaseDictEnum('OPEN', 'shipmentStatus.open', 'open', 'Open'),
  SUBMITTED: new BaseDictEnum(
    'SUBMITTED',
    'shipmentStatus.submitted',
    'submitted',
    'Submitted',
  ),
  COMPLETED: new BaseDictEnum(
    'COMPLETED',
    'shipmentStatus.completed',
    'completed',
    'Completed',
  ),
  CANCELLED: new BaseDictEnum(
    'CANCELLED',
    'shipmentStatus.cancelled',
    'cancelled',
    'Cancelled',
  ),
};
