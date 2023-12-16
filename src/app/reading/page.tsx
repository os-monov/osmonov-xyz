import React from "react";
import Layout from "@/components/layout";

export default function ReadingPage() {
  return (
    <Layout>
      <div className="mt-10 sm:w-8/12 md:w-6/12 text-gray-600 px-2">
        I used to not read that much, but I&apos;ve gotten better at it with
        age. Here are some of the books I&apos;ve read (in no particular order,
        but somewhat sorted by recency):
        <br />
        <br />
        <span className="font-semibold">Why We Sleep </span>
        <span className="italic">by Matthew Walker</span>
        <br />
        <br />
        <span className="font-semibold">Kitchen Confidential </span>
        <span className="italic">by Anthony Bourdain</span>
        <br />
        <br />
        <span className="font-semibold">Build </span>
        <span className="italic">by Tony Fadell</span>
        <br />
        <br />
        <span className="font-semibold">Deep Work </span>
        <span className="italic">by Cal Newport</span>
        <br />
        <br />
        <span className="font-semibold">A Promised Land </span>
        <span className="italic">by Barack Obama</span>
        <br />
        <br />
        <span className="font-semibold">The Lean Start-Up </span>
        <span className="italic">by Eric Reis</span>
        <br />
        <br />
        <span className="font-semibold">The Hard Thing About Hard Things </span>
        <span className="italic">by Ben Horowitz</span>
        <br />
        <br />
        <span className="font-semibold">Zero to One </span>
        <span className="italic">by Peter Thiel</span>
        <br />
        <br />
        <span className="font-semibold">
          Why We&apos;re Polarized{" "}
        </span> (50%) <span className="italic">by Ezra Klein</span>
        <br />
        <br />
        <span className="font-semibold">Shoe Dog </span>
        <span className="italic">by Phil Knight</span>
        <br />
        <br />
        <span className="font-semibold">The Mamba Mentality </span>
        <span className="italic">by Kobe Bryant</span>
        <br />
      </div>
    </Layout>
  );
}
