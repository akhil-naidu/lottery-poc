'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Button variant='outline' onClick={() => setCount((prev) => prev - 1)}>
        -
      </Button>{' '}
      {count}
      <Button variant='outline' onClick={() => setCount((prev) => prev + 1)}>
        +
      </Button>
    </div>
  );
};

export default Counter;
