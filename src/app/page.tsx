import React from "react";
import Layout from "@/components/layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="mt-10 w-10/12 sm:w-8/12 md:w-6/12 text-gray-600 px-2">
        Hey, I&apos;m Alex. I&apos;m a software engineer currently living in New
        York City.
        <br />
        <br />
        I went to UC Berkeley, where I studied Data Science & Economics. To be
        honest, I wish had taken less economics classes.
        <br />
        <br />
        After that, I worked at AWS, where I was one of two engineers to launch{" "}
        <a
          target="_blank"
          href="https://upload.aws.amazon.com/"
          className="underline"
        >
          SecureUpload
        </a>
        . This tool was responsible for collecting hundreds of thousands of
        highly-sensitive documents (driver&apos;s license, credit card
        statement, etc.) from 2-3M AWS customers every year. Our API maintained
        99.999% availability during my tenure.
        <br />
        <br />I quit my job in May of 2022 to work on my own start-up. I then
        briefly joined{" "}
        <a target="_blank" href="https://www.paces.com/" className="underline">
          Paces
        </a>{" "}
        as a founding engineer, before going back out into the wild in mid-2023.
      </div>
    </Layout>
  );
}
