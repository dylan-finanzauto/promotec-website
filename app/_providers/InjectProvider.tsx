'use client'
import React, { useState } from "react";
import { InjectContext } from "../_context/InjectContext";

type Props = {
  children: React.ReactNode
}

const InjectProvider: React.FC<Props> = ({ children }) => {

  const [inject, setInject] = useState<Record<string, any> | null>(null);

  const changeInjection = (inject: Record<string, any> | null) => {
    setInject(inject)
  }

  return (
    <InjectContext.Provider value={{ inject, changeInjection }}>
      {children}
    </InjectContext.Provider>
  )
}

export default InjectProvider;
