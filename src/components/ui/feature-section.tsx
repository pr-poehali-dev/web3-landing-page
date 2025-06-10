"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "Почему выбирают нас",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8 cursor-pointer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 relative",
                    index === currentFeature
                      ? "bg-[#ECF86E] border-[#ECF86E] text-black scale-110"
                      : "bg-gray-100 border-gray-300 text-gray-600",
                  )}
                >
                  {index < currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}

                  {index === currentFeature && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#ECF86E]">
                      <div
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#ECF86E] animate-spin"
                        style={{
                          transform: `rotate(${(progress / 100) * 360}deg)`,
                          transition: "transform 0.1s linear",
                        }}
                      />
                    </div>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#121212]">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
            <div className="bg-gray-900 rounded-lg h-full shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="relative h-[calc(100%-48px)] overflow-hidden">
                <AnimatePresence mode="wait">
                  {features.map(
                    (feature, index) =>
                      index === currentFeature && (
                        <motion.div
                          key={index}
                          className="absolute inset-0 overflow-hidden"
                          initial={{ y: 100, opacity: 0, rotateX: -20 }}
                          animate={{ y: 0, opacity: 1, rotateX: 0 }}
                          exit={{ y: -100, opacity: 0, rotateX: 20 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <img
                            src={feature.image}
                            alt={feature.step}
                            className="w-full h-full object-cover transition-transform transform"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
