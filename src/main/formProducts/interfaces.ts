export const requeridFields = ['code', 'name', 'stock', 'date'] as const;
export type RequeridFields = typeof requeridFields[number];