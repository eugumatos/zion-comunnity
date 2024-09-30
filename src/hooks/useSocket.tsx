import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001');

export const useSocket = (event: string, callback: (data: any) => void) => {
  useEffect(() => {
    socket.on(event, callback);

    return () => {
      socket.off(event, callback);
    };
  }, [event, callback]);
};

