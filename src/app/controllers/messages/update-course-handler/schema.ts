export const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    start: { type: 'number' },
    end: { type: 'number' },
    organizationId: { type: 'number' },
  },
  required: ['id'],
  additionalProperties: false,
};
