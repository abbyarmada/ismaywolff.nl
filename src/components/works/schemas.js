import { schema } from 'normalizr'
import { schemas as links } from '../../data/links'

export const works = new schema.Entity('works', { images: [links.links] }, {
  processStrategy: value => value.fields,
  idAttribute: value => value.fields.slug
})
