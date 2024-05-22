import React from 'react'
import Hero from '../components/Hero'

const Services = () => {
  return (
    <main>
      <Hero title="Services" img="./images/services.png" />
      <section className='py-[80px]'>
        <div className="container">
            <h2 className='text-[32px] font-semibold mb-[28px]'>Commercial Cleaning</h2>
            <p>
            we understand that every commercial space has unique cleaning needs. That's why we offer a wide range of services tailored to meet the specific requirements of your business.

            Our regular commercial cleaning service includes dusting, vacuuming, mopping, and sanitizing all common areas to maintain a clean and hygienic environment for employees and visitors. We'll also empty trash bins, clean restrooms, and replenish supplies as needed to ensure that your facility is always in top condition.

            For businesses that require a more thorough clean, our deep cleaning service targets dirt and grime in high-traffic areas and hard-to-reach spaces. We'll steam clean carpets, polish floors, and sanitize surfaces to remove germs and bacteria, creating a healthier workplace for your team.

            In addition to general cleaning tasks, we offer specialized services such as window cleaning, carpet cleaning, and floor maintenance to keep your facility looking its best year-round. Whether you operate a small office, retail store, or large commercial building, we have the expertise and resources to handle all of your cleaning needs.
            </p>
        </div>
      </section>
    </main>
  )
}

export default Services
