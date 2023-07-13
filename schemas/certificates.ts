import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'certificates',
    title: 'Certificates',
    type: 'document',
    fields: [
        defineField({
            name: 'certificate_name',
            title: 'Certificate Name',
            type: 'string',
        }),
        defineField({
            name: 'certificate_by',
            title: 'Certificate By',
            type: 'string',
        }),
    ]
})