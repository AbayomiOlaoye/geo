import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

const teamData = [
  {
    id: uuidv4(),
    name: "Ehima Ebor",
    title: "President/Founder",
    imageUrl: ["/team/ehima.svg", "/team/ehima.webp"],
    bio: "Ehima Ebor established Godsent Evangelical Outreach with a heart for evangelism and a vision for discipleship, to reach the lost, equip believers, and transform communities."
  },
  {
    id: uuidv4(), 
    name: "Enimien A. Ehima",
    title: "General Secretary/HOD Health",
    imageUrl: ["/team/enimien.svg", "/team/enimien.webp"],
    bio: "Ehima A. Enimien has a passion for serving the Lord and a gift for organization, Enimien is dedicated to supporting the outreach's mission to spread the Gospel and transform lives."
  },
  {
    id: uuidv4(),
    name: "Pst. Oboh Osaze Christian",
    title: "Program Director/PRO",
    imageUrl: ["/team/oboh.svg", "/team/oboh.webp"],
    bio: "Oboh Osaze has a passion for discipleship and a leadership gift. Also dedicated to creating transformative experiences that help people grow in their faith and relationship with God."
  },
  {
    id: uuidv4(),
    name: "Pst. Destiny Usoboh",
    title: "Prayer Coordinator/Asst. Media",
    imageUrl: ["/team/destiny.svg", "/team/destiny.webp"],
    bio: "Destiny Usoboh wields the prayer sword and a spirit for intercession. Very dedicated to seeking God's guidance and power in the outreach's initiatives and programs."
  },
  {
    id: uuidv4(),
    name: "Pst. Peter Idowu",
    title: "Member",
    imageUrl: ["/team/peter.svg", "/team/peter.webp"],
    bio: "Peter Idowu is committed to serving the Body of Christ and a gift for compassion, and is dedicated to advancing the cause of Christ."
  },
  {
    id: uuidv4(),
    name: "Pst. David Aizebeokhai",
    title: "Media/Publicity HOD",
    imageUrl: ["/team/david.svg", "/team/david.webp"],
    bio: "David has a passion for creative communication and a gift for storytelling, and is dedicated to sharing the outreach's message of hope and transformation with the world."
 },
  {
    id: uuidv4(),
    name: "Pst. Omioguesun Steven",
    title: "Evangelism Team",
    imageUrl: ["/team/steven.svg", "/team/steven.webp"],
    bio: "Steven has a passion for evangelism and a gift for communicating the Good News, and is dedicated to equipping and mobilizing believers to spread the love of Christ."
  },
  {
    id: uuidv4(),
    name: "Pst. Osaze Pere Esther",
    title: "HOD Music/Evangelism Team",
    imageUrl: ["/team/pere.svg", "/team/pere.webp"],
    bio: "DEsther has a passion for music and a gift for leadership, and is dedicated to using music as a powerful tool for sharing the Gospel and inspiring spiritual growth."
  },
  {
    id: uuidv4(),
    name: "Sis. Mercy Egbeyon",
    title: "Asst. HOD Health",
    imageUrl: ["/team/mercy.svg", "/team/mercy.webp"],
    bio: "Mercy Egbeyon has a heart for serving others and a gift for compassion, and is dedicated to ensuring health and well-being in the community through the outreach's initiatives."
  },
  {
    id: uuidv4(),
    name: "Opeyemi Thomas",
    title: "Member",
    imageUrl: ["/team/opeyemi.svg", "/team/opeyemi.webp"],
    bio: "Fueled with a passion for serving behind the scenes and a blessing to the organization, ensuring that the outreach's programs and events run smoothly and efficiently."
  },
  {
    id: uuidv4(),
    name: "Mercy Atoe",
    title: "HOD Social Worker",
    imageUrl: ["/team/atoe.svg", "/team/atoe.webp"],
    bio: "Mercy Atoe's heart for social justice and a gift for advocacy have helped us in addressing the needs of the community and promoted positive change through the outreach's initiatives."
  },
  {
    id: uuidv4(),
    name: "Pst. S.O Olusegun",
    title: "Evangelism Coordinator",
    imageUrl: ["/team/pst-segun.svg", "/team/pst-segun.webp"],
    bio: "Olusegun is passionate about evangelism and is dedicated to mobilizing believers to share the Gospel and make a difference in their communities."
  },
  {
    id: uuidv4(),
    name: "Olusegun Olalere",
    title: "Member",
    imageUrl: ["/team/olusegun.svg", "/team/olusegun.webp"],
    bio: "Olusegun Olalere is committed to serving the Body of Christ and a gift for compassion, and is dedicated to advancing the cause of Christ."
  },
  {
    id: uuidv4(),
    name: "Pst. Godwin Akhere",
    title: "HOD Utility/Logistics",
    imageUrl: ["/team/godwin.svg", "/team/godwin.webp"],
    bio: "Akhere has a passion for serving behind the scenes and a gift for organization, ensuring that the outreach's programs and events run smoothly and efficiently."
  },
];

const MemberCard = ({ member, isVolunteer = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
          document.body.style.overflow = originalStyle;
      };
    }
  }, [isExpanded]);

  const handleInteraction = () => {
    if (!isVolunteer) {
      setIsExpanded(!isExpanded);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 }
  };
   const modalContentVariants = {
      hidden: { opacity: 0, scale: 0.90 },
      visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
      exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <>
      <motion.div
        layout
        className="relative h-full"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={handleInteraction}
        whileHover={!isVolunteer ? { scale: 1.03, transition: { duration: 0.2 } } : {}}
        style={{ cursor: isVolunteer ? 'default' : 'pointer' }}
      >
        <div className="flex flex-col overflow-hidden rounded-tr-4xl rounded-bl-4xl shadow-md bg-[var(--light)] h-full">
          <div className="w-full h-48 relative">
            <Image
                src={member.imageUrl[0]}
                alt={member.name}
                layout="fill"
                objectFit="contain"
                priority={member.id <= 4}
            />
          </div>
          <div className="bg-[var(--darker)] text-[var(--light)] p-4 text-center flex-grow flex flex-col justify-center rounded-tr-3xl">
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm opacity-90">{member.title}</p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && !isVolunteer && (
          <motion.div
            key="modal-overlay"
            className="fixed inset-0 bg-[var(--light)] flex items-center justify-center p-4 z-50 overflow-y-auto"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              key="modal-content"
              className="bg-white p-6 sm:p-8 rounded-lg max-w-lg w-full text-gray-800 relative shadow-xl max-h-[90vh] overflow-y-auto"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10"
                aria-label="Close"
              >
                ×
              </button>
              <div className="w-full h-full relative mb-4 rounded-md overflow-hidden">
                 <Image
                  src={member.imageUrl[1]}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="max-w-full h-full object-cover rounded-md"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--darker)]">{member.name}</h2> {/* Use CSS var */}
              <h3 className="text-lg sm:text-xl text-gray-600 mb-4">{member.title}</h3>
              <p className="text-base">{member.bio || "No bio available."}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TeamVolunteersSection = () => {
  const [showMore, setShowMore] = useState(false);
  const teamSectionRef = useRef(null);

  const handleToggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
    setTimeout(() => {
        teamSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <article className="bg-white w-full relative overflow-hidden">
      <section ref={teamSectionRef} id="team-section" className="py-16 container max-w-[1500px] mx-auto px-[5%] scroll-mt-16"> {/* Added ID and scroll-mt for fixed headers */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center gap-3 py-5"> {/* Centered text for mobile, left for large */}
            <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-[var(--darker)]">
                Our Team & Volunteers
            </h2>
            <p className="text-[var(--darker)]">
                Co-builders and Labourers in the Vineyard of the King
            </p>
        </div>

        <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-8 max-w-[90%] sm:max-w-[85%] md:max-w-full mx-auto" // Adjusted max-width for responsiveness
        >
            <AnimatePresence initial={false}>
            {teamData.map((member, index) => (
                (index < 8 || showMore) && (
                    <MemberCard key={member.id} member={member} isVolunteer={false} />
                )
            ))}
            </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
            <motion.button
            onClick={handleToggleShowMore}
            className="text-[var(--darker)] underline px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            {showMore ? 'View Less Team Members' : 'View All Our Team Members'}
            </motion.button>
        </div>
      </section>
    </article>
  );
};

export default TeamVolunteersSection;