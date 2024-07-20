"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/1-9">
      <div className="flex h-screen w-full items-center overflow-hidden bg-grayBg object-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="flex min-h-screen flex-col justify-center"
        >
          <Image
            src="/img/useLaptop.gif"
            width={200}
            height={200}
            alt="gif of laptop using"
            className="fixed w-full"
          />
        </motion.div>
      </div>
    </Link>
  );
}
