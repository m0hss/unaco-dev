import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Thanks to UNACO, I discovered my true potential. The programs and
              <Mark>guidance provided</Mark> have inspired me to pursue my dreams and
              contribute to my community growth. I now believe in my ability
              to make a difference.
            </p>

            <Avatar
              image={userOneImg}
              name="Amina Steiner"
              title="Johannesburg, South Africa"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The fast organized by UNACO was not just a symbolic
              event; it brought us together for a common cause—to <Mark>fight poverty</Mark>
              in our country. It was inspiring to be part of something bigger
              and see real impact.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lubumbashi, DRC"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Before joining UNACO, I lacked direction. The
              movement has helped me develop <Mark>leadership skills</Mark> and provided a
              platform to be heard. Today, I’m a stronger advocate for change in
              my community.
            </p>

            <Avatar
              image={userThreeImg}
              name="Jean Winn"
              title="Kinshasa, DRC"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-sky-800 bg-sky-100 rounded-md ring-sky-100 ring-4 dark:ring-sky-900 dark:bg-sky-900 dark:text-sky-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
