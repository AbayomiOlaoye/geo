import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const teamData = [
  { id: 1, name: "Ehima Ebor", title: "President/Founder", imageUrl: "/team/ehima.webp", bio: "Detailed bio about Ehima Ebor goes here. Co-builder and Labourer in the Vineyard of the King." },
  { id: 2, name: "Enimien A. Ehima", title: "General Secretary/HOD Health", imageUrl: "/team/enimien.webp", bio: "Detailed bio about Jane Doe. Experienced leader passionate about the cause." },
  { id: 3, name: "Pst. Oboh Osaze Christian", title: "Program Director/PRO", imageUrl: "/team/oboh.webp", bio: "Detailed bio about John Smith. Keeping everything organized." },
  { id: 4, name: "Pst. Destiny Usoboh", title: "Prayer Coordinator/Media Assistant", imageUrl: "/team/destiny.webp", bio: "Detailed bio about Alice Green. Managing the finances with care." },
  { id: 5, name: "Pst. Peter Idowu", title: "Member", imageUrl: "/team/peter.webp", bio: "Detailed bio about Bob White. Making sure projects run smoothly." },
  { id: 6, name: "Pst. David Aizebeokhai", title: "Media/Publicity HOD", imageUrl: "/team/david.webp", bio: "Detailed bio about Charlie Brown. Keeping everything organized." },
  { id: 7, name: "Olusegun Olalere", title: "Member", imageUrl: "/team/olusegun.webp", bio: "Detailed bio about Dave Wilson. Managing the finances with care." },
  { id: 8, name: "Pst. Omioguesun Steven", title: "Evangelism Team Member", imageUrl: "/team/steven.webp", bio: "Detailed bio about Eve Adams. Making sure projects run smoothly." },
  { id: 9, name: "Pst. Osaze Pere Ere Esther", title: "HOD Music/Evangelism Team Member", imageUrl: "/team/pere.webp", bio: "Detailed bio about Frank Harris. Keeping everything organized." },
  { id: 10, name: "Sis. Mercy Egbeyon", title: "Asst. HOD Health", imageUrl: "/team/mercy.webp", bio: "Detailed bio about Grace Lee. Managing the finances with care." },
  { id: 11, name: "Opeyemi Thomas", title: "Member", imageUrl: "/team/opeyemi.webp", bio: "Detailed bio about Henry Walker. Making sure projects run smoothly." },
  { id: 12, name: "Mercy Atoe", title: "HOD Social Worker", imageUrl: "/team/atoe.webp", bio: "Detailed bio about Ivy Young. Keeping everything organized." },
];

// const volunteerData = [
//     { id: 101, name: "Volunteer One", title: "General Volunteer", imageUrl: "/images/employability.webp" },
//     { id: 102, name: "Volunteer Two", title: "Event Helper", imageUrl: "/images/employability.webp" },
//     { id: 103, name: "Volunteer Three", title: "Outreach", imageUrl: "/images/employability.webp" },
//     { id: 104, name: "Volunteer Four", title: "Admin Support", imageUrl: "/images/employability.webp" },
//     { id: 105, name: "Volunteer Five", title: "General Volunteer", imageUrl: "/images/employability.webp" },
//     { id: 106, name: "Volunteer Six", title: "Event Helper", imageUrl: "/images/employability.webp" },
//     { id: 107, name: "Volunteer Seven", title: "Outreach", imageUrl: "/images/employability.webp" },
//     { id: 108, name: "Volunteer Eight", title: "Admin Support", imageUrl: "/images/employability.webp" },
// ];

const MemberCard = ({ member, isVolunteer = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInteraction = () => {
    if (!isVolunteer) {
      setIsExpanded(!isExpanded);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative"
      variants={cardVariants}
      onClick={handleInteraction}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      style={{ cursor: isVolunteer ? 'default' : 'pointer' }}
    >
      <div className="flex flex-col overflow-hidden rounded-tr-4xl rounded-bl-4xl shadow-md h-full">
        <Image src={member.imageUrl} alt={member.name} width={200} height={192} className="w-full object-cover" />

        <div className="bg-[var(--darker)] text-[var(--light)] p-4 text-center flex-grow flex flex-col justify-center">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm opacity-90">{member.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamVolunteersSection = () => {
  // const [showVolunteers, setShowVolunteers] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  //  const volunteerSectionVariants = {
  //   hidden: { opacity: 0, height: 0, marginTop: 0 },
  //   visible: { opacity: 1, height: 'auto', marginTop: '3rem',
  //       transition: { duration: 0.5, ease: "easeInOut" }
  //   },
  //   exit: { opacity: 0, height: 0, marginTop: 0,
  //       transition: { duration: 0.3, ease: "easeInOut" }
  //   },
  // };

  return (
    <article className="bg-white w-full relative overflow-hidden">
      <section className="py-16 container max-w-[1500px] mx-auto px-[5%]">
      <div className="flex flex-col items-center lg:items-start justify-center gap-3 py-5">
         <h2 className="text-2xl lg:text-4xl font-bold mb-2">
           Our Team & Volunteers
         </h2>
         <p className="text-[var(--darker)]">
           Co-builders and Labourers in the Vineyard of the King
         </p>
       </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-8 max-wu-[80%] md:max-w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamData.slice(0, 8).map((member) => (
          <MemberCard key={member.id} member={member} isVolunteer={false} />
        ))}
      </motion.div>

      {/* {!showVolunteers && (
        <div className="text-center mt-12">
          <motion.button
            onClick={() => setShowVolunteers(true)}
            className="text-[var(--choc)] underline px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all our Volunteers
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {showVolunteers && (
          <motion.div
             key="volunteers-section"
             variants={volunteerSectionVariants}
             initial="hidden"
             animate="visible"
             exit="exit"
             className='mt-12'
          >
             <h3 className="text-2xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
               Our Valued Volunteers
             </h3>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[80%] md:max-w-full mx-auto"
                variants={containerVariants} initial="hidden" animate="visible"
            >
              {volunteerData.map((volunteer) => (
                <MemberCard key={volunteer.id} member={volunteer} isVolunteer={true} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  </article>
  );
};

export default TeamVolunteersSection;
