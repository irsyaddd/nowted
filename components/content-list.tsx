"use client";

import { useNoteStore } from "@/zustand/noteStore";
import React, { useEffect, useState } from "react";

export default function ContentList() {
  const { data, selectNoteDetail, selectFolder } = useNoteStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="justify-around w-[20rem] bg-noted-secondary px-5 pt-8">
      <p className="pb-8 text-xl text-white">{data.title}</p>
      <ul className="space-y-5">
        {data.notes.map((item) => (
          <li
            role="button"
            key={item.id}
            onClick={() => {
              selectNoteDetail(item);
              selectFolder(item.category, item.id);
            }}
            aria-current={item.id === data.recentSelectedIndex}
            className="p-5 space-y-3 text-white bg-white/[.03] [&[aria-current='true']]:bg-white/10 transition duration-150 cursor-pointer"
          >
            <p>{item.title}</p>
            <div className="flex gap-3 text-sm">
              <p className="text-white/40">{item.createdAt}</p>
              <p className="line-clamp-1 text-ellipsis text-white/60">
                {item.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
