"use client";

import { useState } from "react";
import { faqData } from "./constants";
import Intro from "@/components/titles/intro";
import Container from "@/components/layout/container";
import FAQAccordion from "./components/faq-accordion";

const FAQSection = () => {
  const [openId, setOpenId] = useState<string>("01");

  return (
    <section id="faq">
      <Container className="py-[78px]">
        <Intro
          unsualTitle="Frequently"
          title="Asked Questions"
          text="Below are some common project FAQs."
        />

        <div>
          {faqData.map((faq) => (
            <FAQAccordion
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? "" : faq.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
