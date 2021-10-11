import React, { useState } from "react";
import Container from "@/Components/UI/Container";

function Home(){
  const [count, setCount] = useState(0)

  return(
    <Container>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </Container>
  )
};

export default Home;