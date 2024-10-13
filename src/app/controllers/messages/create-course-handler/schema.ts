export const schema = {
  type: 'object',
  properties: {
    start: { type: 'number' },
    end: { type: 'number' },
    organizationId: { type: 'number' },
  },
  required: ['start', 'end', 'organizationId'],
  additionalProperties: false,
};
