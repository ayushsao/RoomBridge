import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  Spacer,
} from "@nextui-org/react";
import "../../CSS/FAQ.css";

export default function FAQ() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        marginTop: "8vh",
        width: "95vw",
      }}
    >
      <h2 className="uppercase font-mono text-slate-800 color text-2xl font-black w-full text-center mb-4">
        you ask - we answer!
      </h2>
      <Accordion
        defaultExpandedKeys={["1"]}
        variant="bordered"
        id="faq-accordion"
      >
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="1"
          title="How does RoomBridge help me find the perfect room?"
        >
          RoomBridge simplifies the process of finding your ideal accommodation. We show you 
          verified rooms with detailed information, connect you with trusted landlords, 
          and provide transparent pricing to help you make the best choice for your stay in Bhopal.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="2"
          title="Do I need to understand complex procedures to use RoomBridge?"
        >
          Not at all! RoomBridge is designed to be simple and user-friendly. 
          Our intuitive platform makes finding and booking rooms straightforward, 
          so you can focus on what matters most - finding your perfect home.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="3"
          title="Is RoomBridge suitable for people who aren't tech-savvy?"
        >
          Yes, RoomBridge is designed to be user-friendly for everyone. Our platform
          is intuitive and easy to navigate, making it simple to start your room 
          search right away, regardless of your technical background.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="4"
          title="Will RoomBridge show me rooms that don't match my requirements?"
        >
          We use smart filtering to show you only rooms that match your preferences,
          budget, and requirements, ensuring you don't waste time on unsuitable options.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="5"
          title="How does RoomBridge ensure genuine room listings?"
        >
          RoomBridge verifies all property listings and landlords to ensure authenticity.
          We maintain strict quality standards and provide user reviews to help you 
          make informed decisions with confidence.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="6"
          title="Can RoomBridge help me if I'm new to the city?"
        >
          Absolutely! RoomBridge is perfect for newcomers to any city. We provide 
          detailed area information, nearby amenities, and local insights to help 
          you choose the best neighborhood for your lifestyle and needs.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="7"
          title="What about the security of my personal information?"
        >
          We prioritize your privacy and security with industry-standard encryption 
          to protect your data. Your personal information is kept confidential and 
          never shared without your explicit consent.
        </AccordionItem>
        <AccordionItem
          style={{ padding: "4px 0" }}
          key="8"
          title="How do I get started with RoomBridge?"
        >
          Simply sign up on our platform, set your preferences and budget, 
          and start browsing verified room listings. Our team is here to assist 
          you throughout your room hunting journey in Bhopal.
        </AccordionItem>
      </Accordion>
      <Spacer y={8} />
      <p className="text-center">Still have any questions?</p>
      <Spacer y={2} />
      <div id="contact-section" style={{ textAlign: "center" }}>
        <Button
          as={Link}
          href="mailto:support@roombridge.com"
          className="shadow-[0px_3px_0px_0px_#1a202c]"
          style={{ border: "2px solid #1a202c", margin: "0 auto" }}
          variant="bordered"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
