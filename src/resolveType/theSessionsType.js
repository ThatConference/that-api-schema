export default function resolveTypeTheSessionsType(type) {
  let result = null;
  switch (type) {
    case 'REGULAR':
      result = 'Regular';
      break;
    case 'OPEN_SPACE':
      result = 'OpenSpace';
      break;
    case 'KEYNOTE':
      result = 'Keynote';
      break;
    case 'PANEL':
      result = 'Panel';
      break;
    case 'WORKSHOP':
      result = 'Workshop';
      break;
    default:
      throw new Error(`Resolver encountered unknown session type ${type}`);
  }

  return result;
}
