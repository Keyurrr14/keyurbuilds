import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { AnimatedTablet } from "../components/AnimatedTablet";
import KshitijTicketingLogo from "../assets/projects/KshitijTicketing/KshitijTicketingLogo.png";
import KshitijTicketingPoster from "../assets/projects/KshitijTicketing/KshitijTicketingPoster.jpg";

const KshitijTicketing = () => {
  return (
    <div>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <div className="flex items-center gap-5">
            <img
              src={KshitijTicketingLogo}
              alt=""
              className="h-16 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none"
            />
            <a
              href="https://kshitij-ticketing-live.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-link-m text-black text-5xl"></i>
            </a>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            <span className="font-bold">Tech Stack:</span> MERN (MongoDB,
            Express.js, React.js, Node.js) · AWS · Zepto Mail <br /> <br />{" "}
            Kshitij, the internationally acclaimed cultural festival of Mithibai
            College, draws over 50,000 students from across India every year.
            For its 17th edition, I collaborated with a friend to design and
            develop a robust ticketing system to manage and streamline entry for
            over 6,000 attendees across 3 days — a first-of-its-kind, end-to-end
            digital solution tailored specifically for one of Asia's largest
            college festivals.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            The system allowed attendees to register online by submitting their
            personal details including name, email, phone number, gender, and
            college. Upon successful registration, a unique pass was generated
            that included the featured Pronite event artist and a custom
            encrypted QR code. The QR was encoded in a way that made it readable
            only by our system. If scanned by any third-party QR scanner, the
            code would return gibberish—ensuring the highest level of security
            and eliminating the possibility of ticket duplication or misuse. The
            passes were sent automatically to the users' email addresses using
            official Mithibai Kshitij accounts through Zepto Mail, along with
            important event rules and regulations.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Security and access control were central to our architecture. Every
            gate at the event had at least four devices equipped with our
            scanning system. Tickets could be scanned only once—on successful
            entry, the ticket was marked as used in real-time, and a
            confirmation notification was sent to the attendee. If someone tried
            to reuse or share a ticket, the system would instantly flag it as
            invalid or duplicate, denying access. In the case of fake tickets or
            unauthorized scans, the system handled the logic to prevent entry
            and alert staff. Our role-based access control further ensured that
            every system user—from ticket issuers to scanning volunteers—could
            only perform actions and access information specific to their role.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            To maintain full transparency and traceability, we implemented an
            extensive logging system that tracked every action within the
            platform. This included account creation, ticket issuance, ticket
            scans, access attempts, and system modifications. The detailed logs
            were critical not only for operational efficiency during the
            festival but also for post-event audits and performance reviews.
            Whether it was identifying scanning issues or resolving attendee
            complaints, the logs made it possible to pinpoint exactly what
            happened, when, and by whom.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            This project was more than just a technical achievement—it was a
            real-world solution that scaled effectively under pressure, handled
            live users, ensured tight security, and delivered a seamless
            experience. It also demonstrated how a lean team of just two
            developers could deliver an enterprise-level product with thoughtful
            planning, smart system design, and a commitment to user-centric
            development. Being a core tech enabler for such a large-scale
            cultural event has been one of the most rewarding and impactful
            projects of my career so far.
          </p>
        </div>

        <div className="flex flex-col mt-20 md:mt-0">
          <AnimatedTablet
            titleComponent={
              <>
                <h1 className="font-inter text-4xl font-semibold text-black">
                  Revolutionizing Event Access: <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    50K Students, One Smart System
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={KshitijTicketingPoster}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full"
              draggable={false}
            />
          </AnimatedTablet>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="w-full border-4 border-gray-300 rounded-lg lg:rounded-3xl overflow-hidden">
            <img
              src={KshitijTicketingPoster}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 px-4 sm:px-8 md:px-12 lg:px-20 my-4 sm:my-2 pb-6 sm:pb-10">
          <div className="w-full sm:w-1/2 border-4 border-gray-300 rounded-lg overflow-hidden">
            <img
              src={KshitijTicketingPoster}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
          <div className="w-full sm:w-1/2 border-4 border-gray-300 rounded-lg overflow-hidden">
            <img
              src={KshitijTicketingPoster}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KshitijTicketing;
