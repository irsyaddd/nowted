"use client";

import { useNoteStore } from "@/zustand/noteStore";
import React from "react";

export default function ContentList() {
  const { data, selectNoteDetail, selectMenu, selectNote } = useNoteStore();
  return (
    <section className="justify-around w-[20rem] bg-noted-secondary px-5 pt-8">
      <p className="pb-8 text-xl text-white">{data.title}</p>
      <ul className="space-y-5">
        {data.notes.map((item, index) => (
          <li
            role="button"
            key={item.id}
            onClick={() => {
              selectNoteDetail(item);
              selectNote(item.category);
              selectMenu(item.category, item.id);
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
