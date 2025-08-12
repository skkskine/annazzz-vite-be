import type { CollectionConfig } from 'payload'

export const Categorie: CollectionConfig = {
  slug: 'categorie',
  fields: [{ name: 'name', type: 'text', unique: true, required: true, label: 'Nome' }],
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      it: 'Categoria',
    },
    plural: {
      it: 'Categorie',
    },
  },
}
