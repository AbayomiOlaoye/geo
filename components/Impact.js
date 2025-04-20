"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 'StreetEvangelism',
    service: 'Proclaiming the Good News (Street Evangelism)',
    intro: 'We are committed to sharing the transformative message of salvation through Jesus Christ. By His grace, we have:',
    list: [
      'Conducted over 10 street evangelism outreaches, reaching hundreds with the Gospel message directly.',
      'Distributed thousands of Gospel tracts and literature, spreading hope and faith.',
      "Organized impactful outreach events, engaging communities and sharing Christ's love.",
      'Saw over 240 individuals make first-time decisions and 130 recommitments to follow Jesus Christ.',
      'Mobilized 10 trained volunteers who engaged in over 120 hours of one-on-one faith sharing conversations.',
      'Partnered with local churches and organizations to amplify our outreach efforts.',
      'Utilized social media and digital platforms to reach a wider audience with the message of hope.',
    ],
    img: '/impact/impact-st.webp'
  },
  {
    id: 'NuturingFaith',
    service: 'Nurturing New Faith (Discipleship & Growth)',
    intro: 'We are committed to nurturing new believers in their faith journey. By His grace, we have:',
    list: [
      'Conducted over 20 discipleship training sessions, equipping new believers with foundational teachings.',
      'Facilitated small group discussions and Bible studies, fostering community and spiritual growth.',
      'Developed and distributed discipleship materials, providing resources for personal study and growth.',
      'Organized mentorship programs, pairing new believers with experienced mentors for guidance.',
      'Hosted community events and gatherings, creating opportunities for fellowship and support.',
      'Provided ongoing support and encouragement through regular check-ins and follow-ups.',
      'Utilized digital platforms for online discipleship resources, reaching believers beyond physical boundaries.',
    ],
    img: '/impact/impact-nf.webp'
  },
  {
    id: 'CommunityRevival',
    service: 'Organizing Powerful Community Revivals (Community Revivals)',
    intro: 'We are committed to igniting spiritual renewal in our communities. By His grace, we have:',
    list: [
      'Organized over 5 community revival events, bringing together hundreds of participants.',
      'Facilitated powerful worship sessions, prayer gatherings, and Gospel messages.',
      'Engaged local churches and ministries to collaborate in revival efforts.',
      'Provided resources and materials for spiritual growth and discipleship during revivals.',
      'Encouraged community involvement through outreach activities and service projects.',
      'Created a welcoming environment for individuals to explore faith and spirituality.',
    ],
    img: '/impact/impact-cc.webp',
  },
  {
    id: 'CommunityService',
    service: "Demonstrating Christ's Love (Community Service)",
    intro: 'We are committed to improving the quality of life in our communities. God has help us to:',
    list: [
      'Implemented several community development projects, addressing local needs and challenges.',
      'Provided essential resources such as clean water, scholarships, sanitation facilities, and educational materials for over 300 beneficiaries.',
      'Collaborated with local organizations and stakeholders to maximize impact and sustainability.',
      'Organized community workshops and training sessions, empowering individuals with skills and knowledge.',
      'Facilitated health and wellness initiatives, promoting physical and mental well-being.',
      'Conducted needs assessments to identify priority areas for development and support.',
      'Engaged community members in project planning and execution, fostering ownership and participation.',
    ],
    img: '/impact/impact-cd.webp'
  }
];
 
export default function Impact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="w-full overflow-hidden"
      >
        <article className="container mx-auto p-4 px-5 md:px-[5%] max-w-[1500px] flex flex-col items-center justify-center gap-4">
        <article className="flex flex-col w-full items-center lg:items-start">
          <h2 className="font-bold text-2xl lg:text-4xl md:leading-12 mb-3 text-center lg:text-left">
            Key Imapct Areas & Fruitfulness
          </h2>
          <p className="text-[var(--darker)]">
            How God is Working Through US
          </p>
        </article>
          <div className="mx-auto grid grid-cols-1 gap-5">
            {services.map((paragraph, index) => (
              <motion.article
                key={paragraph.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                className={`mt-2 items-center flex flex-col mx-auto md:justify-between gap-12 py-10 border-b-2 last:border-b-0 border-[var(--light)] ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <Image src={paragraph.img} alt={paragraph.title} className="w-full md:w-[30%]" width={500} height={200} />
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                  viewport={{ once: true }}
                  key={paragraph.id}
                  id={paragraph.id}
                  className="md:bg-white bg-[var(--light)] rounded-lg shadow-lg flex flex-col gap-5 items-start md:shadow-none p-5 py-3 lg:py-0 lg:items-start"
                >
                  <h4 className="text-lg lg:text-xl font-bold text-[var(--teal)] mt-5 lg:mt-0 lg:text-left">{paragraph.service}</h4>
                  <p className="text-justify">{paragraph.intro}</p>
                  <ul className="mt-2 px-4 text-center lg:text-left leading-8">
                    {paragraph.list.map((item) => (
                      <li key={item.id} className="text-left list-disc">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </article>
      </motion.article>
    </>
  );
}
