"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { projects } from "@/data";

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {projects.map((project) => (
        <div key={project.title} className="w-full group/card">
          <Link href={project.link} target="__blank">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-60 sm:h-72 md:h-80 lg:h-96 rounded-xl shadow-xl flex flex-col justify-end p-4",
                "bg-cover bg-center"
              )}
              style={{
                backgroundImage: `url(${project.thumbnail})`,
              }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="z-10">
                <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white relative shadow-blue-500">
                  {project.title}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
