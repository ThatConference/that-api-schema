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
    default:
      throw new Error(`Resolver encountered unknown product type ${type}`);
  }

  return result;
}
