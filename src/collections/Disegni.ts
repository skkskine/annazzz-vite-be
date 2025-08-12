import { CollectionBeforeValidateHook, CollectionConfig } from 'payload'

const beforeValidateHook: CollectionBeforeValidateHook = async ({ data }) => {
  return { ...data, slug: (data?.name as string).toLocaleLowerCase().replaceAll(' ', '-') }
}

export const Disegni: CollectionConfig = {
  slug: 'disegni',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'slug', required: true, unique: true, type: 'text', admin: { hidden: true } },
    { name: 'name', type: 'text', label: 'Nome', required: true },
    { name: 'category', type: 'relationship', relationTo: 'categorie', label: 'Categoria' },
    { name: 'year', type: 'number', label: 'Anno', required: true },
    { name: 'richDesc', type: 'richText', label: 'Descrizione', required: true },
    {
      name: 'images',
      type: 'array',
      labels: {
        singular: {
          it: 'Immagine',
        },
        plural: {
          it: 'Immagini',
        },
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Immagine',
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      it: 'Disegno',
    },
    plural: {
      it: 'Disegni',
    },
  },
  hooks: { beforeChange: [beforeValidateHook] },
}
