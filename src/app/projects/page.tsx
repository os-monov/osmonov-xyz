import React from "react";
import Layout from "@/components/layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="mt-10 sm:w-8/12 md:w-6/12 text-gray-600">
        <span className="font-semibold text-lg">Skoop</span>
        <br />
        <span className="text-base">
          Skoop was a B2C mobile web app that allowed users to return online
          orders or ship items from home. You could choose a time that was
          convenient for you, upload a shipping label, & add-on any packaging
          you needed. We signed several partnerships with premier property
          management firms & generated a pint-sized amount of revenue. Brian and
          I interviewed for YC W24, but were told that we couldn&apos;t beat
          DoorDash. At first, we were pissed. But, with time & intellectual
          honesty, we couldn&apos;t convince ourselves that we knew something
          fundamentally different that would allow us to win.
          <br />
          <br />
          Here&apos;s a{" "}
          <a
            target="_blank"
            href="https://osmonov-xyz-assets.s3.amazonaws.com/skoop-demo.mov"
            className={"underline"}
          >
            demo
          </a>{" "}
          of the app.
        </span>
        <br />
        <br />
        <br />
        <span className="font-semibold text-lg">DocuLink</span>
        <br />
        <span className="text-base">
          My vision for DocuLink was a product that was half-DocuSign,
          half-DropBox. After interviewing for YC S22 with just an idea, I built
          the MVP by myself. I didn&apos;t know anything about sales, customer
          discovery, or go-to-market. I made the cliché engineer&apos;s mistake
          of building something & expecting people to come. Despite not getting
          the traction needed to keep going, I was proud of my attempt. It was
          the first large project I built end-to-end because I thought it was a
          worthwhile pursuit; not because someone told me to, but because I
          wanted to.
          <br />
          <br />
          You can find the backend code{" "}
          <a
            target="_blank"
            href="https://github.com/os-monov/doculink-service"
            className={"underline"}
          >
            {" "}
            here
          </a>
          .
        </span>
        <br />
        <br />
        <br />
        <span className="font-semibold text-lg">Samurai</span>
        <br />
        <span className="text-base">
          I wanted to build tools that could help engineering teams cut their
          cloud bill.{" "}
          <a
            target="_blank"
            href="https://github.com/os-monov/samurai-service/blob/mainline/src/orchestrator/orchestrator.service.ts"
            className={"underline"}
          >
            Instance Scheduler
          </a>{" "}
          allowed you to dynamically start/stop your EC2 instance(s) based on a
          schedule. I was able to build this in a few weeks & onboard several GT
          OMSCS students.
        </span>
      </div>
    </Layout>
  );
}

// it was the first project I built end-to-end just because. Not because someone told me to. but because I wanted to.

// - a SaaS/API solution for securely requesting documents at scale: think DocuSign meets DropBox
// - yc competitors: pigeon & uplink
// - built mvp as sole engineer in ~2 months; code
// - quit my job at AWS to work on this full-time; interviewed for YCS22
