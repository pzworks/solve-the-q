import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { lastSeenProps } from "./types";

const LastSeenComponent = (props: lastSeenProps) => {
  const { lastSeenTimestamp }: { lastSeenTimestamp: number} = props;
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let now: number = Math.floor(Date.now() / 1000);
      let timeDiff: number = now - lastSeenTimestamp;
      if (timeDiff <= 30 || timeDiff % 60 === 0) {
        setTimeElapsed(now - lastSeenTimestamp);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeElapsed > 60) {
    return <Text>Last seen: { Math.floor(timeElapsed / 60) } minutes ago.</Text>
  }

  return <Text>Last seen: {timeElapsed} seconds ago.</Text>
}

export default LastSeenComponent;