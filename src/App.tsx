import React, { useState } from 'react';
import Form from './components/Forms/Form';

function App() {
  return (
    <>
      <section className='flex items-center justify-center min-h-screen bg-red-900'>
        <div>
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
