import React from 'react'

interface TotalProps {
  courses?: {
    name: string;
    exerciseCount: number;
  }[] | null;
}

const Total: React.FC<TotalProps> = ({ courses }) => {
  if (!courses) {
    return null;
  }

  return (
    <div>
      <p>
        Number of exercises{" "}
        {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  )
}

export default Total
