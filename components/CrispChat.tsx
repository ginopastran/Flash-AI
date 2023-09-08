"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4c860331-966b-446e-8089-5b3cd990801f");
  }, []);

  return null;
};
