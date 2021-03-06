export default function resolveTypeProductType(type) {
  let result = null;
  switch (type) {
    case 'TICKET':
      result = 'Ticket';
      break;
    case 'MEMBERSHIP':
      result = 'Membership';
      break;
    case 'PARTNERSHIP':
      result = 'Partnership';
      break;
    case 'FOOD':
      result = 'Food';
      break;
    case 'COUPON':
      result = 'Coupon';
      break;
    case 'TRAINING':
      result = 'Training';
      break;
    case 'FAMILY':
      result = 'Family';
      break;
    default:
      throw new Error(`Resolver encountered unknown product type ${type}`);
  }

  return result;
}
