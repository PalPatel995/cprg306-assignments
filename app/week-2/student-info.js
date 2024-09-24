import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Pal Patel</h1>
      <p>
        Check out my GitHub repository: 
        <Link href="https://github.com/PalPatel995/cprg306-assignments" target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;

