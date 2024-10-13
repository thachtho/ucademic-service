export const schema = {
  type: 'object',
  properties: {
    id: { type: ['number', 'null'] },
    start: { type: 'number' },
    end: { type: 'number' },
    organizationId: { type: 'number' },
    name: { type: 'string' },
  },
  required: ['start', 'end', 'organizationId', 'name'],
  additionalProperties: false,
};
