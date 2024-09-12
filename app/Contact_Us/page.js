import PageNav from '@/components/About/PageNav'
import ContactForm from '@/components/Contact/ContactForm'
import MapEmbed from '@/components/Contact/MapEmbed'
import React from 'react'

const page = () => {
  return (
    <>
    <PageNav/>
    <MapEmbed/>
    <ContactForm/>
    </>
  )
}

export default page
